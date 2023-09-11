import { TitleM } from "./Title.modal";
import { TitleTag } from "./Title.styled";

export const Title = ({
  color,
  fontSize,
  fontWeight,
  text,
  fontFamily,
  textAlign,
  media,
  mediaTextAlign,
}: TitleM) => {
  return (
    <TitleTag
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textAlign={textAlign}
      media={media}
      mediaTextAlign={mediaTextAlign}
    >
      {text}
    </TitleTag>
  );
};
