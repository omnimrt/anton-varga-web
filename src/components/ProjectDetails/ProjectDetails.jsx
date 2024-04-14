import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import css from "./ProjectDetails.module.css";

const ProjectDetails = ({ project, selectedImage }) => {
  console.log("Project:", project);
  console.log("Selected Image:", selectedImage);

  // Determine the initial index based on the selected image
  const initialIndex = project.images.findIndex(
    (image) => image.id === selectedImage?.id
  );

  return (
    <div className={css.container}>
      <div className={css.carouselContainer}>
        <CCarousel
          controls
          indicators
          transition="crossfade"
          activeIndex={initialIndex >= 0 ? initialIndex : 0} // Set the initial index
        >
          {project.images.map((image, index) => (
            <CCarouselItem key={index}>
              <div className={css.imageWrapper}>
                <CImage
                  className="d-block w-100"
                  src={image.path}
                  alt={`slide ${index + 1}`}
                />
              </div>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      <h2 className={css.title}>{project.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore in
        aliquam cum sunt ipsam enim blanditiis quis? Reprehenderit molestiae
        dolorum qui dignissimos itaque explicabo excepturi facere illo accusamus
        sit officia, aspernatur iure natus laborum neque eveniet, quae rem
        dolore!
      </p>
    </div>
  );
};

export default ProjectDetails;
