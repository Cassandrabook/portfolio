import { Link } from "react-router-dom";
import "./nav.scss";

export function Navmenu() {
  return (
    <>
      <section className="navbar">
        <nav className="navbar__container">
          <ul className="navbar__menu">
            <li>
              <Link to={"/"} className="navbar__content">
                Home
              </Link>
              <Link to={"/about"} className="navbar__content">
                About
              </Link>
              <Link to={"/projects"} className="navbar__content">
                Projects
              </Link>
              <Link to={"/cv"} className="navbar__content">
                CV
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
