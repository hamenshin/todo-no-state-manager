import { EntityCard } from "@/shared/ui/EntitiesCard";
import { useDi } from "../di";
import { TodoCard } from "@/entites/todos/ui/TodoCard";


export const CatalogTodoCard = ({ id }: { id: number }) => {
  const { getTodoActions, getTodoById } = useDi();
  const { onClickToogleIsFavorite, onClickToogleIsCompleted } =
    getTodoActions();
  return (
    <EntityCard
      id={id}
      useSelectById={getTodoById}
      render={(todo) => (
        <TodoCard
          onClickToogleIsCompleted={onClickToogleIsCompleted}
          onClickToogleIsFavorite={onClickToogleIsFavorite}
          todo={todo}
        />
      )}
    ></EntityCard>
  );
};
