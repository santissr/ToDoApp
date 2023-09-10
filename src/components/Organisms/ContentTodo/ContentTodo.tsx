import { TodoContext } from "../../../context/TodoContext";
import { Button } from "../../atoms/Button/Button";
import { CheckModal } from "../../atoms/CheckModal/CheckModal";
import { DeleteIcon } from "../../atoms/DeleteIcon/DeleteIcon";
import { EditIcon } from "../../atoms/EditIcon/EditIcon";
import { Text } from "../../atoms/Text/Text";
import { TextArea } from "../../atoms/TextArea/TextArea";
import { Wrap } from "../../atoms/Wrap/Wrap";
import { FormTag } from "./ContentTodo.styled";
import { useContext, useState, ChangeEvent, FormEvent } from "react";

export const ContentTodo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState("");

  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Cargando...</div>;
  }
  const { setOpenModal, openModal, completeTodo, deleteTodo, addTodo } =
    todoContext;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenModal((prevState) => ({ ...prevState, isOpen: false }));

    if (newTodoValue.trim() === "") {
      return;
    }

    const submitComplete = true;
    addTodo(newTodoValue);
    setNewTodoValue("");

    return submitComplete;
  };

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal((prevState) => ({ ...prevState, isOpen: false }));
  };

  const onEdit = () => {
    setIsEdit(!isEdit);
    deleteTodo(openModal.content);
  };

  const onComplete = () => {
    completeTodo(openModal.content);
    setOpenModal((prevState) => ({ ...prevState, isOpen: false }));
  };

  const onDelete = () => {
    deleteTodo(openModal.content);
    setOpenModal((prevState) => ({ ...prevState, isOpen: false }));
  };

  return (
    <Wrap
      height="100%"
      padding="2rem"
      flexDirection="column"
      alignItems="center"
      backGround="rgba(0, 0, 0, 0.40);"
      justifyContent="flex-end"
    >
      <Wrap onClick={onCancel} height="100%"></Wrap>
      <Wrap
        gap="3rem"
        flexDirection="column"
        padding="2rem"
        backGround="#FFF"
        borderRadius="0.5rem"
      >
        {isEdit ? (
          <FormTag onSubmit={onSubmit}>
            <TextArea
              onChange={onChange}
              minHeight="9.6rem"
              placeholder={openModal.content}
              fontSize="1.6rem"
              fontWeight="400"
              color="#000"
            />
            <Button
              width="100%"
              maxWidth="40rem"
              text="ToDo"
              fontSize="2rem"
              color="#FFF"
              backGround="#0950ED"
              borderRadius="2rem"
              border="none"
            />
          </FormTag>
        ) : (
          <Text text={openModal.content} />
        )}
        {/* )} */}
        <Wrap flexDirection="row" justifyContent="space-between">
          <Wrap width="fit-content" onClick={onDelete}>
            <DeleteIcon />
          </Wrap>
          <Wrap
            width="fit-content"
            onClick={onEdit}
            padding="0 0.6rem"
            justifyContent="center"
            gap="1.1rem"
            backGround="#F5F7FB"
            borderRadius="0.5rem"
          >
            <EditIcon />
            <Text
              text="Edit task"
              color="#545454"
              fontSize="1.6rem"
              fontWeight="400"
            />
          </Wrap>
          {!openModal.isComplete ? (
            <Wrap
              onClick={onComplete}
              padding="0rem 1rem"
              width="11.7rem"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              gap="1rem"
              backGround="#0950ED"
              borderRadius="0.5rem"
            >
              <Wrap>
                <CheckModal />
              </Wrap>
              <Text text="Complete" color="#FFF" fontWeight="400" />
            </Wrap>
          ) : null}
        </Wrap>
      </Wrap>
    </Wrap>
  );
};
