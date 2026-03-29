import type { TodoStoreDeps } from "@/entites/todos/store/store/createTodosStore";
import { createStrictContext } from "@/shared/helper/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";
import type { StoreApi } from "@/shared/zustand/createStore";

export type TodoListFavoriteContextValue = {
  todosStore: StoreApi<TodoStoreDeps>;
};

export const TodoListFavoriteContext =
  createStrictContext<TodoListFavoriteContextValue>();
export const useDi = () => useStrictContext(TodoListFavoriteContext);
