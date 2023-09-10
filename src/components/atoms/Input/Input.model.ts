import { ChangeEvent } from "react";

export interface InputM {
  width?: string;
  height?: string;
  placeholder: string;
  backGround?: string;
  border?: string;
  textAlign?: string;
  padding?: string;
  borderRadius?: string;
  colorPlaceholder?: string;
  value?: string;
  color?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
