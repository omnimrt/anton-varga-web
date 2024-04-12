import css from "./ImageCard.module.css";

const ImageCard = ({ project, onImageClick }) => {
  const handleImageClick = (image) => {
    onImageClick(image);
  };

  return (
    <>
      {project.images.map((image) => (
        <div
          key={image.id}
          className={css.imageWrapper}
          onClick={() => handleImageClick(image)}
        >
          <img className={css.image} src={image.path} alt={image.alt} />
        </div>
      ))}
    </>
  );
};

export default ImageCard;
