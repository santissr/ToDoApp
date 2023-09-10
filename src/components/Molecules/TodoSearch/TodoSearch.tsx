import { Input } from "../../atoms/Input/Input";
import { Wrap } from "../../atoms/Wrap/Wrap";
import { ChangeEvent } from "react";

interface TodoSearchI {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TodoSearch = ({ value, onChange }: TodoSearchI) => {
  return (
    <Wrap
      padding="1rem 2rem"
      justifyContent="center"
      alignItems="center"
      backGround="#0F5FF9"
      borderRadius="2rem"
      gap="1rem"
    >
      <Input
        placeholder="Find your ToDos Here..."
        backGround="#0F5FF9"
        colorPlaceholder="white"
        value={value}
        onChange={onChange}
        color="white"
      />
    </Wrap>
  );
};
