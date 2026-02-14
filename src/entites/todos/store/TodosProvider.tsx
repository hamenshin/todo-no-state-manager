import type { ChangeEvent, ReactNode } from "react";
import type { Todos } from "../model/types";
import { createStrictContext } from "@/shared/helper/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";
import type { TodoService } from "../services/TodoService";
import { useTodos } from "./useTodos";
import { usePropsGroup } from "@/shared/lib/hooks/usePropsGroup";

type TodosContextValue = {
  todos: Todos | undefined;
  setTodo: (value: Todos) => void;
  value: string;
  isLoading: boolean;
  isError: boolean;
  onClickToogleIsFavorite: (id: number) => void;
  onClickToogleIsCompleted: (id: number) => void;
  onChangeWriteValueHandler: (e: ChangeEvent<HTMLInputElement, Element>) => void;
  onClickAddTodoHandler: (title: string) => void;
};

const TodosCtx = createStrictContext<TodosContextValue>();
export const useTodosCtx = () => useStrictContext(TodosCtx);

type TodosProviderDeps = {
  todoService: TodoService;
};

export const createTodosProvider = ({ todoService }: TodosProviderDeps) => {
  const TodosProvider = ({ children }: { children: ReactNode }) => {
    const todosValue = useTodos(todoService);

    const value = usePropsGroup(todosValue);

    return <TodosCtx.Provider value={value}>{children}</TodosCtx.Provider>;
  };

  return TodosProvider;
};
