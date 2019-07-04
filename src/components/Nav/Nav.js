import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const activeLink = {
  color: 'orange',
};

const Nav = () => (
  <ul className={css.list}>
    <NavLink activeStyle={activeLink} className={css.item} exact to="/">
      Home
    </NavLink>
    <NavLink activeStyle={activeLink} className={css.item} to="/pets">
      Pets
    </NavLink>
    <NavLink activeStyle={activeLink} className={css.item} to="/about">
      About
    </NavLink>
  </ul>
);

export default Nav;
