import type { ChangeEvent } from "react";
import type { Todos } from "../../model/types";
import { create } from "zustand";

export type TodoStoreDeps = {
  todos: Todos[];
  value: string;
  flags: {
    isLoading: boolean;
    isError: boolean;
  };
  actions: {
    fetchTodos: (value: string) => Promise<void>;
    onClickToogleIsFavorite: (id: number) => void;
    onClickToogleIsCompleted: (id: number) => void;
    onChangeWriteValueHandler: (
      e: ChangeEvent<HTMLInputElement, Element>,
    ) => void;
    onClickAddTodoHandler: (title: string) => void;
  };
};

type Deps = {
  todoService: {
    getTodo: (userId: string) => Promise<Todos[]>;
    toogleFavoriteTodos: (todos  : Todos[], id: number) => Promise<Todos[]>;
    toogleDoneTodos: (todos : Todos[], id: number) => Promise<Todos[]>;
  };
};

export const createTodosStore = ({ todoService }: Deps) => {
  const useStore = create<TodoStoreDeps>((set, get) => ({
    todos: [],
    flags: {
      isError: false,
      isLoading: false,
    },
    value: "",
    actions: {
      fetchTodos: async (value) => {
        try {
          const todos = await todoService.getTodo(value);
          set((state) => ({
            flags: { ...state.flags, isLoading: true, isError: false },
          }));
          set({ todos });
        } catch {
          set((state) => ({
            flags: { ...state.flags, isError: true },
          }));
        } finally {
          set((state) => ({
            flags: { ...state.flags, isLoading: false },
          }));
        }
      },
      onClickToogleIsCompleted: async (id) => {
        const todos = await todoService.toogleDoneTodos(get().todos, id);
        set({ todos });
      },
      onClickToogleIsFavorite: async (id) => {
        const todos = await todoService.toogleFavoriteTodos(get().todos, id);
        set({ todos });
      },
      onChangeWriteValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        set({ value });
      },
      onClickAddTodoHandler(title) {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              completed: false,
              id: Math.random(),
              isFavorite: false,
              title: title,
              userId: 1,
            },
          ],
          value: "",
        }));
      },
    },
  }));

  useStore.getState().actions.fetchTodos("2");

  return useStore;
};
