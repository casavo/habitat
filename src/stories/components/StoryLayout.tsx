import "./../../utils/reset.css";
import { HabitatTheme } from "./../../utils/theme.css";
import { H1, H2, H4, Body } from "./../../components/Typography";
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

const Spacer = () => <hr style={{ margin: "16px 0" }} />;

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
    <hgroup style={{ marginBottom: 16 }}>
      {isComponent ? <H2>{title}</H2> : <H1>{title}</H1>}
    </hgroup>
    {isComponent && description && <Body>{description}</Body>}
    <Spacer />
    {isComponent && (
      <hgroup style={{ marginBottom: 16 }}>
        <H4>Example:</H4>
      </hgroup>
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
