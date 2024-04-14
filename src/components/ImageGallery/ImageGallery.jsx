import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";

const ImageGallery = ({ project, onImageClick }) => {
  const handleImageClick = (image) => {
    console.log("Clicked Image:", image); // Log the clicked image
    onImageClick(image); // Pass the clicked image to the parent component
  };

  return (
    <div>
      <div className={css.imageGallery}>
        <Loader />
        <ImageCard project={project} onImageClick={handleImageClick} />
      </div>
      <h2 className={css.title}>{project.title}</h2>
    </div>
  );
};

export default ImageGallery;
