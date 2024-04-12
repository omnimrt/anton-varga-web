import css from "./ProjectList.module.css";

const ProjectList = ({ projects, onSelectedProject }) => {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              className={css.button}
              onClick={() => onSelectedProject(project)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
