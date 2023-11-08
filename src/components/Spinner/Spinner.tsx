import { Circle, Container, Spin } from "./Spinner.css";

type Props = {
  size: "small" | "medium" | "large";
  theme: "light" | "dark";
  variant?: "primary" | "secondary" | "tertiary";
};

export const Spinner = ({ size, theme, variant }: Props) => {
  return (
    <div className={Container({ size })}>
      <div className={Circle({ size, theme, variant })}></div>
      <div className={Spin({ size, theme, variant })}></div>
    </div>
  );
};
