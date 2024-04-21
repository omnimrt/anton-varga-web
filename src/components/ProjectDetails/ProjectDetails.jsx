import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import css from "./ProjectDetails.module.css";

const ProjectDetails = ({ projects, selectedImage }) => {
  console.log(projects);
  console.log(selectedImage);

  // Find the index of the selected image in the projects array

  return (
    <div>Hello</div>
    // <div className={css.container}>
    //   <div className={css.carouselContainer}>
    //     {/* Render the carousel with project images */}
    //     <CCarousel
    //       controls
    //       indicators
    //       transition="crossfade"
    //       activeIndex={initialIndex >= 0 ? initialIndex : 0} // Set the initial index
    //     >
    //       {projects.images.map((image, index) => (
    //         <CCarouselItem key={index}>
    //           <div className={css.imageWrapper}>
    //             <CImage
    //               className="d-block w-100"
    //               src={image.path}
    //               alt={`slide ${index + 1}`}
    //             />
    //           </div>
    //         </CCarouselItem>
    //       ))}
    //     </CCarousel>
    //   </div>
    //   <h2 className={css.title}>{projects.title}</h2>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore in
    //     aliquam cum sunt ipsam enim blanditiis quis? Reprehenderit molestiae
    //     dolorum qui dignissimos itaque explicabo excepturi facere illo accusamus
    //     sit officia, aspernatur iure natus laborum neque eveniet, quae rem
    //     dolore!
    //   </p>
    // </div>
  );
};

export default ProjectDetails;
