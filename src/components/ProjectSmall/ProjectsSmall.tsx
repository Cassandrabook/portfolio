import { Carousel } from "react-responsive-carousel";
import { ImGithub } from "react-icons/im";
import "./ProjectsSmall.scss";
import { Link } from "react-router-dom";
import { projects } from "../../models/project";

export const Projects = () => {
  let ProductCardHtml = projects.projects.map((project) => {
    return (
      <div key={project.id} className="myProjects__projects__container">
        <h3 className="myProjects__projects__container__name">
          {project.name}
        </h3>
        <Carousel className="myProjects__projects__container__imgContainer">
          <img
            className="myProjects__projects__container__imgContainer__img"
            src={project.imgWebb}
            alt={project.name}
          />
          <img
            className="myProjects__projects__container__imgContainer__img"
            src={project.imgMob}
            alt={project.name}
          />
        </Carousel>
        <p className="myProjects__projects__container__desc">
          {project.description}
        </p>
        <button className="myProjects__projects__container__btn">
          <Link
            to={project.repo}
            className="myProjects__projects__container__btn__link"
          >
            Github repo <ImGithub />
          </Link>
        </button>
      </div>
    );
  });

  return (
    <>
      <section className="myProjects">
        <h2 className="myProjects__title">My projects</h2>
        <div className="myProjects__projects">{ProductCardHtml}</div>
      </section>
    </>
  );
};
