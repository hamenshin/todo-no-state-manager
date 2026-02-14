import type { TodosDTO } from "@/shared/dto/todoDto";
import type { Todos } from "./types";

export class TodoModel {
  todos: Todos = [];

  syncTodos = (todos: Todos, favoriteIds: number[], doneIds: number[]): Todos => {
    if (!todos) return [];

    const favoriteTodos = todos.map((todo) =>
      favoriteIds.includes(todo.id) ? { ...todo, isFavorite: true } : todo,
    );
    const doneTodos = favoriteTodos.map((todo) =>
      doneIds.includes(todo.id) ? { ...todo, completed: true } : todo,
    );
    this.todos = doneTodos;

    return this.todos;
  };

  toogleTodosIsCompleted = (id: number): Todos => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    return this.todos;
  };

  toogleTodosIsFavorite = (id: number): Todos => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo,
    );
    return this.todos;
  };
  

  public static mapDTOtoTodos = (todosDTO: TodosDTO): Todos => {
    return todosDTO.map((todo) => ({
      ...todo,
      isFavorite: false,
      completed: false,
    }));
  };
}
