import { List } from "@/shared/ui/atoms/List";
import type { Todos } from "../model/types";
import { TodoCard } from "./TodoCard";

type OwnPropertyType = {
  todos: Todos[];
  onClickToogleIsCompleted: (id: number) => void;
  onClickToogleIsFavorite: (id: number) => void;
};

export const TodoCardList = ({
  todos,
  onClickToogleIsCompleted,
  onClickToogleIsFavorite,
}: OwnPropertyType) => {
  return (
    <List
      data={todos}
      renderData={(todo) => (
        <TodoCard
          onClickToogleIsCompleted={onClickToogleIsCompleted}
          onClickToogleIsFavorite={onClickToogleIsFavorite}
          todo={todo}
        />
      )}
    />
  );
};
