import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../../components/Pet/Pet';
import * as petsAPI from '../../services/pets-api';
import css from './PetPage.module.css';

const getIdFromProps = props => props.match.params.id;

class PetPage extends Component {
  state = {
    pet: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    petsAPI.fetchPetWithId(id).then(pet => this.setState({ pet }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/pets');
  };

  render() {
    const { pet } = this.state;

    return (
      <div className={css.wrapper}>
        <button type="button" className={css.btn} onClick={this.handleGoBack}>
          &#11178; Return
        </button>
        {pet && (
          <>
            <h2>All about {pet.name}</h2>
            {pet && <Pet {...pet} />}
          </>
        )}
      </div>
    );
  }
}

PetPage.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default PetPage;
