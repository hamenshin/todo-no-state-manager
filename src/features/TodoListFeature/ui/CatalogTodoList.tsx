import { TodoListOptimized } from "@/entites/todos/ui/TodoCardListOptimisated";
import { useDi } from "../di";
import { CatalogTodoCard } from "./CatalogTodoCard";
import { selectTodos } from "@/entites/todos/store/store/todosSelectors";

export const CatalogTodoList = () => {
  const { todosStore } = useDi();
  const todos = todosStore.use(selectTodos);

  return (
    <TodoListOptimized>
      {todos.map((todo) => (
        <CatalogTodoCard id={todo.id} />
      ))}
    </TodoListOptimized>
  );
};
