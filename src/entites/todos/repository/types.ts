import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { TodosDTO } from "@/shared/dto/todoDto";

export type TodoRepository = {
  getTodo(config?: RequestConfig): ApiResponse<TodosDTO>;
};

export type FavoriteTodoRepository = {
  getFavoriteIds: () => Promise<number[]>;
  toogleFavoriteTodos: (id: number) => void;
};

export type DoneTodoRepository = {
  getCompletedIds: () => Promise<number[]>;
  toogleCompletedTodos: (id: number) => void;
};
