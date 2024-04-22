import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./ImageGallery.module.css";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const ImageGallery = ({ projects }) => {
  const { id: currentId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log("Selected Image:", selectedImage);
  }, [selectedImage]);

  // Reset selectedImage when the id parameter changes
  useEffect(() => {
    setSelectedImage(null);
  }, [currentId]);

  const selectedProject = projects.find(
    (project) => project.id === parseInt(currentId) || currentId === undefined
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {selectedImage ? (
        <ProjectDetails
          selectedProject={selectedProject}
          selectedImage={selectedImage}
        />
      ) : (
        <ul className={css.imageList}>
          {selectedProject?.images.map((image) => (
            <li className={css.imageItem} key={image.id}>
              <img
                src={image.path}
                alt={image.alt}
                onClick={() => handleImageClick(image)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageGallery;
