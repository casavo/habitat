import { H3, Body } from "../../components/Typography";
import { space } from "./../../utils/spacing";
import { colors } from "./../../utils/colors";

const padding = {
  padding: space[200],
};

const cell = {
  ...padding,
  borderBottom: "1px solid #ccc",
};

const isLast = (index, list) => index === list.length - 1;

const getColors = (values, title) => {
  const check = colors[values][title] === undefined;
  return check ? [] : Object.keys(colors[values][title]);
};

const getHex = (root, color, value) => {
  const hex = colors[root][color][value];
  return hex ? hex : "#000";
};

export const ColorSection = ({ values }) => {
  const titles = Object.keys(colors[values]);

  return (
    <>
      {titles.map((title, index) => (
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
            <tbody>
              {getColors(values, title).map((e, ii, list) => (
                <tr key={ii}>
                  <td style={isLast(ii, list) ? padding : cell}>
                    <Body noMargin={true}>{title}</Body>
                  </td>
                  <td style={isLast(ii, list) ? padding : cell}>
                    <Body noMargin={true}>{[list[ii]]}</Body>
                  </td>
                  <td style={isLast(ii, list) ? padding : cell}>
                    <Body noMargin={true}>
                      <code>
                        vars.colors.{values}.{title}[{list[ii]}]
                      </code>
                    </Body>
                  </td>
                  <td style={isLast(ii, list) ? padding : cell}>
                    <Body noMargin={true}>
                      <span
                        style={{
                          backgroundColor: getHex(values, title, list[ii]),
                          display: "inline-block",
                          height: space[200],
                          marginRight: space[200],
                          width: space[200],
                        }}
                      ></span>
                      {getHex(values, title, list[ii])}
                    </Body>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
};
