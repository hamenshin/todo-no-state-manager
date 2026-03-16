import {
  TodoListFavoriteContext,
  type TodoListFavoriteContextValue,
} from "@/features/TodoListFeature/di";
import { TodoListFeature } from "@/features/TodoListFeature/TodoListFeature";
import { getFeatureLocator } from "./useFeatureLocator";
import {
  selectTodoById,
  selectTodoError,
  selectTodoLodaing,
  selectTodos,
  selectTodosActions,
  selectTodoValue,
} from "@/entites/todos/store/store/todosSelectors";

const useTodosStore = getFeatureLocator("TODOS_STORE");

export function TodoListPage() {
  const deps: TodoListFavoriteContextValue = {
    getTodoById: (id : number) => useTodosStore(selectTodoById(id)),
    getTodo: () => useTodosStore(selectTodos),
    getTodoActions: () => useTodosStore(selectTodosActions),
    getTodoIsError: () => useTodosStore(selectTodoError),
    getTodoIsLoading: () => useTodosStore(selectTodoLodaing),
    getTodoValue: () => useTodosStore(selectTodoValue),
  };

  return (
    <>
      <TodoListFavoriteContext.Provider value={deps}>
        <TodoListFeature />
      </TodoListFavoriteContext.Provider>
    </>
  );
}
