import { TodoInput } from "@/features/TodoListFeature/ui/TodoInput";
import { useDi } from "./di";
import { CatalogTodoList } from "./ui/CatalogTodoList";
import { selectTodoLodaing } from "@/entites/todos/store/store/todosSelectors";

export function TodoListFeature() {
  const { todosStore } = useDi();
  const todoIsLoading = todosStore.use(selectTodoLodaing);

  return (
    <>
      <TodoInput />
      {todoIsLoading && <div>Loading</div>}
      <CatalogTodoList />
    </>
  );
}
