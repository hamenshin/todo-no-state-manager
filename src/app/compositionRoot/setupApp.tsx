import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layout/BaseLayout";
import { todosRoutes } from "./todos.routes";

export const setupApp = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [todosRoutes],
    },
  ]);

  return router;
};
