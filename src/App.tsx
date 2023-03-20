import { Outlet } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Navmenu } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <header>
        <Navmenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
