import styled from "styled-components";

interface TitleTagI {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const TitleTag = styled.h1<TitleTagI>`
  width: fit-content;
  color: ${({ color }) => (color ? color : "#000")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Inter")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  line-height: normal;
`;
