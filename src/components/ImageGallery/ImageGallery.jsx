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
    <div className={css.container}>
      {selectedImage ? (
        <ProjectDetails
          selectedProject={selectedProject}
          selectedImage={selectedImage}
        />
      ) : (
        <div>
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
            <div className={css.descriptionContainer}>
              <h1 className={css.title}>{selectedProject?.title}</h1>
              <h2 className={css.date}>June 22 - July 20, 2022, Elma, NYC</h2>
              <p className={css.description}>The End of History is a joke. At least it’s what my friend Lukas affirms to me while sipping his tequila and soda. That’s also what Derrida wanted us to believe in writing his Specters of Marx. After attending Boris Groys’ seminars about it, and imaging it for two years, I still can’t say if it’s all that funny. The truth is that even the lightest version of it leaves us in the end with the outcomes of capitalist-realism that made me depressed enough to slowly slide down into an eschatological mode, upsetting the ultimate Hegelian difference that the End of History( the E.H.) is not the End of the World. For more than two years as a painter, I imagined these apocalyptic landscapes ( as the “last,” the “final” images) made in a manner that endeavors to communicate their dystopia through Socialist Realism, subverting its traditionally victorious, utopian lens. Inspired by Kojev’s approach to philosophy as transmitting the E.H. idea further, I saw this series as an appeal to a short message, as a handy means of communicating the notion: the End of History has arrived—and its arrival is expressed in the painful disappearance of utopian will from our societies. Alexandr Deyneka’s Donbas. Lunch Break (1935) serves as the basis for the works on unstretched canvases, by way of fragments that nod to Deyneka’s imagery. This classic Socialist Realist painting depicts beautiful young proletarian miners at their lunch break bathing in the river, against a background of industrial features of Donbas. Almost a century after Deyneka’s creation of this work, the nature of the light on their shoulders changed, Donbas has become the theater of a Russian-Ukrainian war and humanitarian crisis. </p>
            </div>

        </div>
      )}
    </div>
  );
};

export default ImageGallery;
