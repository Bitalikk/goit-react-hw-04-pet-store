import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PetsList.module.css';

const PetsList = ({ items, match, location }) => (
  <ul className={css.petsList}>
    {items.map(item => (
      <Link
        to={{ pathname: `${match.path}/${item.id}`, state: { from: location } }}
        key={item.id}
        className={css.item}
      >
        <li>
          <img src={item.image} alt={item.name} className={css.image} />
          <p>{item.name}</p>
        </li>
      </Link>
    ))}
  </ul>
);

PetsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(PetsList);
