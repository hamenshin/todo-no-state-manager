import { createTodosStore } from "@/entites/todos/store/store/createTodosStore";
import { Container } from "./container";
import { TodoService } from "@/entites/todos/services/TodoService";
import { TodoApi } from "@/entites/todos/repository/TodoApi";
import { FavoriteTodoStorage } from "@/entites/todos/repository/FavoriteTodoStorage";
import { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { DoneTodoStorage } from "@/entites/todos/repository/DoneTodoStorage";
import { TodoModel } from "@/entites/todos/model/TodoModel";

const todoService = new TodoService(
  new TodoApi(),
  new FavoriteTodoStorage(new LocalStoragePersister()),
  new DoneTodoStorage(new LocalStoragePersister()),
  new TodoModel(),
);

export const container = new Container({
  TODOS_STORE: createTodosStore({ todoService }),
  USER_STORE: {
    users: [{}],
  },
} as const);

type ServiceKey = ReturnType<typeof container.getKeys>[number];

function getLocator<T extends ServiceKey>(
  token: T,
): ReturnType<typeof container.get<T>> {
  return container.get(token);
}

export function createFeatureLocator<AllowedTokens extends ServiceKey>() {
  return function <T extends AllowedTokens>(token: T) {
    return getLocator(token);
  };
}
