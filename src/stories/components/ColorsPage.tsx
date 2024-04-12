import { H3, Body } from "../../components/Typography";
import { space } from "../../utils/spacing";
import { colors } from "../../utils/colors";

const padding = {
  padding: space[200],
};

const cell = {
  ...padding,
  borderBottom: `1px solid ${colors.root.neutral[200]}`,
};

const isLast = (index: number, list: string[]) => index === list.length - 1;

const getColors = (key: object, title: string) => {
  // @ts-ignore
  const check = key[title] === undefined;
  // @ts-ignore
  return check ? [] : Object.keys(key[title]);
};

const getHex = (key: object, color: string, value: string) => {
  // @ts-ignore
  const hex = key[color][value];
  return hex ? hex : "#000";
};

export const ColorSection = ({ values }: { values: string }) => {
  const multi = values.split(".");
  // @ts-ignore
  const key = multi.length > 1 ? colors[multi[0]][multi[1]] : colors[values];
  const titles: string[] = Object.keys(key);

  return (
    <>
      {titles.map((title: string, index: number) => (
        <section key={index} style={{ margin: `${space[300]} 0` }}>
          <H3>{title.charAt(0).toUpperCase() + title.slice(1)}</H3>
          <table
            style={{
              border: `1px solid #ccc`,
              borderRadius: space['050'],
              textAlign: "left",
              width: "100%",
            }}
          >
            <thead
              style={{
                border: 0,
                borderBottom: `1px solid #ccc`,
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
              {getColors(key, title).map(
                (_e: string, ii: number, list: string[]) => (
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
                            backgroundColor: getHex(key, title, list[ii]),
                            display: "inline-block",
                            height: space[200],
                            marginRight: space[200],
                            width: space[200],
                          }}
                        ></span>
                        {getHex(key, title, list[ii])}
                      </Body>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
};
