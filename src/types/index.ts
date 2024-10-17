import { ReactNode } from "react";

export type ButtonVariant =
  | "default"
  | "input"
  | "gray"
  | "grayFull"
  | "link"
  | "product";

export type ButtonSize = "default" | "sm" | "md" | "lg" | "icon";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}
