import { TodoModel } from "../model/TodoModel";
import type { DoneTodoStorage } from "../repository/DoneTodoStorage";
import type { FavoriteTodoStorage } from "../repository/FavoriteTodoStorage";
import type { TodoRepository } from "../repository/types";

export class TodoService {
  constructor(
    private characterRepo: TodoRepository,
    private favoriteRepo: FavoriteTodoStorage,
    private doneRepo: DoneTodoStorage,
    private modelRepo: TodoModel,
  ) {}

  getTodo = async (userId: string) => {
    
    const [{ data }, favoriteTodos, doneTodos] = await Promise.all([
      this.characterRepo.getTodo({
        options: { params: { userId } },
      }),
      this.favoriteRepo.getFavoriteIds(),
      this.doneRepo.getCompletedIds(),
    ]);
    
    const todos = this.modelRepo.syncTodos(TodoModel.mapDTOtoTodos(data), favoriteTodos, doneTodos);

    return todos;
  };

  toogleFavoriteTodos = (id: number) => {
    this.favoriteRepo.toogleFavoriteTodos(id);

    return this.modelRepo.toogleTodosIsFavorite(id);
  };

  toogleDoneTodos = (id: number) => {
    this.doneRepo.toogleCompletedTodos(id);

    return this.modelRepo.toogleTodosIsCompleted(id);
  };
}
