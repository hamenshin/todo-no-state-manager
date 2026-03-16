import type { TodoStoreDeps } from "./createTodosStore";

export const selectTodos = (s: TodoStoreDeps) => s.todos;

export const selectTodosActions = (s: TodoStoreDeps) => s.actions;

export const selectTodoLodaing = (s: TodoStoreDeps) => s.flags.isLoading;

export const selectTodoError = (s: TodoStoreDeps) => s.flags.isError;

export const selectTodoValue = (s: TodoStoreDeps) => s.value;

export const selectFavoriteTodo = (s: TodoStoreDeps) =>
  s.todos.filter((todo) => todo.isFavorite);

export const selectTodoById = (id: number) => (s: TodoStoreDeps) =>
  s.todos.find((t) => t.id === id)!;
