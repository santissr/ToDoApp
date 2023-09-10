import { Text } from "../Text/Text";
import { Wrap } from "../Wrap/Wrap";

export const EmptyTodos = () => {
  return (
    <Wrap justifyContent="center" alignItems="center" minHeight="9.6rem">
      <Text
        textAlign="center"
        text="Add your first ToDo!"
        fontSize="2.6rem"
        fontWeight="700"
      />
    </Wrap>
  );
};
