import { Button } from "@/shared/ui/ui-kit/button";
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/shared/ui/ui-kit/item";
import clsx from "clsx";
import type { Todos } from "../model/types";

type OwnPropertyType = {
  todo: Todos;
  onClickToogleIsCompleted: ( id: number) => void;
  onClickToogleIsFavorite: ( id: number) => void;
};

export const TodoCard = ({
  todo,
  onClickToogleIsCompleted,
  onClickToogleIsFavorite,
}: OwnPropertyType) => {
  return (
    <ItemContent className="flex border rounded-3xl items-center p-2 mb-4">
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
  );
};
