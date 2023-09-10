import { TitleM } from "./Title.modal";
import { TitleTag } from "./Title.styled";

export const Title = ({
  color,
  fontSize,
  fontWeight,
  text,
  fontFamily,
}: TitleM) => {
  return (
    <TitleTag
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
    >
      {text}
    </TitleTag>
  );
};
