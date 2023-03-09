import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    // console.log(this.props);
    return (
      <div className="container-allCard">
        <div className="container-card">
          <div className="container-text-img">
            <div className="container-name">
              <h1 data-testid="name-card">{cardName}</h1>
            </div>
            <div className="container-img">
              {
                cardImage
                && <img data-testid="image-card" src={ cardImage } alt={ cardName } />
              }
            </div>
          </div>
          <div className="container-description">
            <p data-testid="description-card">{`${cardDescription}`}</p>
          </div>
          <div className="container-attr">
            <p data-testid="attr1-card">{`Velocidade Média ----- ${cardAttr1}`}</p>
            <p data-testid="attr2-card">{`Peso Médio ------------- ${cardAttr2}`}</p>

            <p data-testid="attr3-card">{`Força --------------------- ${cardAttr3}`}</p>
            <p data-testid="rare-card" id="rare-card">{`${cardRare}`}</p>
          </div>
        </div>
        {cardTrunfo
        && <span data-testid="trunfo-card" id="super-trunfo">Super Trunfo</span>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
