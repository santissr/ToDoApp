import { ButtonM } from "./Button.model";
import { ButtonTag } from "./Button.styled";

export const Button = ({
  borderRadius,
  backGround,
  text,
  padding,
  border,
  width,
  isButton1,
  height,
  minWidth,
  onClick,
  children,
  type,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  maxWidth,
  justifyContent,
  display,
  cursor,
}: ButtonM) => {
  return (
    <ButtonTag
      type={type}
      onClick={onClick}
      borderRadius={borderRadius}
      backGround={backGround}
      padding={padding}
      border={border}
      width={width}
      isButton1={isButton1}
      height={height}
      minWidth={minWidth}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      maxWidth={maxWidth}
      display={display}
      justifyContent={justifyContent}
      cursor={cursor}
    >
      {children}
      {text}
    </ButtonTag>
  );
};
