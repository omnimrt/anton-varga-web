import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './ImageGallery.module.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImageGallery = ({ projects }) => {
  const { id: currentId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Reset selectedImage when the id parameter changes
  useEffect(() => {
    setSelectedImage(null);
  }, [currentId]);

  console.log('currentId:', currentId);
  console.log('selectedImage:', selectedImage);

  const selectedProject = projects.find(
    project => project.id === parseInt(currentId) || currentId === undefined
  );

  const handleImageClick = image => {
    console.log('Selected image :', image);
    setSelectedImage(image); // Set the selected image when clicked
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const selectedIndex = selectedProject?.images.findIndex(
    image => image.id === selectedImage?.id
  );

  return (
    <div className={css.imageGalleryContainer}>
      <ul className={css.imageList}>
        {selectedProject?.images.map(image => (
          <li className={css.imageItem} key={image.id}>
            <img
              src={image.path}
              alt={image.alt}
              className={
                selectedImage?.id === image.id ? css.selectedImage : ''
              }
              onClick={() => handleImageClick(image)} // Select an image when clicked
            />
          </li>
        ))}
      </ul>
      {selectedImage && isOpen && (
        <Lightbox
          open={isOpen}
          index={selectedIndex}
          close={handleClose}
          slides={selectedProject?.images.map(image => ({
            src: image.path,
            alt: image.alt,
          }))}
        />
      )}
      <div className={css.descriptionContainer}>
        <h1 className={css.title}>{selectedProject?.title}</h1>
        <h2 className={css.date}>June 22 - July 20, 2022, Elma, NYC</h2>
        <p className={css.description}>
          The End of History is a joke... Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sunt, ad. Officia a excepturi aut
          dolorum modi illum sint dolores neque, rem quisquam sit illo
          laboriosam cumque repellendus architecto optio accusantium eum
          voluptatibus deserunt quibusdam vel atque amet iste? Sapiente eius
          minima ex quasi. Consequuntur, nulla, maxime officiis, molestiae
          asperiores ullam similique fugiat dicta voluptas aliquam impedit! Eos
          necessitatibus, maiores voluptatem delectus voluptates reiciendis at
          ipsum sed, aut, velit debitis alias laboriosam in? Autem itaque soluta
          ducimus fugit, et corporis? Pariatur quod ratione, culpa quas aliquid
          et reiciendis rem magnam vel voluptas in, animi laudantium id quos a
          ut nemo qui!
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
