import { useTodosStore } from "./useTodosStore";

export const useTodos = () => {
  return useTodosStore((state) => state.todos);
};

export const useTodosActions = () => {
  return useTodosStore((state) => state.actions);
};

export const useTodoFlag = () => {
  return useTodosStore((state) => state.flags)
}

export const useTodoValue = () => {
  return  useTodosStore((state) => state.value)
}
