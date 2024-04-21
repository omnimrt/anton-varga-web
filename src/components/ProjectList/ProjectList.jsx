import { NavLink } from "react-router-dom";
import { useState } from "react";
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
    </div>
  );
};

export default ProjectList;
