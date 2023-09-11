import { ReactNode } from "react";

export interface WrapM {
  cursor?: string;
  padding?: string;
  justifyContent?: string;
  gap?: string;
  borderRadius?: string;
  backGround?: string;
  boxShadow?: string;
  children?: ReactNode;
  flexDirection?: string;
  overflow?: string;
  height?: string;
  width?: string;
  alignItems?: string;
  border?: string;
  className?: string;
  minHeight?: string;
  maxHeight?: string;
  display?: string;
  mediaDisplay?: string;
  media?: string;
  maxWidth?: string;
  media2maxWidth?: string;
  media2?: string;
  hoverBack?: string;
  position?: string;
  bottom?: string;
  left?: string;
  mediaFlexDirection?: string;
  mediaJustifyContent?: string;
  effectHover?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
