import { H3, Body, Inline } from "./../../components/Typography";
import { space } from "./../../utils/spacing";
import tokens from "./../../utils/tokens.json";
import { StoryLayout } from "./StoryLayout";

const colors = tokens.foundations.colors;

const titles = Object.keys(colors);

const last = titles[titles.length - 1];

const padding = {
  padding: space[200],
};

const cell = {
  ...padding,
  borderBottom: "1px solid #ccc",
};

const getColors = (title, nested = false) => {
  const section = nested ? Object.keys(colors["alertcolors"][title]) : Object.keys(colors[title]);
  const alerts = colors["alertcolors"];

  const isLast = (i) => i === section.length - 1;

  return section.map((color, i) =>
    typeof (nested ? alerts[title][color] : colors[title][color]) === "string" ? (
      <tr key={i}>
        <td style={isLast(i) ? padding: cell}>
          <Body noMargin={true}>{title}</Body>
        </td>
        <td style={isLast(i) ? padding: cell}>
          <Body noMargin={true}>{color}</Body>
        </td>
        <td style={isLast(i) ? padding: cell}>
          <Body noMargin={true}>vars.colors{nested ? '.alertcolors' : ''}.{title}[{color}]</Body>
        </td>
        <td style={isLast(i) ? padding: cell}>
          <Body noMargin={true}>
            <span style={{
              backgroundColor: nested ? alerts[title][color] : colors[title][color],
              display: "inline-block",
              height: space[200],
              marginRight: space[200],
              width: space[200],
            }}></span>
            {nested ? alerts[title][color] : colors[title][color]}
          </Body>
        </td>
      </tr>
    ) : (
      <></>
    )
  );
};

export const ColorsPage = () => (
  <StoryLayout title="Root color tokens">
    <Body>
      Our entire catalog of brand colours, e.g. <Inline italic={true}>orange.100</Inline>. This is the most
      atomic form of colour.
    </Body>

    {titles
      .filter((_e, i) => i !== titles.length - 1)
      .map((title, index) => (
        <section key={index} style={{ margin: `${space[300]} 0` }}>
          <H3>{title.charAt(0).toUpperCase() + title.slice(1)}</H3>
          <table
            style={{
              border: "1px solid #ccc",
              borderRadius: space[50],
              textAlign: "left",
              width: "100%",
            }}
          >
            <thead
              style={{
                border: 0,
                borderBottom: "1px solid #ccc",
              }}
            >
              <tr>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    Brand name
                  </Body>
                </th>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    Value
                  </Body>
                </th>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    JS token
                  </Body>
                </th>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    Swatch
                  </Body>
                </th>
              </tr>
            </thead>
            <tbody>{getColors(title)}</tbody>
          </table>
        </section>
      ))}

      
    {Object.keys(colors[last]).map((title, index) => (
      <section key={index} style={{ margin: `${space[300]} 0` }}>
          <H3>{title.charAt(0).toUpperCase() + title.slice(1)}</H3>
          <table
            style={{
              border: "1px solid #ccc",
              borderRadius: space[50],
              textAlign: "left",
              width: "100%",
            }}
          >
            <thead
              style={{
                border: 0,
                borderBottom: "1px solid #ccc",
              }}
            >
              <tr>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    Brand name
                  </Body>
                </th>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    Value
                  </Body>
                </th>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    JS token
                  </Body>
                </th>
                <th style={cell}>
                  <Body strong={true} noMargin={true}>
                    Swatch
                  </Body>
                </th>
              </tr>
            </thead>
            <tbody>{getColors(title, true)}</tbody>
          </table>
        </section>
    ))}

  </StoryLayout>
);
