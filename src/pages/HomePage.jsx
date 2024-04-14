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
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(false);
  };

  const handleSelectedImage = (image) => {
    console.log("Selected Image:", image); // Log the selected image
    setSelectedImage(image);
    setShowProjectDetails(true);
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
        {showProjectDetails ? (
          <ProjectDetails
            project={selectedProject}
            selectedImage={selectedImage}
          />
        ) : (
          <ImageGallery
            project={selectedProject}
            onImageClick={handleSelectedImage}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
