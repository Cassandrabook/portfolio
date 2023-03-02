import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/About/About";
import { MyCv } from "./components/Cv/Cv";
import { Home } from "./components/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cv",
          element: <MyCv/>,
        },
        {
          path: "/about",
          element: <About/>
        }
      ],
    },
  ]);