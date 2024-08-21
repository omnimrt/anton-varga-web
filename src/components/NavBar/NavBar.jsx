import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={css.link}>
          Anton Varga&nbsp; 
        </NavLink>
        <span>/</span>
        <NavLink to="/about" className={css.link}>
          about
        </NavLink>
         <span>/</span>
        <NavLink to="/cv" className={`${css.link} ${css.cvLink}`}>
          cv
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
