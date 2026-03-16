import { getFeatureLocator } from "../TodoListPage/useFeatureLocator";
import { TodoCardList } from "@/entites/todos/ui/TodoCardList";
import {
  selectFavoriteTodo,
  selectTodosActions,
} from "@/entites/todos/store/store/todosSelectors";
import { useShallow } from "zustand/shallow";

const useStore = getFeatureLocator("TODOS_STORE");

export const FavoriteTodoPage = () => {
  const favoroiteTodos = useStore(useShallow(selectFavoriteTodo));
  const { onClickToogleIsCompleted, onClickToogleIsFavorite } =
    useStore(selectTodosActions);

  return (
    <>
      <TodoCardList
        onClickToogleIsCompleted={onClickToogleIsCompleted}
        onClickToogleIsFavorite={onClickToogleIsFavorite}
        todos={favoroiteTodos}
      />
    </>
  );
};
