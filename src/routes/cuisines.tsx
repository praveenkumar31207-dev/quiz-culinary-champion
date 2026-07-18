import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/cuisines")({
  head: () => ({
    meta: [
      { title: "World Cuisines — A Visual Tour of Global Food Cultures" },
      {
        name: "description",
        content:
          "Explore cuisines from every continent — signature dishes, staple ingredients, and what makes each food culture unique.",
      },
      { property: "og:title", content: "World Cuisines — A Visual Tour of Global Food Cultures" },
      {
        property: "og:description",
        content:
          "From ramen to tagine, discover global cuisines with images, signature dishes and cultural notes.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cuisines,
});

type Cuisine = {
  name: string;
  region: string;
  image: string;
  signature: string[];
  staples: string[];
  note: string;
};

const CUISINES: Cuisine[] = [
  { name: "Italian", region: "Europe", image: "https://images.unsplash.com/photo-1548365328-9f547fb0953a?w=900&q=70&auto=format", signature: ["Pizza Napoletana", "Carbonara", "Risotto"], staples: ["Olive oil", "Tomato", "Parmigiano", "Basil"], note: "Region-first cooking: each of the 20 regions has its own tradition, pasta shapes and dialect." },
  { name: "French", region: "Europe", image: "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?w=900&q=70&auto=format", signature: ["Coq au Vin", "Bouillabaisse", "Croissant"], staples: ["Butter", "Wine", "Cream", "Herbs de Provence"], note: "Codified by Escoffier; the base of most classical restaurant technique worldwide." },
  { name: "Spanish", region: "Europe", image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=900&q=70&auto=format", signature: ["Paella", "Jamón ibérico", "Tortilla española"], staples: ["Olive oil", "Saffron", "Paprika", "Chorizo"], note: "Tapas culture — small plates shared over long social meals." },
  { name: "Greek", region: "Europe", image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=900&q=70&auto=format", signature: ["Moussaka", "Souvlaki", "Spanakopita"], staples: ["Feta", "Olives", "Lemon", "Oregano"], note: "A cornerstone of the Mediterranean diet — one of the most studied for longevity." },
  { name: "Japanese", region: "Asia", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=900&q=70&auto=format", signature: ["Sushi", "Ramen", "Tempura"], staples: ["Rice", "Dashi", "Miso", "Soy sauce"], note: "Umami — the fifth taste — was discovered in Japan (Ikeda, 1908) from kombu dashi." },
  { name: "Chinese", region: "Asia", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=70&auto=format", signature: ["Peking duck", "Mapo tofu", "Dim sum"], staples: ["Rice", "Soy sauce", "Ginger", "Scallion"], note: "Eight great regional cuisines — from delicate Cantonese to fiery Sichuan." },
  { name: "Korean", region: "Asia", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=900&q=70&auto=format", signature: ["Bibimbap", "Bulgogi", "Kimchi jjigae"], staples: ["Rice", "Gochujang", "Kimchi", "Sesame"], note: "Fermentation is central — kimchi alone has hundreds of regional variations." },
  { name: "Thai", region: "Asia", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&q=70&auto=format", signature: ["Pad Thai", "Tom Yum", "Green curry"], staples: ["Fish sauce", "Lemongrass", "Coconut", "Bird's-eye chili"], note: "Balances four tastes in every dish: sweet, sour, salty and spicy." },
  { name: "Indian", region: "Asia", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=70&auto=format", signature: ["Biryani", "Butter chicken", "Dosa"], staples: ["Rice", "Lentils", "Ghee", "Garam masala"], note: "Massively regional — north tends to wheat & dairy, south to rice, coconut and tamarind." },
  { name: "Vietnamese", region: "Asia", image: "https://images.unsplash.com/photo-1583224944844-5b268c057b72?w=900&q=70&auto=format", signature: ["Phở", "Bánh mì", "Bún chả"], staples: ["Rice noodles", "Fish sauce", "Fresh herbs", "Lime"], note: "Light, herb-forward and balanced — a French colonial baguette meets local ingredients in bánh mì." },
  { name: "Mexican", region: "Americas", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=70&auto=format", signature: ["Tacos al pastor", "Mole poblano", "Pozole"], staples: ["Corn", "Beans", "Chili", "Lime"], note: "UNESCO Intangible Cultural Heritage — corn-nixtamalization is a 3,500-year-old technique." },
  { name: "Peruvian", region: "Americas", image: "https://images.unsplash.com/photo-1580669281326-c123ac47c8a5?w=900&q=70&auto=format", signature: ["Ceviche", "Lomo saltado", "Ají de gallina"], staples: ["Potato", "Corn", "Ají chilies", "Lime"], note: "Home to 4,000+ potato varieties; considered one of the world's most exciting culinary scenes." },
  { name: "Brazilian", region: "Americas", image: "https://images.unsplash.com/photo-1544982877-f0f4427c6b2a?w=900&q=70&auto=format", signature: ["Feijoada", "Moqueca", "Pão de queijo"], staples: ["Black beans", "Cassava", "Rice", "Dendê oil"], note: "African, Portuguese and Indigenous cooking fused into a distinctly regional cuisine." },
  { name: "American (US) BBQ", region: "Americas", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=70&auto=format", signature: ["Texas brisket", "Carolina pulled pork", "KC ribs"], staples: ["Smoked wood", "Rubs", "Vinegar/tomato sauces"], note: "Four distinct regional traditions — sauce, wood and cut change every few hundred miles." },
  { name: "Moroccan", region: "Africa", image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=900&q=70&auto=format", signature: ["Tagine", "Couscous", "Pastilla"], staples: ["Preserved lemon", "Ras el hanout", "Olives", "Almonds"], note: "Sweet-savory pairing (cinnamon with lamb, honey with fish) is a hallmark." },
  { name: "Ethiopian", region: "Africa", image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=900&q=70&auto=format", signature: ["Doro wat", "Injera", "Kitfo"], staples: ["Teff", "Berbere spice", "Niter kibbeh"], note: "Injera — a spongy sourdough flatbread from teff — is both plate and utensil." },
  { name: "Lebanese", region: "Middle East", image: "https://images.unsplash.com/photo-1544378730-6d68a5e0e64e?w=900&q=70&auto=format", signature: ["Hummus", "Tabbouleh", "Kibbeh"], staples: ["Chickpeas", "Tahini", "Bulgur", "Sumac"], note: "Mezze culture — dozens of small dishes eaten slowly with flatbread and arak." },
  { name: "Turkish", region: "Middle East", image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=900&q=70&auto=format", signature: ["Kebap", "Meze", "Baklava"], staples: ["Yogurt", "Lamb", "Bulgur", "Pomegranate"], note: "Ottoman court cuisine influenced food from the Balkans to North Africa." },
];

function Cuisines() {
  const [filter, setFilter] = useState<string>("All");
  const regions = useMemo(
    () => ["All", ...Array.from(new Set(CUISINES.map((c) => c.region)))],
    []
  );
  const list = filter === "All" ? CUISINES : CUISINES.filter((c) => c.region === filter);

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px 80px" }}>
        <nav style={navStyle}>
          <Link to="/" style={navLink}>← Quiz</Link>
          <Link to="/learn" style={navLink}>Food Encyclopedia</Link>
          <Link to="/cuisines" style={{ ...navLink, ...navActive }}>World Cuisines</Link>
        </nav>
        <header style={{ textAlign: "center", marginBottom: 30 }}>
          <h1 style={h1Style}>World Cuisines</h1>
          <p style={subStyle}>
            A visual tour of global food cultures — signature dishes, kitchen staples and the story behind each table.
          </p>
        </header>
        <div style={filterBar}>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              style={{ ...chip, ...(r === filter ? chipActive : {}) }}
            >
              {r}
            </button>
          ))}
        </div>
        <div style={grid}>
          {list.map((c) => (
            <article key={c.name} style={card}>
              <div style={imgWrap}>
                <img src={c.image} alt={c.name + " cuisine"} loading="lazy" style={imgStyle} />
                <span style={badge}>{c.region}</span>
              </div>
              <div style={{ padding: 18 }}>
                <h2 style={cardTitle}>{c.name}</h2>
                <p style={sectionLbl}>Signature dishes</p>
                <div style={pillWrap}>{c.signature.map((s) => (<span key={s} style={pill}>{s}</span>))}</div>
                <p style={sectionLbl}>Kitchen staples</p>
                <div style={pillWrap}>{c.staples.map((s) => (<span key={s} style={{ ...pill, ...pillAlt }}>{s}</span>))}</div>
                <p style={noteStyle}>📖 {c.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
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
const subStyle: React.CSSProperties = { color: "#cdb98a", maxWidth: 640, margin: "10px auto 0" };
const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 };
const card: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(42,10,24,0.85), rgba(20,6,12,0.85))",
  border: "1px solid rgba(232,197,107,0.35)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
};
const imgWrap: React.CSSProperties = { position: "relative", width: "100%", aspectRatio: "16 / 10", overflow: "hidden", background: "#1a0710" };
const imgStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
const badge: React.CSSProperties = { position: "absolute", top: 10, left: 10, background: "rgba(15,20,18,0.75)", color: "#ffd97a", padding: "4px 10px", borderRadius: 999, fontSize: 12, border: "1px solid rgba(232,197,107,0.45)" };
const cardTitle: React.CSSProperties = { fontFamily: "'Caveat', cursive", fontSize: "2rem", color: "#ffd97a", margin: "0 0 8px" };
const sectionLbl: React.CSSProperties = { color: "#cdb98a", margin: "10px 0 6px", fontSize: 12, letterSpacing: 1, textTransform: "uppercase" };
const pillWrap: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 6 };
const pill: React.CSSProperties = { background: "rgba(232,197,107,0.14)", border: "1px solid rgba(232,197,107,0.35)", padding: "3px 9px", borderRadius: 999, fontSize: 12, color: "#f4e8c1" };
const pillAlt: React.CSSProperties = { background: "rgba(126,217,87,0.08)", border: "1px solid rgba(126,217,87,0.35)", color: "#dff5cf" };
const noteStyle: React.CSSProperties = { marginTop: 12, padding: "8px 10px", background: "rgba(232,197,107,0.10)", border: "1px dashed rgba(232,197,107,0.35)", borderRadius: 10, fontSize: 13, color: "#f4e8c1" };
const filterBar: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 24 };
const chip: React.CSSProperties = { padding: "6px 14px", borderRadius: 999, background: "rgba(232,197,107,0.08)", border: "1px solid rgba(232,197,107,0.35)", color: "#f4e8c1", cursor: "pointer", fontFamily: "inherit", fontSize: 13 };
const chipActive: React.CSSProperties = { background: "rgba(232,197,107,0.32)", color: "#fff8dc" };
const navStyle: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 26 };
const navLink: React.CSSProperties = { padding: "8px 14px", borderRadius: 999, background: "rgba(232,197,107,0.10)", border: "1px solid rgba(232,197,107,0.4)", color: "#f4e8c1", textDecoration: "none", fontSize: 14 };
const navActive: React.CSSProperties = { background: "rgba(232,197,107,0.28)", color: "#fff8dc" };
