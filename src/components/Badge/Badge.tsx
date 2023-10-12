import React from "react";
import { ErrorIcon } from "../../assets/badge/ErrorIcon";
import { SuccessIcon } from "../../assets/badge/SuccessIcon";
import { WarningIcon } from "../../assets/badge/WarningIcon";
import { BadgeContainer } from "./Badge.css";
import { Body } from "../Typography";

type BadgeProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: "success" | "error" | "warning";
  theme?: "light" | "dark";
};

type StatusIcon = {
  error: React.ReactNode;
  success: React.ReactNode;
  warning: React.ReactNode;
};

const statusIcon: StatusIcon = {
  error: <ErrorIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

export const Badge = ({
  children,
  icon,
  status,
  theme = "light",
}: BadgeProps) => {
  return (
    <span className={BadgeContainer({ status, theme })}>
      {status ? statusIcon[status] : icon}
      <Body size="s">{children}</Body>
    </span>
  );
};
