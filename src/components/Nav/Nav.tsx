import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./nav.scss";
import { useState } from "react";

export function Navmenu() {
  const [isOpen, setOpen] = useState(Boolean);
  const onClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div onClick={onClick}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="left"
          duration={0.4}
          distance="lg"
          color="#fff"
          easing="ease-in"
          onToggle={(toggled: any) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
          rounded
          label="Show menu"
          hideOutline={false}
        ></Hamburger>
      </div>

      <div className={isOpen ? "navActive" : "navbar"}>
        <ul className="navbar__menu">
          <li className="navbar__list">
            <Link
              onClick={() => {
                setOpen(false);
              }}
              to={"/"}
              className="navbar__list__content"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              to={"/about"}
              className="navbar__list__content"
            >
              About
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              to={"/projects"}
              className="navbar__list__content"
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              to={"/cv"}
              className="navbar__list__content"
            >
              CV
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
