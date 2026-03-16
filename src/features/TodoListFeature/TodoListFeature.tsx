import { TodoInput } from "@/features/TodoListFeature/ui/TodoInput";
import { useDi } from "./di";
import { CatalogTodoList } from "./ui/CatalogTodoList";

export function TodoListFeature() {
  const { getTodoIsLoading } = useDi();
  const todoIsLoading = getTodoIsLoading();

  return (
    <>
      <TodoInput />
      {todoIsLoading && <div>Loading</div>}
      <CatalogTodoList />
    </>
  );
}
