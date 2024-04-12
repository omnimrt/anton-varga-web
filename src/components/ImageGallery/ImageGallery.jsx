import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";

const ImageGallery = ({ project, onImageClick }) => {
  const handleImageClick = (image) => {
    onImageClick(project, image);
  };
  return (
    <div>
      <h2>{project.title}</h2>
      <div className={css.imageGallery}>
        <Loader />
        <ImageCard project={project} onImageClick={handleImageClick} />
      </div>
    </div>
  );
};

export default ImageGallery;
