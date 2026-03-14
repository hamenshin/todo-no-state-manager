import { useStore, type StoreApi } from "zustand";
import type { TodoStoreDeps } from "./createTodosStore";
import { createStrictContext } from "@/shared/helper/createStrictContext";
import { useContext } from "react";

export type TodosContextValue = StoreApi<TodoStoreDeps>;
export const TodosStoreCtx = createStrictContext<TodosContextValue>();

export const useTodosStore = <Selected>(
  selector: (value: TodoStoreDeps) => Selected,
) => {
  const store = useContext(TodosStoreCtx);

  if (!store) {
    throw new Error("Нету доступа до todo store");
  }

  return useStore(store, selector);
};
