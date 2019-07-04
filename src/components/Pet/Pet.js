import React from 'react';
import PropTypes from 'prop-types';
import css from './Pet.module.css';

const Pet = ({ age, breed, color, description, gender, image, name }) => (
  <div className={css.container}>
    <div className={css.imageDesc}>
      <img src={image} alt={name} className={css.image} />
      <div className={css.things}>
        <p>
          <b>Age:</b> {age}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Color:</b> {color}
        </p>
        <p>
          <b>Breed:</b> {breed}
        </p>
      </div>
    </div>
    <p>{description}</p>
  </div>
);

Pet.propTypes = {
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};

export default Pet;
