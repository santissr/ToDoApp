import { TextTag } from "./Text.styled";
import { TextM } from "./Text.model";

export const Text = ({
  fontSize,
  color,
  fontWeight,
  text,
  textAlign,
  width,
  fontFamily,
  overflow,
  textOverflow,
  whiteSpace,
  minHeight,
}: TextM) => {
  return (
    <TextTag
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      textAlign={textAlign}
      width={width}
      fontFamily={fontFamily}
      overflow={overflow}
      textOverflow={textOverflow}
      whiteSpace={whiteSpace}
      minHeight={minHeight}
    >
      {text}
    </TextTag>
  );
};
