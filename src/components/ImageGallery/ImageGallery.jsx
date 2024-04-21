import { useParams, Link } from "react-router-dom";
import css from "./ImageGallery.module.css";

import { useState } from "react";

const ImageGallery = ({ projects }) => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };
  console.log(activeImage);

  const selectedProject = projects.find(
    (project) => project.id === parseInt(id) || id === undefined
  );

  return (
    <div>
      <ul className={css.imageList}>
        {selectedProject.images.map((image) => (
          <li className={css.imageItem} key={image.id}>
            <Link to={`/projects/${id}/projectview`}>
              <img
                src={image.path}
                alt={image.alt}
                onClick={() => handleImageClick(image)}
              />
            </Link>
          </li>
        ))}
      </ul>
      <h1 className={css.title}>{selectedProject.title}</h1>
      <p className={css.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eos
        quisquam totam quidem libero rem quibusdam sit aliquam laboriosam
        officia.
      </p>
    </div>
  );
};

export default ImageGallery;
