import styled from "styled-components";

interface TitleTagI {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  media?: string;
  mediaTextAlign?: string;
}

export const TitleTag = styled.h1<TitleTagI>`
  width: 100%;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "start")};
  color: ${({ color }) => (color ? color : "#000")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Inter")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  line-height: normal;

  ${({ media, mediaTextAlign }) =>
    media
      ? `@media screen and (min-width: ${media}) {
    text-align: ${mediaTextAlign};
  }`
      : null};
`;
