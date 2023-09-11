import { Button } from "../../atoms/Button/Button";
import { DeleteIcon } from "../../atoms/DeleteIcon/DeleteIcon";
import { Text } from "../../atoms/Text/Text";
import { Wrap } from "../../atoms/Wrap/Wrap";

interface CounterAndDeleteI {
  completed?: number;
  total?: number;
  onDelete: () => void;
}

export const CounterAndDelete = ({
  completed,
  total,
  onDelete,
}: CounterAndDeleteI) => {
  // const todosFilter = todos.filter((todo) => todo.isComplete === true).length;

  const textTodo = `Completed ${completed} of ${total} task`;

  return (
    <Wrap alignItems="center" gap="0.5rem">
      <Text text={textTodo} color="#000" fontWeight="400" width="100%" />
      <Button
        children={<DeleteIcon />}
        onClick={onDelete}
        cursor="pointer"
        height="fit-content"
        display="flex"
        justifyContent="space-around"
        padding="1rem 0"
        borderRadius="1rem"
        border="1px solid #575757"
        backGround="white"
        text=" Clear"
        isButton1={true}
        minWidth="7.3rem"
      />
    </Wrap>
  );
};
