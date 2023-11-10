import "./Footer.scss";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";

export const Footer = () => {
  let skills = [
    "HTML",
    "CSS/SCSS",
    "Javascript",
    "Typescript",
    "React",
    "SQL",
    "Git",
    "Github",
    "API",
    "PHP",
    "Databases",
    "Node.js",
    "Express",
    "Socket.io",
    "Wordpress",
    "WooCommerce",
    "Photoshop",
    "Canva",
    "Figma",
    "Adobe XD",
    "Notion",
    "Jira",
    "Azure",
    "Tableau",
  ];

  let html = skills.map((p, i) => {
    return <li key={i}>{skills[i]}</li>;
  });

  return (
    <>
      <section className="footer">
        <div className="footer__contact">
          <h3>Get in touch</h3>
          <p>
            <a href="mailto: cassandraabook@gmail.com">
              cassandraabook@gmail.com
            </a>
          </p>
          <p>
            <a href="tel: +46706108311">+46706 - 10 83 11</a>
          </p>
          <p>Vasastan, 113 62</p>
        </div>
        <div className="footer__skills">
          <h3>Skills</h3>
          <ul>{html}</ul>
        </div>
        <div className="footer__connect">
          <h3>Connect</h3>
          <div className="container">
            <a href="https://github.com/Cassandrabook" className="git">
              <VscGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/cassandra-book-44241344/"
              className="linkedin"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/cassandrabook/"
              className="insta"
            >
              <SlSocialInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
