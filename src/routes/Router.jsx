import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
