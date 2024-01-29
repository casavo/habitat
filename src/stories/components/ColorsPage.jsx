import { H2, H3, Body } from "./../../components/Typography";
import { space } from "./../../utils/spacing";
import tokens from "./../../utils/tokens.json";
import { ColorBox } from "./ColorBox";
import { StoryLayout } from "./StoryLayout";

const colors = tokens.foundations.colors;

const titles = Object.keys(colors);

const last = titles[titles.length - 1];

const getColors = (title) => {
  const section = Object.keys(colors[title]);

  return section.map((color, i) =>
    typeof colors[title][color] === "string" ? (
      <ColorBox key={i} colors={colors} color={color} title={title} />
    ) : (
      <></>
    )
  );
};

const getNestedColors = (title) => {
  const section = Object.keys(colors["alertcolors"][title]);
  const alerts = colors["alertcolors"];

  return section.map((color, ii) => (
    <ColorBox key={ii} colors={alerts} color={color} title={title} />
  ));
};

const grid = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: space[300],
  marginTop: 10,
};

export const ColorsPage = () => (
  <StoryLayout title="Colors">
    <Body>These are the color tokens exported by Habitat.</Body>
    {titles
      .filter((_e, i) => i !== titles.length - 1)
      .map((title, index) => (
        <section key={index} style={{ margin: `${space[300]} 0` }}>
          <H2>{title}</H2>
          <ul style={grid}>{getColors(title)}</ul>
        </section>
      ))}
    <H2>{last}</H2>
    {Object.keys(colors[last]).map((title, index) => (
      <section key={index} style={{ margin: `${space[300]} 0` }}>
        <H3>{title}</H3>
        <ul style={grid}>{getNestedColors(title)}</ul>
      </section>
    ))}
  </StoryLayout>
);
