import React from "react";
import './About.scss';

export const About = () => {

    return(
        <>
            <section className="about" id="about">
                <h1 className="about__title">About me</h1>
                <div className="about__container">
                    <div className="about__image"></div>
                    <div className="about__text-container">
                        <p>Hello and welcome to my portfolio! My name is Cassandra Book and I’m 27 years old. I live in Täby with my partner and our two dogs. I'm currently looking for an exciting company to have my LIA-internship at in fall 2023.</p>
                        <p>I'm a web developer student specializing in e-commerce at Medieinstitutet. The program focuses on both frontend and backend that includes HTML, CSS/SCSS, Javascript, Typescript, Database/SQL, PHP, API, GIT, React and Agile methods.</p>
                        <p>I have an interest in design, tech, data and coding. The goal is to become a skilled web developer. I'm a positive and creative person that like solving problems.</p>
                    </div>
                </div>
            </section>
        </>
    );
}