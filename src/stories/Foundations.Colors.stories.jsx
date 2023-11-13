import "./../utils/reset.css";
import { H1, H2, H3, Body } from "./../components/Typography";
import tokens from "./../utils/tokens.json";

const meta = {
  argTypes: {},
  title: "Foundations/Colors",
};

export default meta;

const colors = tokens.foundations.colors;

const titles = Object.keys(colors);

const last = titles[titles.length - 1];

const getColors = (title) => {
  const section = Object.keys(colors[title]);

  return section.map((color, ii) =>
    typeof colors[title][color] === "string" ? (
      <article
        key={ii}
        style={{
          background: colors[title][color],
          borderRadius: 8,
          color: "white",
          height: 50,
          padding: 10,
          textAlign: "center",
          textShadow: "0px 0px 1px black",
          width: 170,
        }}
      >
        <Body size="l" strong={true}>
          {color}
        </Body>
      </article>
    ) : (
      <></>
    )
  );
};

const getNestedColors = (title) => {
  const section = Object.keys(colors["alertcolors"][title]);

  return section.map((color, ii) => (
    <article
      key={ii}
      style={{
        background: colors["alertcolors"][title][color],
        borderRadius: 8,
        color: "white",
        height: 50,
        padding: 10,
        textAlign: "center",
        textShadow: "0px 0px 1px black",
        width: 170,
      }}
    >
      <Body size="l" strong={true}>
        {color}
      </Body>
    </article>
  ));
};

const grid = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 20,
  marginTop: 10,
};

export const Colors = {
  render: () => (
    <main>
      <H1>Colors</H1>
      <Body>These are the color tokens exported by Habitat.</Body>
      {titles
        .filter((_e, i) => i !== titles.length - 1)
        .map((title, index) => (
          <section key={index} style={{ margin: "24px 0" }}>
            <H2>{title}</H2>
            <ul style={grid}>{getColors(title)}</ul>
          </section>
        ))}
      <H2>{last}</H2>
      {Object.keys(colors[last]).map((title, index) => (
        <section key={index} style={{ margin: "24px 0" }}>
          <H3>{title}</H3>
          <ul style={grid}>{getNestedColors(title)}</ul>
        </section>
      ))}
    </main>
  ),
};
