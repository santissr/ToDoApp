import styled from "styled-components";

interface WrapI {
  padding?: string;
  justifyContent?: string;
  gap?: string;
  borderRadius?: string;
  backGround?: string;
  boxShadow?: string;
  flexDirection?: string;
  overflow?: string;
  height?: string;
  width?: string;
  alignItems?: string;
  border?: string;
  minHeight?: string;
  maxHeight?: string;
  maxWidth?: string;
  display?: string;
  position?: string;
  bottom?: string;
  left?: string;

  cursor?: string;
  effectHover?: string;

  mediaDisplay?: string;
  media?: string;
  mediaFlexDirection?: string;
  mediaJustifyContent?: string;

  media2?: string;
  media2maxWidth?: string;
  hoverBack?: string;
}

export const WrapTag = styled.div<WrapI>`
  ${({ display }) => (display ? `display: ${display}` : "display: flex")};
  ${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection};` : null}

  ${({ height }) => (height ? `height: ${height};` : null)}
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight};` : null)}
  ${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight};` : null)}

  width: ${({ width }) => (width ? width : "100%")};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : null)}

  ${({ position }) => (position ? `position: ${position}` : null)};
  ${({ bottom }) => (bottom ? `bottom: ${bottom}` : null)};
  ${({ left }) => (left ? `left: ${left}` : null)};

  ${({ padding }) => (padding ? `padding: ${padding};` : null)}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : null}
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  ${({ gap }) => (gap ? `gap: ${gap};` : null)}
  align-self: stretch;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  background: ${({ backGround }) => backGround && backGround};
  ${({ border }) => (border ? `border: ${border}` : null)};

  ${({ overflow }) => (overflow ? "overflow-y: auto" : null)};

  &::-webkit-scrollbar {
    border-radius: 5rem;
    background-color: #c1c1c1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6680e9;
    border-radius: 5rem;
  }

  &:hover {
    background: ${({ hoverBack }) => (hoverBack ? hoverBack : null)};
    ${({ effectHover }) =>
      effectHover === "yes"
        ? `box-shadow: 0 0 1rem rgba(0, 0, 255, 0.5);
    border-color: #99c2ff;`
        : null};
    ${({ cursor }) => (cursor ? `cursor: ${cursor}` : null)};
  }

  ${({ media, mediaDisplay, mediaFlexDirection, mediaJustifyContent }) =>
    media
      ? `@media screen and (min-width: ${media}) {
    display: ${mediaDisplay};
    flex-direction:${mediaFlexDirection};
    justify-content: ${mediaJustifyContent}


  }`
      : null}

  ${({ media2, media2maxWidth }) =>
    media2
      ? `@media screen and (min-width: ${media2}) {

        max-width: ${media2maxWidth};

  }`
      : null}
`;
