import { useState, useEffect } from "react";
export interface Todo {
  contentTodo: string;
  isComplete: boolean;
}

export const useLocalStorage = (
  itemName: string,
  initialValue: [] | Todo[]
): {
  item: Todo[];
  saveItem: (newItem: Todo[]) => void;
  loading: boolean;
  error: boolean;
} => {
  const [item, setItem] = useState<Todo[]>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem: Todo[];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue as Todo[];
        } else {
          parsedItem = JSON.parse(localStorageItem) as Todo[];
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem: Todo[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
};
