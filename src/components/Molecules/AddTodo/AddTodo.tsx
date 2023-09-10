import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AddIconSvg } from "../../atoms/AddIconSvg/AddIconSvg";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";

import { FormTag } from "./AddTodo.styled";
import { TodoContext } from "../../../context/TodoContext";

interface AddTodo {
  setAddText?: (value: string) => void;
  addText?: string;
}

export const AddTodo = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Cargando...</div>;
  }

  const { addTodo } = todoContext;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodoValue.trim() === "") {
      // No permitir el envío si el campo está vacío
      return;
    }

    addTodo(newTodoValue);
    setNewTodoValue("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <FormTag onSubmit={onSubmit}>
      <Input
        value={newTodoValue}
        onChange={onChange}
        placeholder="New task..."
        border="1px solid #B0B0B0"
        borderRadius="0.5rem"
        textAlign="left"
      />
      <Button
        border="none"
        type="submit"
        width="fit-content"
        backGround="#1B5CED"
        borderRadius="0.5rem"
      >
        <AddIconSvg size="50" />
      </Button>
    </FormTag>
  );
};
