import { createBrowserRouter } from "react-router";
import { BaseLayout } from "./BaseLayout";
import { TodoListPage } from "@/pages/TodoListPage/TodoListPage";
import { ROUTES } from "@/shared/routes";
import { FavoriteTodoPage } from "@/pages/FavoriteTodoPage/FavoriteTodoPage";

export const setupRouter = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        { index: true, element: <TodoListPage /> },
        { path: ROUTES.FAVORITES, element: <FavoriteTodoPage /> },
      ],
    },
  ]);

  return router;
};
