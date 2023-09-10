import { WrapM } from "./Wrap.model";
import { WrapTag } from "./Wrap.styled";

export const Wrap = ({
  padding,
  justifyContent,
  gap,
  borderRadius,
  backGround,
  boxShadow,
  children,
  flexDirection,
  overflow,
  height,
  width,
  alignItems,
  border,
  className,
  minHeight,
  maxHeight,
  display,
  mediaDisplay,
  media,
  maxWidth,
  media2maxWidth,
  media2,
  hoverBack,
  onClick,
  position,
  bottom,
  left,
}: WrapM) => {
  return (
    <WrapTag
      onClick={onClick}
      padding={padding}
      justifyContent={justifyContent}
      gap={gap}
      borderRadius={borderRadius}
      backGround={backGround}
      boxShadow={boxShadow}
      flexDirection={flexDirection}
      overflow={overflow}
      height={height}
      width={width}
      alignItems={alignItems}
      border={border}
      className={className}
      minHeight={minHeight}
      maxHeight={maxHeight}
      display={display}
      mediaDisplay={mediaDisplay}
      media={media}
      maxWidth={maxWidth}
      media2={media2}
      media2maxWidth={media2maxWidth}
      hoverBack={hoverBack}
      position={position}
      bottom={bottom}
      left={left}
    >
      {children}
    </WrapTag>
  );
};
