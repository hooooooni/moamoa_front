import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import Signup from "./Signup";
import LookForPage from "./pages/LookForPage";
import MyReview from "./pages/MyReview";
import StorePage from "./pages/StorePage";

const router = createBrowserRouter([
  {
    path: "App",
    element: <App />,
    children: [
      {
        path: "MainPage",
        element: <MainPage />,
      },

      {
        path: "LookForPage",
        element: <LookForPage />,
      },

      {
        path: "MyReview",
        element: <MyReview />,
      },
      {
        path: ":Storepage",
        element: <StorePage />,
      },
    ],
  },
  {
    path: "/",
    element: <Signup />,
  },
]);

export default router;
