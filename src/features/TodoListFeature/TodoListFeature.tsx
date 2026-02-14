import { TodoList } from "@/entites/todos/ui/TodoList";
import { TodoInput } from "@/entites/todos/ui/TodoInput";
import { useDi } from "./di";

export function TodoListFeature() {
  const {
    isError,
    isLoading,
    onChangeWriteValueHandler,
    onClickAddTodoHandler,
    onClickToogleIsCompleted,
    onClickToogleIsFavorite,
    todos,
    value,
  } = useDi();

  return (
    <>
      <TodoInput
        value={value}
        onChangeWriteValueHandler={onChangeWriteValueHandler}
        onClickAddTodoHandler={onClickAddTodoHandler}
      />
      {isLoading && <div>Loading</div>}
      <TodoList
        todos={todos}
        isError={isError}
        onClickToogleIsCompleted={onClickToogleIsCompleted}
        onClickToogleIsFavorite={onClickToogleIsFavorite}
      />
    </>
  );
}
