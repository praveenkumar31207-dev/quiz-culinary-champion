import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Food Trivia — Chalkboard Menu Quiz" },
      {
        name: "description",
        content:
          "A tasty 12-question food trivia quiz on world cuisines, nutrition, and food science — served on a chalkboard menu.",
      },
      { property: "og:title", content: "Food Trivia — Chalkboard Menu Quiz" },
      {
        property: "og:description",
        content:
          "A tasty 12-question food trivia quiz on world cuisines, nutrition, and food science — served on a chalkboard menu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/quiz.html"
      title="Food Trivia Quiz"
      style={{
        border: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
