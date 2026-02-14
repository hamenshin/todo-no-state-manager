import { useTodosCtx } from "@/entites/todos/store/TodosProvider";
import {
  TodoListFavoriteContext,
  type TodoListFavoriteContextValue,
} from "@/features/TodoListFeature/di";
import { TodoListFeature } from "@/features/TodoListFeature/TodoListFeature";

export function TodoListPage() {
  const {
    isError,
    isLoading,
    onChangeWriteValueHandler,
    onClickAddTodoHandler,
    onClickToogleIsCompleted,
    onClickToogleIsFavorite,
    setTodo,
    todos,
    value,
  } = useTodosCtx();

  const todoListFavoriteContextValue: TodoListFavoriteContextValue = {
    isError,
    isLoading,
    onChangeWriteValueHandler,
    onClickAddTodoHandler,
    onClickToogleIsCompleted,
    onClickToogleIsFavorite,
    setTodo,
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
