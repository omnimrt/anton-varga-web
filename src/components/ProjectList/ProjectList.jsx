import { NavLink } from "react-router-dom";
import css from "./ProjectList.module.css";

const ProjectList = ({ projects }) => {
  return (
    <div>
      <ul className={css.projectList}>
        {projects.map((project) => (
          <li className={css.projectItem} key={project.id}>
            <NavLink to={`/projects/${project.id}`} className={css.projectLink}>
              {project.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink className={css.openGroup}>#Open Group/Відкрита група</NavLink>
    </div>
  );
};

export default ProjectList;
