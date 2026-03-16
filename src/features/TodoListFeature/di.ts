import type { Todos } from "@/entites/todos/model/types";
import { createStrictContext } from "@/shared/helper/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";
import type { ChangeEvent } from "react";

export type TodoListFavoriteContextValue = {
  getTodo: () => Todos[];
  getTodoValue: () => string;
  getTodoIsLoading: () => boolean;
  getTodoIsError: () => boolean;
  getTodoById: (id: number) => Todos;
  getTodoActions: () => {
    onClickToogleIsFavorite: ( id: number) => void;
    onClickToogleIsCompleted: ( id: number) => void;
    onChangeWriteValueHandler: (
      e: ChangeEvent<HTMLInputElement, Element>,
    ) => void;
    onClickAddTodoHandler: (title: string) => void;
  };
};

export const TodoListFavoriteContext =
  createStrictContext<TodoListFavoriteContextValue>();
export const useDi = () => useStrictContext(TodoListFavoriteContext);
