import { useEffect, useMemo, type ReactNode } from "react";
import type { Todos } from "../model/types";
import { createTodosStore } from "./store/createTodosStore";
import { TodosStoreCtx } from "./store/useTodosStore";

type TodosStoreDeps = {
  todoService: {
    getTodo: (userId: string) => Promise<Todos>;
    toogleFavoriteTodos: (id: number) => Promise<Todos>;
    toogleDoneTodos: (id: number) => Promise<Todos>;
  };
};
export const createTodosProvider = ({ todoService }: TodosStoreDeps) => {
  const TodosProvider = ({ children }: { children: ReactNode }) => {
    const store = useMemo(() => createTodosStore({ todoService }), []);

    useEffect(() => {
      store.getState().actions.fetchTodos("2");
    }, []);

    return (
      <TodosStoreCtx.Provider value={store}>{children}</TodosStoreCtx.Provider>
    );
  };

  return TodosProvider;
};
