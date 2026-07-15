import { createFileRoute } from "@tanstack/react-router";

const CORS_HEADERS: HeadersInit = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

type Body = {
  question?: string;
  correctAnswer?: string;
  category?: string;
};

export const Route = createFileRoute("/api/explain")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS_HEADERS }),
      POST: async ({ request }) => {
        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return Response.json(
            { error: "AI not configured" },
            { status: 500, headers: CORS_HEADERS },
          );
        }
        let body: Body;
        try {
          body = (await request.json()) as Body;
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400, headers: CORS_HEADERS });
        }
        const question = (body.question ?? "").toString().slice(0, 500);
        const correctAnswer = (body.correctAnswer ?? "").toString().slice(0, 200);
        const category = (body.category ?? "").toString().slice(0, 100);
        if (!question || !correctAnswer) {
          return Response.json(
            { error: "Missing question or correctAnswer" },
            { status: 400, headers: CORS_HEADERS },
          );
        }

        const prompt = `You are a friendly food-trivia host. In 1-2 short sentences (max ~45 words), explain WHY the correct answer is right. Be warm, factual, and specific. Do not repeat the question verbatim. No preamble.

Category: ${category || "food"}
Question: ${question}
Correct answer: ${correctAnswer}`;

        try {
          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
              "X-Lovable-AIG-SDK": "custom",
            },
            body: JSON.stringify({
              model: "google/gemini-3.5-flash",
              messages: [{ role: "user", content: prompt }],
            }),
          });
          if (!res.ok) {
            const text = await res.text();
            const status = res.status === 429 || res.status === 402 ? res.status : 502;
            return Response.json(
              {
                error:
                  res.status === 429
                    ? "AI is busy — try again in a moment."
                    : res.status === 402
                      ? "AI credits exhausted."
                      : "AI request failed.",
                detail: text.slice(0, 200),
              },
              { status, headers: CORS_HEADERS },
            );
          }
          const data = (await res.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const explanation = data.choices?.[0]?.message?.content?.trim() ?? "";
          return Response.json({ explanation }, { headers: CORS_HEADERS });
        } catch (err) {
          return Response.json(
            { error: "AI request failed", detail: String(err).slice(0, 200) },
            { status: 502, headers: CORS_HEADERS },
          );
        }
      },
    },
  },
});
