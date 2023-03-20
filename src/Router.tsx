import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/Home/About/About";
import { MyCv } from "./components/Cv/Cv";
import { Hero } from "./components/Home/Hero/Hero";
import { Projects } from "./components/ProjectSmall/ProjectsSmall";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
        index: true,
      },
      {
        path: "/cv",
        element: <MyCv />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
