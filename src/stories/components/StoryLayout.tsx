import "./../../utils/reset.css";
import { HabitatTheme, vars } from "./../../utils/theme.css";
import { H1, H2, H4, Body } from "./../../components/Typography";

type Props = {
  children?: React.ReactNode;
  description?: string | React.ReactNode;
  importLine?: string;
  isComponent?: boolean;
  title: string;
  usage?: string;
};

const Spacer = () => <hr style={{ margin: "16px 0" }} />;

const code = {
  backgroundColor: vars.colors.neutral["10"],
  padding: "7px",
};

export const StoryLayout = ({
  children,
  description,
  importLine,
  isComponent,
  title,
  usage,
}: Props) => (
  <main className={HabitatTheme}>
    <hgroup style={{ marginBottom: 16 }}>
      {isComponent ? <H2>{title}</H2> : <H1>{title}</H1>}
    </hgroup>
    {isComponent && <Body>{description}</Body>}
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
        <hgroup style={{ marginBottom: 16 }}>
          <H4>Import:</H4>
        </hgroup>
        <pre style={code}>{importLine}</pre>
        <Spacer />
        <hgroup style={{ marginBottom: 16 }}>
          <H4>Usage:</H4>
        </hgroup>
        <pre style={code}>{usage}</pre>
      </>
    )}
  </main>
);
