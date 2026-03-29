import { Button } from "@/shared/ui/ui-kit/button";
import { Input } from "@/shared/ui/ui-kit/input";
import { useDi } from "../di";
import {
  selectTodosActions,
  selectTodoValue,
} from "@/entites/todos/store/store/todosSelectors";

export const TodoInput = () => {
  const { todosStore } = useDi();
  const { onClickAddTodoHandler, onChangeWriteValueHandler } =
    todosStore.use(selectTodosActions);
  const value = todosStore.use(selectTodoValue);

  return (
    <div className="flex item-center mb-2.5 gap-x-1.5">
      <Input
        placeholder="Заведи новую задачу"
        onChange={(e) => onChangeWriteValueHandler(e)}
        value={value}
      />
      <Button
        variant="default"
        className="bg-gray-400"
        onClick={() => onClickAddTodoHandler(value)}
      >
        Button
      </Button>
    </div>
  );
};
