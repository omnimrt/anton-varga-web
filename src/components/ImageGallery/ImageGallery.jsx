import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import css from './ImageGallery.module.css';

const ImageGallery = ({ projects }) => {
  const { id: currentId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const selectedImageRef = useRef(null); // Create a ref for the selected image

  useEffect(() => {
    if (selectedImage && selectedImageRef.current) {
      const imagePosition =
        selectedImageRef.current.getBoundingClientRect().top;
      window.scrollTo({
        top: window.scrollY + imagePosition - 50, // Adjust -50 to whatever fits your design
        behavior: 'smooth',
      });
    }
  }, [selectedImage]);

  // Reset selectedImage when the id parameter changes
  useEffect(() => {
    setSelectedImage(null);
  }, [currentId]);

  const selectedProject = projects.find(
    project => project.id === parseInt(currentId) || currentId === undefined
  );

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  return (
    <div className={css.imageGalleryContainer}>
      {selectedImage ? (
        // Column layout after selecting an image
        <div className={css.columnLayout}>
          <img
            src={selectedImage.path}
            alt={selectedImage.alt}
            className={css.selectedImage}
            ref={selectedImageRef}
          />
          <ul className={css.columnLayout}>
            {selectedProject?.images
              .filter(image => image.id !== selectedImage.id)
              .map(image => (
                <li className={css.imageItemColumn} key={image.id}>
                  <img
                    src={image.path}
                    alt={image.alt}
                    onClick={() => handleImageClick(image)} // Select an image when clicked
                  />
                </li>
              ))}
          </ul>
        </div>
      ) : (
        // Original grid layout before selecting an image
        <ul className={css.imageList}>
          {selectedProject?.images.map(image => (
            <li className={css.imageItem} key={image.id}>
              <img
                src={image.path}
                alt={image.alt}
                onClick={() => handleImageClick(image)} // Select an image when clicked
              />
            </li>
          ))}
        </ul>
      )}

      <div className={css.descriptionContainer}>
        <h1 className={css.title}>{selectedProject?.title}</h1>
        <h2 className={css.date}>June 22 - July 20, 2022, Elma, NYC</h2>
        <p className={css.description}>The End of History is a joke...</p>
      </div>
    </div>
  );
};

export default ImageGallery;
