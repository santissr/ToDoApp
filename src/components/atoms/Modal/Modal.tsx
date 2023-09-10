import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Wrap } from "../Wrap/Wrap";
import { Text } from "../Text/Text";

export const Modal = ({ children }: { children: ReactNode }) => {
  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    <Text text="Ocurre un error"></Text>;
    return null;
  }

  return createPortal(
    <Wrap height="100%" position="absolute" width="100%" bottom="0">
      {children}
    </Wrap>,
    modalRoot
  );
};
