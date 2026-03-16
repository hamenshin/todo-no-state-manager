import { TodoModel } from "../model/TodoModel";
import type { Todos } from "../model/types";
import type { DoneTodoStorage } from "../repository/DoneTodoStorage";
import type { FavoriteTodoStorage } from "../repository/FavoriteTodoStorage";
import type { TodoRepository } from "../repository/types";

export class TodoService {
  constructor(
    private todoRepo: TodoRepository,
    private favoriteRepo: FavoriteTodoStorage,
    private doneRepo: DoneTodoStorage,
    private modelRepo: TodoModel,
  ) {}

  getTodo = async (userId: string) => {
    const [{ data }, favoriteTodos, doneTodos] = await Promise.all([
      this.todoRepo.getTodo({
        options: { params: { userId } },
      }),
      this.favoriteRepo.getFavoriteIds(),
      this.doneRepo.getCompletedIds(),
    ]);

    const todos = this.modelRepo.syncTodos(
      TodoModel.mapDTOtoTodos(data),
      favoriteTodos,
      doneTodos,
    );

    return todos;
  };

  toogleFavoriteTodos = async (todos: Todos[], id: number) => {
    await this.favoriteRepo.toogleFavoriteTodos(id);

    return this.modelRepo.toogleTodosIsFavorite(todos, id);
  };

  toogleDoneTodos = async (todos: Todos[], id: number) => {
    await this.doneRepo.toogleCompletedTodos(id);

    return this.modelRepo.toogleTodosIsCompleted(todos, id );
  };
}
