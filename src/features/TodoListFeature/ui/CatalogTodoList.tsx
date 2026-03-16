import { TodoListOptimized } from "@/entites/todos/ui/TodoCardListOptimisated";
import { useDi } from "../di";
import { CatalogTodoCard } from "./CatalogTodoCard";

export const CatalogTodoList = () => {
  const { getTodo } = useDi();
  const todos = getTodo();

  return <TodoListOptimized>{
    todos.map((todo) => (
      <CatalogTodoCard id={todo.id} />
    ))
    }</TodoListOptimized>;
};
