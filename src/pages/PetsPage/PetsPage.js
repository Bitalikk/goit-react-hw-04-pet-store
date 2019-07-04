import React, { Component } from 'react';
import PetsList from '../../components/PetsList/PetsList';
import * as petsAPI from '../../services/pets-api';
import css from './PetsPage.module.css';

export default class PetsPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    petsAPI.fetchPets().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;

    return (
      <div className={css.container}>
        <h2>Available pets</h2>
        <PetsList items={items} />
      </div>
    );
  }
}
