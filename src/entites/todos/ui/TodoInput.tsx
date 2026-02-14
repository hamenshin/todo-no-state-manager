import { Button } from "@/shared/ui/ui-kit/button";
import { Input } from "@/shared/ui/ui-kit/input";

type todoInputOwnProperty = {
  value: string;
  onChangeWriteValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddTodoHandler: (value: string) => void;
};

export const TodoInput = ({
  value,
  onChangeWriteValueHandler,
  onClickAddTodoHandler,
}: todoInputOwnProperty) => (
  <div className="flex item-center mb-2.5 gap-x-1.5">
    <Input
      placeholder="Заведи новую задачу"
      onChange={(e) => onChangeWriteValueHandler(e)}
      value={value}
    />
    <Button variant="default" className="bg-gray-400" onClick={() => onClickAddTodoHandler(value)}>
      Button
    </Button>
  </div>
);
