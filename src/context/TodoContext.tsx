import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Todo, useLocalStorage } from "../hooks/useLocalStorage";
import { completeTodoI } from "../components/Sections/Main/Main";

export interface TodosI {
  isComplete: boolean;
  contentTodo: string;
}

export interface TodoContextProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  loading: boolean;
  searchedTodos: Todo[];
  completeTodo: (contentTodo: string) => void;
  deleteTodo: (contentTodo: string) => void;
  completedTodos: number;

  totalTodos: number;
  clearTodos: () => void;
  error: boolean;
  openModal: {
    isOpen: boolean;
    content: string;
    isComplete: boolean | null;
  }; // Declaración de openModal
  setOpenModal: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      content: string;
      isComplete: boolean;
    }>
  >; // Declaración de setOpenModal

  addTodo: (text: string) => void;
}

// Define el tipo del contexto manualmente
export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const {
    item: dataTodos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState<{
    isOpen: boolean;
    content: string;
    isComplete: boolean;
  }>({ isOpen: false, content: "", isComplete: false });

  const completedTodos: number = dataTodos.filter(
    (todo: Todo) => todo.isComplete === true
  ).length;
  const totalTodos: number = dataTodos.length;

  const searchedTodos = dataTodos.filter((todo: Todo) => {
    const todoText = todo.contentTodo.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text: string) => {
    const isDuplicate = dataTodos.some(
      (todo: Todo) => todo.contentTodo.toLowerCase() === text.toLowerCase()
    );

    if (isDuplicate) {
      // Si es un duplicado, puedes mostrar un mensaje de error o simplemente no hacer nada
      return;
    }

    // Si no es un duplicado, puedes agregar la nueva tarea
    const newDataTodos = [...dataTodos];
    newDataTodos.push({
      contentTodo: text,
      isComplete: false,
    });

    saveTodos(newDataTodos);
  };

  const completeTodo: completeTodoI = (contentTodo) => {
    const newDataTodos = [...dataTodos];
    const todoIndex = newDataTodos.findIndex(
      (todo) => todo.contentTodo === contentTodo
    );
    newDataTodos[todoIndex].isComplete = !newDataTodos[todoIndex].isComplete;
    saveTodos(newDataTodos);
  };

  const deleteTodo: (contentTodo: string) => void = (contentTodo: string) => {
    const newDataTodos = [...dataTodos];
    const todoIndex = newDataTodos.findIndex(
      (todo) => todo.contentTodo === contentTodo
    );
    newDataTodos.splice(todoIndex, 1);
    saveTodos(newDataTodos);
  };

  const clearTodos: () => void = () => {
    const updateTodos = dataTodos.filter(
      (todo: Todo) => todo.isComplete === false
    );
    saveTodos(updateTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        searchValue,
        setSearchValue,
        loading,
        searchedTodos,
        completeTodo,
        completedTodos,
        totalTodos,
        clearTodos,
        error,
        openModal,
        setOpenModal,
        deleteTodo,

        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
