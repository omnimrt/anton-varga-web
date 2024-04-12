import { useState } from "react";
import css from "./HomePage.module.css";

import NavBar from "../components/NavBar/NavBar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import projects from "../projects.json";
import "@coreui/coreui/dist/css/coreui.min.css";
const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  // const [showProjectDetails, setShowProjectDetails] = useState(false);

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className={css.homePage}>
      <div className={css.aside}>
        <NavBar />
        {selectedProject && (
          <ProjectList
            projects={projects}
            onSelectedProject={handleSelectedProject}
          />
        )}
      </div>
      <div className={css.main}>
        <ProjectDetails project={selectedProject} />
        {/* <ImageGallery
          project={selectedProject}
          onImageClick={handleSelectedProject}
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
