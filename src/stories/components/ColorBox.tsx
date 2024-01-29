import { Body } from "../../components/Typography";
import { vars } from "../../utils/theme.css";

type Props = {
  color: string;
  colors: Record<string, Record<string, string>>;
  title: string;
};

export const ColorBox = ({ color, colors, title }: Props) => {
  return (
    <article
      style={{
        background: colors[title][color],
        borderRadius: 8,
        color: vars.colors.neutral["0"],
        height: 50,
        padding: 1,
        textAlign: "center",
        textShadow: "0px 0px 1px black",
        width: 170,
      }}
    >
      <Body size="l" strong={true} noMargin={true}>
        {color}
      </Body>
      <Body size="s" noMargin={true}>
        {colors[title][color]}
      </Body>
    </article>
  );
};
