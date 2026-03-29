import {
  TodoListFavoriteContext,
  type TodoListFavoriteContextValue,
} from "@/features/TodoListFeature/di";
import { TodoListFeature } from "@/features/TodoListFeature/TodoListFeature";
import { getFeatureLocator } from "./useFeatureLocator";

const todosStore = getFeatureLocator("TODOS_STORE");

export function TodoListPage() {
  const deps: TodoListFavoriteContextValue = {
    todosStore,
  };

  return (
    <>
      <TodoListFavoriteContext.Provider value={deps}>
        <TodoListFeature />
      </TodoListFavoriteContext.Provider>
    </>
  );
}
