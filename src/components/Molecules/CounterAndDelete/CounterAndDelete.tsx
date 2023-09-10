import { Button } from "../../atoms/Button/Button";
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
        onClick={onDelete}
        height="fit-content"
        padding="1rem"
        borderRadius="1rem"
        border="1px solid #575757"
        backGround="white"
        text="X Clear"
        isButton1={true}
        minWidth="7.3rem"
      />
    </Wrap>
  );
};
