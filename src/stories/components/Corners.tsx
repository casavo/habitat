import { Body } from "../../components/Typography";
import { space } from "../../utils/spacing";
import { corners } from "../../utils/corners";

export const Label = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      backgroundColor: "#F6F6F1",
      borderRadius: 8,
      padding: 10,
    }}
  >
    {children}
  </span>
);

const TD = ({ children }: { children: React.ReactNode }) => (
  <td
    style={{
      textAlign: "left",
    }}
  >
    <Body>{children}</Body>
  </td>
);

const keys = Object.keys(corners).map(Number);
const values = Object.values(corners);
const REMs = [0.125, 0.5, 1, 1.5, 4, 100];
const cases = [
  "For components, e.g. buttons",
  "For image corners",
  "TBD",
  "TBD",
  "TBD",
  "Use as a round radius on, e.g. round buttons.",
];

export const Table = ({ titles }: { titles: string[] }) => {
  return (
    <table
      style={{
        marginBottom: space[300],
        textAlign: "left",
        width: "100%",
      }}
    >
      <thead>
        <tr>
          {titles.map((title: string) => (
            <th key={title}>
              <Body size="l" strong={true}>
                {title}
              </Body>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((value: string, index: number) => (
          <tr
            key={index}
            style={{
              height: 60,
            }}
          >
            <TD>
              <Label>corner-{keys[index]}</Label>
            </TD>
            <TD>
              <code>vars.corners[{keys[index]}]</code>
            </TD>
            <TD>{keys[index] / 100}x</TD>
            <TD>{REMs[index]}rem</TD>
            <TD>{value}</TD>
            <TD>{cases[index]}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
