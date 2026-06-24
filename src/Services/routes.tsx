import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainPage from "../Pages/MainPage";

const router = createBrowserRouter(
  [
    {
      errorElement: <ErrorPage />,
    },
    {
      path: "/",

      children: [{ index: true, element: <MainPage /> }],
    },
  ],
  {
    // This dynamically prefixes your routes based on the environment!
    basename: (import.meta as any).env.BASE_URL,
  },
);

export default router;
