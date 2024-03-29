import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Projects.scss";
import "./sliderArrow.scss";
import { projects } from "../../../../models/project";
import { useNavigate } from "react-router-dom";

export const ProjectItem = () => {
  const navigate = useNavigate();
  const toProjects = () => {
    navigate(`/projects`);
  };

  let ProjectHtml = projects.projects.map((project, i) => {
    return (
      <div className="project" key={project.id}>
        <h3 className="project__name">{project.name}</h3>
        <div className="project__imgContainer">
          <img
            className="project__imgContainer__img"
            src={project.imgWebb}
            alt={project.name}
          />
          <img
            className="project__imgContainer__img"
            src={project.imgMob}
            alt={project.name}
          />
        </div>
        <button onClick={toProjects} className="project__btn">
          Read more
        </button>
      </div>
    );
  });

  return (
    <>
      <section className="myProjects-container">
        <h2 className="project-title">My projects</h2>
        <Carousel>{ProjectHtml}</Carousel>
      </section>
    </>
  );
};
