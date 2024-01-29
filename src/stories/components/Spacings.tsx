import { Body } from "../../components/Typography";
import { space } from "../../utils/spacing";

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

const Example = ({ value }: { value: number }) => (
  <div
    style={{
      backgroundColor: "#FF991F",
      height: 8,
      width: value,
    }}
  />
);

const values = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 6, 8, 10, 18];
const REMs = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1, 1, 2, 3, 4, 4, 4];

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
        {values.map((value: number, index: number) => (
          <tr
            key={index}
            style={{
              height: 60,
            }}
          >
            <TD>
              <Label>space-{value * 100}</Label>
            </TD>
            <TD>
              <code>vars.space[{value * 100}]</code>
            </TD>
            <TD>{value}</TD>
            <TD>{REMs[index]}rem</TD>
            <TD>{value * 8}px</TD>
            <TD>
              <Example value={value * 8} />
            </TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
