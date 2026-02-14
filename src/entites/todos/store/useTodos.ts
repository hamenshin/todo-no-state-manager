import { useAsync } from "@/shared/lib/hooks/useAsync";
import { TodoService } from "../services/TodoService";
import { useState } from "react";

import type { Todos } from "../model/types";

export const useTodos = (todoService: TodoService) => {
  const [value, setValue] = useState<string>("");

  const {
    isError,
    isLoading,
    setData: setTodo,
    data: todos,
  } = useAsync(() => todoService.getTodo("1"));

  const setTodoData = (value: Todos) => {
    setTodo(value);
  };

  const onClickToogleIsCompleted = (id: number) => {
    const update = todoService.toogleDoneTodos(id);
    setTodo(update);
  };

  const onClickToogleIsFavorite = (id: number) => {
    const update = todoService.toogleFavoriteTodos(id);
    setTodo(update);
  };

  const onChangeWriteValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickAddTodoHandler = (title: string) => {
    if (!todos) return;
    const update = [
      ...todos,
      {
        completed: false,
        id: Math.random(),
        isFavorite: false,
        title: title,
        userId: 1,
      },
    ];
    setTodo(update);
    setValue("");
  };

  return {
    todos,
    setTodo,
    value,
    setTodoData,
    isLoading,
    isError,
    onClickToogleIsFavorite,
    onClickToogleIsCompleted,
    onChangeWriteValueHandler,
    onClickAddTodoHandler,
  };
};
