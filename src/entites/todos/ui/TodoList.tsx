import { ItemContent, ItemDescription, ItemTitle } from "@/shared/ui/ui-kit/item";
import clsx from "clsx";
import type { Todos } from "../model/types";
import { List } from "@/shared/ui/atoms/List";
import { Button } from "@/shared/ui/ui-kit/button";

type TodoCardPropertyType = {
  isError: boolean;
  todos: Todos | undefined;
  onClickToogleIsCompleted: (id: number) => void;
  onClickToogleIsFavorite: (id: number) => void;
};

export const TodoList = ({
  isError,
  todos,
  onClickToogleIsFavorite,
  onClickToogleIsCompleted,
}: TodoCardPropertyType) => {
  return (
    <>
      {!isError && todos ? (
        <List
          data={todos}
          renderData={(todo) => (
            <ItemContent className="flex  border rounded-3xl items-center p-2 mb-4 ">
              <ItemTitle>{todo.id}</ItemTitle>
              <ItemDescription className={clsx(todo.completed && "line-through")}>
                {todo.title}
              </ItemDescription>
              <Button
                variant={todo.completed ? "destructive" : "outline"}
                onClick={() => onClickToogleIsCompleted(todo.id)}
              >
                Пометить сделанным
              </Button>

              <Button
                variant={todo.isFavorite ? "destructive" : "outline"}
                onClick={() => onClickToogleIsFavorite(todo.id)}
              >
                Добавить в избранное
              </Button>
            </ItemContent>
          )}
        />
      ) : (
        <div>....</div>
      )}
    </>
  );
};
