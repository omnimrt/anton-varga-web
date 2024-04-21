import { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const GalleryContainer = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowProjectDetails(true);
  };

  return (
    <div>
      {showProjectDetails ? (
        <ProjectDetails projects={projects} selectedImage={selectedImage} />
      ) : (
        <ImageGallery projects={projects} onImageClick={handleImageClick} />
      )}
    </div>
  );
};

export default GalleryContainer;
