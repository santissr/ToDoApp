import styled from "styled-components";

interface InputI {
  width?: string;
  height?: string;
  color?: string;
  backGround?: string;
  border?: string;
  textAlign?: string;
  padding?: string;
  borderRadius?: string;
  colorPlaceholder?: string;
}

export const InputTag = styled.input<InputI>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "fit-content")};
  ${({ padding }) => (padding ? `padding: ${padding};` : null)}

  background: ${({ backGround }) => (backGround ? backGround : "#FFF")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  border: ${({ border }) => (border ? border : "none")};
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius};` : null}

  /* material-theme/title/medium */
  ${({ color }) => (color ? `color: ${color};` : null)}
  font-family: Roboto;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; /* 150% */

  &::placeholder {
    color: ${({ colorPlaceholder }) =>
      colorPlaceholder ? colorPlaceholder : "#929292"};
  }

  &:focus {
    outline-color: #61dafa;
  }
`;
