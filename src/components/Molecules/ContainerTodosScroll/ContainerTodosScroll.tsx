import { TodosI } from "../../../context/TodoContext";
import { Todo } from "../../Organisms/Todo/Todo";
import { completeTodoI } from "../../Sections/Main/Main";
import { Wrap } from "../../atoms/Wrap/Wrap";

interface ContainerTodosScrollI {
  isComplete?: boolean;
  dataTodos: TodosI[];
  onComplete: completeTodoI;
  onOpenModal?: () => void;
}

export const ContainerTodosScroll = ({
  isComplete,
  dataTodos,
  onComplete,
}: ContainerTodosScrollI) => {
  return (
    <Wrap
      height="13.5rem"
      padding="0 0.5rem 0 0"
      flexDirection="column"
      alignItems="flex-start"
      gap="1rem"
      borderRadius="1rem"
      overflow="yes"
    >
      <Todo
        isComplete={isComplete}
        dataTodos={dataTodos}
        onComplete={onComplete}
      />
    </Wrap>
  );
};
