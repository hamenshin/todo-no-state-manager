import { EntityCard } from "@/shared/ui/EntitiesCard";
import { useDi } from "../di";
import { TodoCard } from "@/entites/todos/ui/TodoCard";
import {
  selectTodoById,
  selectTodosActions,
} from "@/entites/todos/store/store/todosSelectors";

export const CatalogTodoCard = ({ id }: { id: number }) => {
  const { todosStore } = useDi();

  const { onClickToogleIsCompleted, onClickToogleIsFavorite } =
    todosStore.use(selectTodosActions);

  return (
    <EntityCard
      id={id} 
      useSelectById={(id) => todosStore.use(selectTodoById(id))}
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
