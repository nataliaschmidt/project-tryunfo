import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewCard extends Component {
  render() {
    console.log(this.props);
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardRemove,
    } = this.props;

    return (
      <div>
        <h1>{cardName}</h1>
        <img src={ cardImage } alt={ cardName } />
        <p>{cardDescription}</p>
        <p>{cardAttr1}</p>
        <p>{cardAttr2}</p>
        <p>{cardAttr3}</p>
        <p>{cardRare}</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        <button
          data-testid="delete-button"
          type="button"
          onClick={ cardRemove }
        >
          Excluir

        </button>
      </div>
    );
  }
}

NewCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRemove: PropTypes.func.isRequired,
};
