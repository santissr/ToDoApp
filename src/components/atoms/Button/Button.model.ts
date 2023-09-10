import React from "react";

export interface ButtonM {
  borderRadius?: string;
  backGround?: string;
  text?: string;
  padding?: string;
  border?: string;
  width?: string;
  isButton1?: boolean;
  height?: string;
  minWidth?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  maxWidth?: string;
}
