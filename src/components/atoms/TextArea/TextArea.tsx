import { TextAreaM } from "./TextArea.model";
import { TextAreaTag } from "./TextArea.styled";

export const TextArea = ({
  width,
  minHeight,
  maxHeight,
  placeholder,
  fontSize,
  fontWeight,
  color,
  onSubmit,
  onChange,
}: TextAreaM) => {
  return (
    <TextAreaTag
      onSubmit={onSubmit}
      onChange={onChange}
      placeholder={placeholder}
      width={width}
      minHeight={minHeight}
      maxHeight={maxHeight}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    ></TextAreaTag>
  );
};
