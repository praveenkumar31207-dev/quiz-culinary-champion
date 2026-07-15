import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

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
  const [email, setEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setEmail(data.session?.user?.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function signIn() {
    setError(null);
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) setError(result.error.message || "Sign-in failed");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sign-in failed");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    setBusy(true);
    await supabase.auth.signOut();
    setBusy(false);
  }

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 10px",
          borderRadius: 999,
          background: "rgba(15,20,18,0.72)",
          border: "1px solid rgba(232,197,107,0.35)",
          color: "#f4e8c1",
          fontFamily:
            "'Special Elite', ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 13,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
          maxWidth: "min(92vw, 380px)",
        }}
      >
        {email ? (
          <>
            <span
              title={email}
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: 200,
                opacity: 0.9,
              }}
            >
              {email}
            </span>
            <button
              onClick={signOut}
              disabled={busy}
              style={authBtn}
              aria-label="Sign out"
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={signIn}
            disabled={busy}
            style={authBtn}
            aria-label="Sign in with Google"
          >
            <GoogleGlyph />
            {busy ? "Opening…" : "Sign in with Google"}
          </button>
        )}
      </div>
      {error && (
        <div
          role="alert"
          style={{
            position: "fixed",
            top: 60,
            right: 10,
            zIndex: 10,
            padding: "6px 10px",
            borderRadius: 8,
            background: "rgba(120,20,30,0.9)",
            color: "#fff",
            fontFamily:
              "'Special Elite', ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 12,
            maxWidth: 320,
          }}
        >
          {error}
        </div>
      )}
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
    </div>
  );
}

const authBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "5px 10px",
  borderRadius: 999,
  background: "rgba(232,197,107,0.12)",
  border: "1px solid rgba(232,197,107,0.55)",
  color: "#f4e8c1",
  fontFamily: "inherit",
  fontSize: 13,
  cursor: "pointer",
};

function GoogleGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.1 29.7 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.1l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.1 29.7 4 24 4 16.3 4 9.6 8.3 6.3 14.1z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.6C29.7 34.4 27 35.5 24 35.5c-5.3 0-9.7-3.1-11.3-7.5l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.6 5.6C41.9 36.6 44 30.9 44 24c0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}
