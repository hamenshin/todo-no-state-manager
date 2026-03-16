import type { TodosDTO } from "@/shared/dto/todoDto";
import type { Todos } from "./types";

export class TodoModel {

  syncTodos = (todos: Todos[], favoriteIds: number[], doneIds: number[]): Todos[] => {
    if (!todos) return [];

    const favoriteTodos = todos.map((todo) =>
      favoriteIds.includes(todo.id) ? { ...todo, isFavorite: true } : todo,
    );
    const doneTodos = favoriteTodos.map((todo) =>
      doneIds.includes(todo.id) ? { ...todo, completed: true } : todo,
    );

    return doneTodos;
  };

  toogleTodosIsCompleted = (todos : Todos[], id: number): Todos[] => {
    const idx = this.getTodoIndexById(todos, id);
    const target = todos[idx];

    todos[idx] = { ...target,  completed: !target.completed };

    return todos;
  };

  toogleTodosIsFavorite = (todos : Todos[], id: number): Todos[] => {
    const idx = this.getTodoIndexById(todos, id);
    const target = todos[idx];

    todos[idx] = { ...target, isFavorite: !target.isFavorite };

    return todos;
  };

  private getTodoIndexById(todos: Todos[], id: Todos["id"]) {
    return todos.findIndex((c) => c.id === id);
  }


  public static mapDTOtoTodos = (todosDTO: TodosDTO): Todos[] => {
    return todosDTO.map((todo) => ({
      ...todo,
      isFavorite: false,
      completed: false,
    }));
  };
}
