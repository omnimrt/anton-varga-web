import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/">
          <h1>Anton Varga</h1>
        </NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/cv">cv</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
