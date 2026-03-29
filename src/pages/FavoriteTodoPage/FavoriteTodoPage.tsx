import { getFeatureLocator } from "../TodoListPage/useFeatureLocator";
import { TodoCardList } from "@/entites/todos/ui/TodoCardList";
import {
  selectFavoriteTodo,
  selectTodosActions,
} from "@/entites/todos/store/store/todosSelectors";
import { useShallow } from "zustand/shallow";

const todoStore = getFeatureLocator("TODOS_STORE");

export const FavoriteTodoPage = () => {
  const favoroiteTodos = todoStore.use(useShallow(selectFavoriteTodo));
  const { onClickToogleIsCompleted, onClickToogleIsFavorite } =
    todoStore.use(selectTodosActions);
  
  
  
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
