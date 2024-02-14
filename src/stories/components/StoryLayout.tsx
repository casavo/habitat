import "./../../utils/reset.css";
import { HabitatTheme, vars } from "./../../utils/theme.css";
import { H1, H2, H4, Body } from "../../components/Typography";
import { Source } from "@storybook/blocks";

type Props = {
  children?: React.ReactNode;
  description?: string | React.ReactNode;
  importLine?: string;
  isComponent?: boolean;
  language?: string;
  title: string;
  usage?: string;
};

const Spacer = () => <hr style={{ margin: `${vars.space[200]} 0` }} />;
const Hgroup = ({ children }: { children: React.ReactNode }) => (
  <hgroup style={{ marginBottom: vars.space[200] }}>{children}</hgroup>
);

export const StoryLayout = ({
  children,
  description,
  importLine,
  isComponent,
  language,
  title,
  usage,
}: Props) => (
  <main className={HabitatTheme}>
    <Hgroup>
      {isComponent ? <H2>{title}</H2> : <H1 display={true}>{title}</H1>}
    </Hgroup>
    {isComponent && description && <Body>{description}</Body>}
    {isComponent && (
      <Hgroup>
        <H4>Example:</H4>
      </Hgroup>
    )}
    <section>{children}</section>
    {isComponent && (
      <>
        <Spacer />
        <H4>Import:</H4>
        <Source code={importLine} language={language} />
        <H4>Usage:</H4>
        <Source code={usage} language={language} />
      </>
    )}
  </main>
);
