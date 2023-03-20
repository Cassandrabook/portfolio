import { createContext, useState } from "react";
import { IProjects, projects } from "../../../models/project";
import { ProjectItem } from "./ProjectItem/ProjectItem";

export const ShowProjects = () => {
  const [myProjects, setMyProjects] = useState<IProjects>(projects);
  const ProjectContext = createContext(projects);

  return (
    <>
      <ProjectContext.Provider value={myProjects}>
        <ProjectItem></ProjectItem>
      </ProjectContext.Provider>
    </>
  );
};
