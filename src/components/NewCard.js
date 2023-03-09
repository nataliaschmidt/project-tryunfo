import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/NewCard.css';
import { FaTrash } from 'react-icons/fa';

export default class NewCard extends Component {
  render() {
    // console.log(this.props);
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
      <div className="container-allCard">
        <div className="container-card">
          <div className="container-text-img">
            <div className="container-name newCard">
              <h1>{cardName}</h1>
            </div>
            <div className="container-img">
              <img src={ cardImage } alt={ cardName } />
            </div>
          </div>
          <div className="container-description">
            <p>{`${cardDescription}`}</p>
          </div>
          <div className="container-attr">
            <p>{`Velocidade Média ----- ${cardAttr1}`}</p>
            <p>{`Peso Médio ------------- ${cardAttr2}`}</p>
            <p>{`Força --------------------- ${cardAttr3}`}</p>
            <p id="rare-card">{`${cardRare}`}</p>
            { cardTrunfo
            && <p data-testid="trunfo-card" id="super-trunfo1">Super Trunfo</p> }
          </div>
          <button
            className="btn-delete"
            data-testid="delete-button"
            type="submit"
            onClick={ cardRemove }
          >
            <FaTrash className="trash" />
          </button>
        </div>
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
