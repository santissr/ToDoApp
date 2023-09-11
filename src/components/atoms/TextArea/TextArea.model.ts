import { ChangeEvent } from "react";
export interface TextAreaM {
  width?: string;
  minHeight?: string;
  maxHeight?: string;
  placeholder?: string | null | undefined;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  onSubmit?: () => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
