import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import css from "./ProjectDetails.module.css";

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>Description: {project.description}</p>
      <div className={css.carouselContainer}>
        <CCarousel controls indicators transition="crossfade">
          {project.images.map((image, index) => (
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={image.path}
                alt={`slide ${index + 1}`}
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "500px",
                  height: "auto",
                }}
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
    </div>
  );
};

export default ProjectDetails;
