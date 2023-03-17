import { Carousel } from "react-responsive-carousel";
import { projects } from "../../../models/project";
import { ImGithub } from "react-icons/im";
import "./ProjectsSmall.scss";
import { Link } from "react-router-dom";

export const Projects = () => {
  let ProductCardHtml = projects.projects.map((project) => {
    return (
      <div key={project.id} className="projects__container">
        <h3 className="projects__container__name">{project.name}</h3>
        <Carousel className="projects__container__imgContainer">
          <img
            className="projects__container__imgContainer__img"
            src={project.imgWebb}
            alt={project.name}
          />
          <img
            className="projects__container__imgContainer__img"
            src={project.imgMob}
            alt={project.name}
          />
        </Carousel>
        <p className="projects__container__desc">{project.description}</p>
        <button className="projects__container__btn">
          <Link to={project.repo} className="projects__container__btn__link">
            Github repo <ImGithub />
          </Link>
        </button>
      </div>
    );
  });

  return (
    <>
      <section>
        <div className="projects">{ProductCardHtml}</div>
      </section>
    </>
  );
};
