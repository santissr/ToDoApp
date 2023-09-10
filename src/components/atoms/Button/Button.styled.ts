import styled from "styled-components";

interface ButtonI {
  borderRadius?: string;
  backGround?: string;
  padding?: string;
  border?: string;
  width?: string;
  isButton1?: boolean;
  height?: string;
  minWidth?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  maxWidth?: string;
}

export const ButtonTag = styled.button<ButtonI>`
  width: ${({ width }) => (width ? width : "fit-content")};
  ${({ minWidth }) => (minWidth ? `min-width: ${minWidth}` : null)};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : null)};

  ${({ height }) => (height ? `height: ${height}` : null)};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "5rem"};
  background: ${({ backGround }) => (backGround ? backGround : "black")};
  ${({ padding }) => (padding ? `padding: ${padding}` : null)};
  ${({ border }) => (border ? `border: ${border}` : null)};

  ${({ color }) => (color ? `color: ${color}` : null)};
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}` : null)};
  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight}` : null)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Roboto")};
  ${({ isButton1 }) =>
    isButton1
      ? `color: #575757;
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem; /* 150% */`
      : null};
`;
