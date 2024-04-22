import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import css from "./ProjectDetails.module.css";

const ProjectDetails = ({ selectedProject, selectedImage }) => {
  console.log("Selected Project:", selectedProject);
  console.log("Selected Image:", selectedImage);

  // Find the index of the selected image in the images array
  const selectedIndex = selectedProject.images.findIndex(
    (image) => image.id === selectedImage?.id
  );

  return (
    <div>
      <CCarousel
        className={css.carouselContainer}
        controls
        indicators
        transition="crossfade"
        activeIndex={selectedIndex}
      >
        {selectedProject.images.map((image) => (
          <CCarouselItem key={image.id}>
            <CImage
              className="d-block w-100"
              src={image.path}
              alt={image.alt}
            />
          </CCarouselItem>
        ))}
      </CCarousel>
      <h1 className={css.title}>{selectedProject.title}</h1>
      <p className={css.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        eveniet cupiditate velit quaerat blanditiis dolorum doloremque doloribus
        dignissimos voluptatem fugit.
      </p>
    </div>
  );
};

export default ProjectDetails;
