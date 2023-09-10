import { TodoContext, TodosI } from "../../../context/TodoContext";
import { completeTodoI } from "../../Sections/Main/Main";
import { CheckIcon } from "../../atoms/CheckIcon/CheckIcon";
import { Text } from "../../atoms/Text/Text";
import { Wrap } from "../../atoms/Wrap/Wrap";
import { useContext } from "react";

interface TodoI {
  isComplete?: boolean;
  dataTodos: TodosI[];
  onComplete: completeTodoI;
}

export const Todo = ({ isComplete, dataTodos, onComplete }: TodoI) => {
  const todosFilter = dataTodos.filter(
    (todo) => todo.isComplete === isComplete
  );

  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Cargando...</div>;
  }

  const { setOpenModal } = todoContext;

  const onOpenModal = (text: string, isComplete: boolean) => {
    setOpenModal((prevState) => ({ ...prevState, isOpen: true }));
    setOpenModal((prevState) => ({ ...prevState, content: text }));
    setOpenModal((prevState) => ({ ...prevState, isComplete: isComplete }));
  };

  return (
    <>
      {todosFilter.map((todo) => (
        <Wrap
          key={todo.contentTodo}
          hoverBack="#A4C3FD"
          padding="0.5rem 1rem"
          alignItems="center"
          gap="1rem"
          borderRadius="2rem"
          backGround="#FFF"
          border="1px solid #575757"
          maxHeight="4.5rem"
        >
          <Wrap
            width="fit-content"
            onClick={() => onComplete(todo.contentTodo)}
          >
            <CheckIcon isActive={todo.isComplete} />
          </Wrap>
          <Wrap
            width="100%"
            overflow="hidden"
            onClick={() => onOpenModal(todo.contentTodo, todo.isComplete)}
          >
            <Text
              text={todo.contentTodo}
              fontWeight="400"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            />
          </Wrap>
        </Wrap>
      ))}
    </>
  );
};
