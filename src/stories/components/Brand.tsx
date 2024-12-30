import { H3, Body } from "../../components/Typography";

const data = [
  {
    color: "Orange",
    description:
      "Used as a primary colour for backgrounds, accents, illustrations, etc.",
    hex: "#FF991F",
    title: "Primary",
  },
  {
    color: "Green",
    description:
      "Used as a secondary colour primarily for backgrounds to create constrast.",
    hex: "#063D39",
    title: "Secondary",
  },
  {
    color: "Teal",
    description:
      "Used as an additional accent colour to compliment the orange palette.",
    hex: "#25C1A3",
    title: "Accent",
  },
];

export const Brand = () => {
  return (
    <section
      style={{
        display: "grid",
        gap: "var(--space-300)",
        gridTemplateColumns: "repeat(3, 260px)",
      }}
    >
      {data.map((item, index) => (
        <>
          <div>
            <H3>{item.title}</H3>
            <article
              key={index}
              style={{
                border: `1px solid var(--neutral-300)`,
                borderRadius: "var(--corner-100)",
                padding: "var(--space-300)",
              }}
            >
              <div
                style={{
                  backgroundColor: item.hex,
                  borderRadius: "var(--corner-100)",
                  height: 80,
                  marginBottom: "var(--space-100)",
                  width: 80,
                }}
              ></div>
              <Body strong>{item.color}</Body>
              <Body>{item.hex}</Body>
              <Body size="s">{item.description}</Body>
            </article>
          </div>
        </>
      ))}
    </section>
  );
};
