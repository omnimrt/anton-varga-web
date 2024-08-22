import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import css from './ProjectDetails.module.css';

const ProjectDetails = ({ selectedProject, selectedImage }) => {
  console.log('Selected Project:', selectedProject);
  console.log('Selected Image:', selectedImage);

  // Find the index of the selected image in the images array
  const selectedIndex = selectedProject.images.findIndex(
    image => image.id === selectedImage?.id
  );

  return (
    <div className={css.container}>
      <CCarousel
        className={css.carouselContainer}
        controls
        indicators
        transition="crossfade"
        activeIndex={selectedIndex}
      >
        {selectedProject.images.map(image => (
          <CCarouselItem key={image.id}>
            <CImage
              className="d-block w-100"
              src={image.path}
              alt={image.alt}
            />
          </CCarouselItem>
        ))}
      </CCarousel>
      <div className={css.descriptionContainer}>
        <div className={css.projectInfo}>
          <h2 className={css.title}>{selectedProject.title}</h2>
          <p className={css.category}>I60 x 48 inch, canvas, oil, 2020</p>
        </div>
        <p className={css.text}>
          One of the main differences in the landscapes is at the end of the
          world the bodies are just laying on the ground under the radioactive
          light while at the End of History, somebody eventually will bury them
          to hide the evidence or to keep going with everyday life. Since the
          new phase of Russian aggression in Ukraine started, it was hard to
          work again on the same dystopian landscapes, mainly because current
          events produce their own live-streamed versions of last, final,
          apocalyptic visuals. The streets of Bucha, Irpin, Mariupol, and cities
          with the victims of the massacres laying about and bodies being buried
          in mass graves forced me to reassess the idea of the final landscape
          again. Being wrecked and also confused about this practice and next
          steps, I stopped working on this series, rethinking the joke in new
          historical realms and its “never again” status.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
