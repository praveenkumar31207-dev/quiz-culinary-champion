import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Food Encyclopedia — Pros & Cons of Everyday Foods" },
      {
        name: "description",
        content:
          "Explore common foods with their health benefits, drawbacks, nutrition highlights and best uses in the kitchen.",
      },
      { property: "og:title", content: "Food Encyclopedia — Pros & Cons of Everyday Foods" },
      {
        property: "og:description",
        content:
          "Learn about common foods: benefits, drawbacks and best uses — with a beautiful visual guide.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Learn,
});

type Food = {
  name: string;
  tagline: string;
  image: string;
  pros: string[];
  cons: string[];
  facts: string;
};

const FOODS: Food[] = [
  {
    name: "Avocado",
    tagline: "Creamy, nutrient-dense fruit",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=900&q=70&auto=format",
    pros: ["Heart-healthy monounsaturated fats", "High in fiber & potassium", "Rich in vitamins E, K, folate"],
    cons: ["Calorie-dense — easy to overeat", "Can be expensive & seasonal", "Ripens fast then spoils"],
    facts: "About 240 kcal per fruit. Native to south-central Mexico; the name comes from the Nahuatl āhuacatl.",
  },
  {
    name: "Blueberries",
    tagline: "Tiny antioxidant powerhouses",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=900&q=70&auto=format",
    pros: ["Loaded with anthocyanin antioxidants", "Low glycemic index", "Support brain & heart health"],
    cons: ["Pricey out of season", "High pesticide crop — buy organic if possible", "Stain easily"],
    facts: "Native to North America; wild lowbush berries have even more antioxidants than cultivated ones.",
  },
  {
    name: "Salmon",
    tagline: "The gold standard of oily fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=70&auto=format",
    pros: ["Rich in omega-3 (EPA/DHA)", "Complete high-quality protein", "Vitamin D and selenium"],
    cons: ["Farmed varieties can be higher in contaminants", "Overfishing concerns for wild stocks", "Expensive"],
    facts: "Wild sockeye gets its deep red from a carotenoid (astaxanthin) it eats in krill.",
  },
  {
    name: "Dark Chocolate",
    tagline: "Bittersweet with real perks",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=900&q=70&auto=format",
    pros: ["Flavanols may improve blood flow", "Iron, magnesium, copper", "Satisfies sweet cravings in small doses"],
    cons: ["Calorie- and fat-dense", "Contains caffeine & theobromine", "Toxic to dogs"],
    facts: "70%+ cocoa gives the biggest flavanol punch. Milk chocolate has far less.",
  },
  {
    name: "Eggs",
    tagline: "Nature's near-perfect protein",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=900&q=70&auto=format",
    pros: ["Complete amino acid profile", "Choline for brain health", "Very affordable protein"],
    cons: ["Common allergen", "Yolk has dietary cholesterol", "Salmonella risk if raw/underdone"],
    facts: "One large egg = ~72 kcal & 6 g protein. Fresh eggs sink; older eggs float.",
  },
  {
    name: "Broccoli",
    tagline: "Cruciferous everyday hero",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=900&q=70&auto=format",
    pros: ["Very high in vitamin C & K", "Sulforaphane — a cancer-protective compound", "High fiber, low calorie"],
    cons: ["Can cause bloating (raffinose sugars)", "Overcooking destroys nutrients", "Slight bitterness for some"],
    facts: "Steaming 3–5 minutes preserves sulforaphane best; boiling leaches vitamin C into the water.",
  },
  {
    name: "Olive Oil (Extra Virgin)",
    tagline: "Backbone of the Mediterranean diet",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=900&q=70&auto=format",
    pros: ["Monounsaturated fats + polyphenols", "Anti-inflammatory", "Great flavor for finishing"],
    cons: ["Lower smoke point than refined oils", "Frequently adulterated — buy reputable", "Calorie-dense"],
    facts: "'Extra virgin' means first cold pressing with acidity under 0.8% and passing a taste panel.",
  },
  {
    name: "Greek Yogurt",
    tagline: "Strained, thick & protein-packed",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=70&auto=format",
    pros: ["~2× the protein of regular yogurt", "Probiotics for gut health", "Calcium & B12"],
    cons: ["Flavored versions add lots of sugar", "Whey is discarded — environmental cost", "Lactose can bother some"],
    facts: "Traditional straining removes whey until roughly 3 kg milk becomes 1 kg yogurt.",
  },
  {
    name: "Quinoa",
    tagline: "Ancient Andean pseudocereal",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=70&auto=format",
    pros: ["Complete plant protein", "Gluten-free", "Fiber, magnesium, iron"],
    cons: ["Saponin coating tastes bitter (rinse!)", "Higher price than rice", "Water-intensive crop"],
    facts: "Not a true grain — it's a seed related to spinach and beets.",
  },
  {
    name: "Tomatoes",
    tagline: "Culinary vegetable, botanical fruit",
    image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=900&q=70&auto=format",
    pros: ["Lycopene (cancer & heart protective)", "Vitamin C & potassium", "Low calorie, high flavor"],
    cons: ["Acidic — can trigger reflux", "Nightshade allergies for a few", "Off-season = flavorless"],
    facts: "Cooking tomatoes actually increases lycopene availability — pasta sauce wins.",
  },
  {
    name: "Almonds",
    tagline: "Handful of heart help",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=900&q=70&auto=format",
    pros: ["Vitamin E & magnesium", "Healthy fats + fiber = satiety", "Lower LDL cholesterol"],
    cons: ["Very water-intensive crop", "Common allergen", "Easy to over-snack"],
    facts: "A 'serving' is about 23 almonds (~160 kcal).",
  },
  {
    name: "White Rice",
    tagline: "Global staple energy source",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=900&q=70&auto=format",
    pros: ["Easy to digest", "Naturally gluten-free", "Cheap & shelf-stable"],
    cons: ["High glycemic index", "Lower fiber than brown rice", "Arsenic can accumulate — rinse well"],
    facts: "Feeds more than half the world; over 40,000 varieties are grown worldwide.",
  },
];

function Learn() {
  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px 80px" }}>
        <TopNav />
        <header style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={h1Style}>The Food Encyclopedia</h1>
          <p style={subStyle}>
            A visual guide to everyday foods — their benefits, their trade-offs, and the tasty facts behind them.
          </p>
        </header>
        <div style={grid}>
          {FOODS.map((f) => (
            <article key={f.name} style={card}>
              <div style={{ ...imgWrap }}>
                <img src={f.image} alt={f.name} loading="lazy" style={imgStyle} />
              </div>
              <div style={{ padding: 18 }}>
                <h2 style={cardTitle}>{f.name}</h2>
                <p style={taglineStyle}>{f.tagline}</p>
                <div style={proConWrap}>
                  <div>
                    <div style={proHead}>✓ Pros</div>
                    <ul style={list}>
                      {f.pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={conHead}>✗ Cons</div>
                    <ul style={list}>
                      {f.cons.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p style={factStyle}>💡 {f.facts}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={navLink}>← Quiz</Link>
      <Link to="/learn" style={{ ...navLink, ...navActive }}>Food Encyclopedia</Link>
      <Link to="/cuisines" style={navLink}>World Cuisines</Link>
    </nav>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(ellipse at 15% 10%, rgba(232,197,107,0.10), transparent 55%),radial-gradient(ellipse at 85% 90%, rgba(255,122,89,0.10), transparent 55%),linear-gradient(160deg, #1e0710 0%, #340b1c 45%, #14060c 100%)",
  color: "#f7ecd0",
  fontFamily: "'Special Elite', ui-monospace, Menlo, monospace",
};
const h1Style: React.CSSProperties = { fontFamily: "'Caveat', cursive", fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "#ffd97a", margin: 0 };
const subStyle: React.CSSProperties = { color: "#cdb98a", maxWidth: 620, margin: "10px auto 0" };
const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 };
const card: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(42,10,24,0.85), rgba(20,6,12,0.85))",
  border: "1px solid rgba(232,197,107,0.35)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
};
const imgWrap: React.CSSProperties = { width: "100%", aspectRatio: "16 / 10", overflow: "hidden", background: "#1a0710" };
const imgStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
const cardTitle: React.CSSProperties = { fontFamily: "'Caveat', cursive", fontSize: "2rem", color: "#ffd97a", margin: "0 0 4px" };
const taglineStyle: React.CSSProperties = { color: "#cdb98a", fontStyle: "italic", margin: "0 0 12px", fontSize: 14 };
const proConWrap: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 };
const proHead: React.CSSProperties = { color: "#7ed957", fontWeight: 700, marginBottom: 4 };
const conHead: React.CSSProperties = { color: "#ff7a59", fontWeight: 700, marginBottom: 4 };
const list: React.CSSProperties = { margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.45 };
const factStyle: React.CSSProperties = {
  marginTop: 12,
  padding: "8px 10px",
  background: "rgba(232,197,107,0.10)",
  border: "1px dashed rgba(232,197,107,0.35)",
  borderRadius: 10,
  fontSize: 13,
  color: "#f4e8c1",
};
const navStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  justifyContent: "center",
  marginBottom: 26,
};
const navLink: React.CSSProperties = {
  padding: "8px 14px",
  borderRadius: 999,
  background: "rgba(232,197,107,0.10)",
  border: "1px solid rgba(232,197,107,0.4)",
  color: "#f4e8c1",
  textDecoration: "none",
  fontSize: 14,
};
const navActive: React.CSSProperties = { background: "rgba(232,197,107,0.28)", color: "#fff8dc" };
