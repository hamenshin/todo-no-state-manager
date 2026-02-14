import { TodoModel } from "@/entites/todos/model/TodoModel";
import { DoneTodoStorage } from "@/entites/todos/repository/DoneTodoStorage";
import { FavoriteTodoStorage } from "@/entites/todos/repository/FavoriteTodoStorage";
import { TodoApi } from "@/entites/todos/repository/TodoApi";
import { TodoService } from "@/entites/todos/services/TodoService";
import { createTodosProvider } from "@/entites/todos/store/TodosProvider";
import { FavoriteTodoPage } from "@/pages/FavoriteTodoPage/FavoriteTodoPage";
import { TodoListPage } from "@/pages/TodoListPage/TodoListPage";
import { ROUTES } from "@/shared/routes";
import { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";

const TodosProvider = createTodosProvider({
  todoService: new TodoService(
    new TodoApi(),
    new FavoriteTodoStorage(new LocalStoragePersister()),
    new DoneTodoStorage(new LocalStoragePersister()),
    new TodoModel(),
  ),
});

export const todosRoutes: RouteObject = {
  path: ROUTES.HOME,
  element: (
    <TodosProvider>
      <Outlet />
    </TodosProvider>
  ),
  children: [
    { index: true, element: <TodoListPage /> },
    { path: ROUTES.FAVORITES, element: <FavoriteTodoPage /> },
  ],
};
