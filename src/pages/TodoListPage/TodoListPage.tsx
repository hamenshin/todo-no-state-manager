import {
  useTodoFlag,
  useTodos,
  useTodosActions,
  useTodoValue,
} from "@/entites/todos/store/store/todosSelectors";
import {
  TodoListFavoriteContext,
  type TodoListFavoriteContextValue,
} from "@/features/TodoListFeature/di";
import { TodoListFeature } from "@/features/TodoListFeature/TodoListFeature";

export function TodoListPage() {
  const todos = useTodos();
  const {
    onChangeWriteValueHandler,
    onClickAddTodoHandler,
    onClickToogleIsCompleted,
    onClickToogleIsFavorite,
  } = useTodosActions();

  const { isError, isLoading } = useTodoFlag();
  const value = useTodoValue();

  const todoListFavoriteContextValue: TodoListFavoriteContextValue = {
    isError,
    isLoading,
    onChangeWriteValueHandler,
    onClickAddTodoHandler,
    onClickToogleIsCompleted,
    onClickToogleIsFavorite,
    todos,
    value,
  };

  return (
    <>
      <TodoListFavoriteContext.Provider value={todoListFavoriteContextValue}>
        <TodoListFeature />
      </TodoListFavoriteContext.Provider>
    </>
  );
}
