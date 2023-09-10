import { InputM } from "./Input.model";
import { InputTag } from "./Input.style";

export const Input = ({
  width,
  height,
  placeholder,
  backGround,
  border,
  textAlign,
  padding,
  borderRadius,
  colorPlaceholder,
  onChange,
  value,
  color,
}: InputM) => {
  return (
    <InputTag
      value={value}
      placeholder={placeholder}
      width={width}
      height={height}
      backGround={backGround}
      border={border}
      textAlign={textAlign}
      padding={padding}
      borderRadius={borderRadius}
      colorPlaceholder={colorPlaceholder}
      onChange={onChange}
      color={color}
    />
  );
};
