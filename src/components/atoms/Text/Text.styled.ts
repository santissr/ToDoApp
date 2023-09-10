import styled from "styled-components";

interface TextI {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  textAlign?: string;
  width?: string;
  fontFamily?: string;
  overflow?: string;
  textOverflow?: string;
  whiteSpace?: string;
  minHeight?: string;
}

export const TextTag = styled.p<TextI>`
  color: ${({ color }) => color && color};

  width: ${({ width }) => (width ? width : "100%")};
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}` : null)};

  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Roboto")},
    sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  line-height: 2.8rem;
  ${({ overflow }) => (overflow ? `overflow: ${overflow}` : null)};
  ${({ textOverflow }) =>
    textOverflow ? `text-overflow: ${textOverflow}` : null};
  ${({ whiteSpace }) => (whiteSpace ? `white-space: ${whiteSpace};` : null)}
`;
