import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={css.link}>
          <h1 className={css.logo}>Anton Varga</h1>
        </NavLink>
        <NavLink to="/about" className={css.link}>
          about
        </NavLink>
        <NavLink to="/cv" className={`${css.link} ${css.cvLink}`}>
          cv
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
