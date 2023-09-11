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
  display?: string;
  justifyContent?: string;
  cursor?: string;
}

export const ButtonTag = styled.button<ButtonI>`
  width: ${({ width }) => (width ? width : "fit-content")};
  ${({ minWidth }) => (minWidth ? `min-width: ${minWidth}` : null)};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : null)};

  ${({ height }) => (height ? `height: ${height}` : null)};

  ${({ display }) => (display ? `display: ${display}` : null)};
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : null};

  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : null)};
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

  &:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 255, 0.5);
    border-color: #99c2ff;
  }
`;
