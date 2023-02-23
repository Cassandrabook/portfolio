import React from "react";
import './nav.scss'

export function Navmenu() {

    return(
        <>
            <section className="navbar">
                <nav className="navbar__container">
                    <ul className="navbar__menu">
                        <a href="#"><li className="navbar__content">Home</li></a>
                        <a href="#"><li className="navbar__content">About</li></a>
                        <a href="#"><li className="navbar__content">Projects</li></a>
                        <a href="#"><li className="navbar__content">Contact</li></a>
                    </ul>
                </nav>
            </section>
        </>
    );
}