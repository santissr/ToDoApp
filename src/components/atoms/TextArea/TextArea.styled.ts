import styled from "styled-components";

interface TextAreaTagI {
  width?: string;
  minHeight?: string;
  maxHeight?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

export const TextAreaTag = styled.textarea<TextAreaTagI>`
  width: ${({ width }) => (width ? width : "100%")};
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}` : null)};
  ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight}` : null)};
  overflow: auto;

  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}` : null)};
  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight}` : null)};
  ${({ color }) => (color ? `color: ${color}` : null)};
  font-family: "Roboto";

  &:focus {
    outline-color: #61dafa;
  }
`;
