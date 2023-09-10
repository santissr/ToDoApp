import { TodoContext } from "../../../context/TodoContext";
import { AddTodo } from "../../Molecules/AddTodo/AddTodo";
import { ContainerTodosScroll } from "../../Molecules/ContainerTodosScroll/ContainerTodosScroll";
import { CounterAndDelete } from "../../Molecules/CounterAndDelete/CounterAndDelete";
import { ContentTodo } from "../../Organisms/ContentTodo/ContentTodo";
import { TitleAndSearch } from "../../Organisms/TitleAndSearch/TitleAndSearch";
import { TodosLoading } from "../../Organisms/TodosLoading/TodosLoading";
import { EmptyTodos } from "../../atoms/EmptyTodos/EmptyTodos";
import { Modal } from "../../atoms/Modal/Modal";
import { MainTag } from "./Main.styled";
import { useContext } from "react";

export interface completeTodoI {
  (contentTodo: string): void;
}

// localStorage.setItem("TODOS_V1", JSON.stringify(todos));

export const Main = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    // Manejar el caso en el que TodoContext no tenga un valor definido
    return <div>Cargando...</div>;
  }

  const {
    searchValue,
    setSearchValue,
    loading,
    searchedTodos,
    completeTodo,
    completedTodos,
    totalTodos,
    clearTodos,
    openModal,
  } = todoContext;

  return (
    <MainTag>
      <TitleAndSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {loading && <TodosLoading />}
      {/* {error && <TodosError />} */}
      {!loading && searchedTodos.length === 0 && <EmptyTodos />}
      {!loading && searchedTodos.length >= 1 && (
        <ContainerTodosScroll
          isComplete={false}
          dataTodos={searchedTodos}
          onComplete={completeTodo}
        />
      )}
      <CounterAndDelete
        completed={completedTodos}
        total={totalTodos}
        onDelete={clearTodos}
      />
      <ContainerTodosScroll
        isComplete={true}
        dataTodos={searchedTodos}
        onComplete={completeTodo}
      />
      <AddTodo />

      {openModal.isOpen && (
        <Modal>
          <ContentTodo />
        </Modal>
      )}
    </MainTag>
  );
};
