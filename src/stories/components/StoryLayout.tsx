import "./../../utils/reset.css";
import { CasavoHabitatTheme, themeContract } from "./../../utils/themes";
import { H1, H2, H4, Body } from "../../components/Typography";
// import { Source } from "@storybook/blocks";
import { SupportedLanguage } from "@storybook/components";

type Props = {
  children?: React.ReactNode;
  description?: string | React.ReactNode;
  importLine?: string;
  isComponent?: boolean;
  language?: SupportedLanguage;
  title?: string;
  usage?: string;
};

const Spacer = () => <hr style={{ margin: `${themeContract.space[200]} 0` }} />;
const Hgroup = ({ children }: { children: React.ReactNode }) => (
  <hgroup style={{ marginBottom: themeContract.space[200] }}>{children}</hgroup>
);

/**
 * TODO: remove the <pre> tags and revert to <Source> component as soon as it stop breaking (issue from Storybook v8)
 */

export const StoryLayout = ({
  children,
  description,
  importLine,
  isComponent,
  // language,
  title,
  usage,
}: Props) => (
  <main className={CasavoHabitatTheme}>
    {title && (
      <Hgroup>
        {isComponent ? <H2>{title}</H2> : <H1 display={true}>{title}</H1>}
      </Hgroup>
    )}
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
        {/* <Source code={importLine} language={language} /> */}
        <pre style={{ marginBottom: 32 }}>{importLine}</pre>
        <H4>Usage:</H4>
        {/* <Source code={usage} language={language} /> */}
        <pre>{usage}</pre>
      </>
    )}
  </main>
);
