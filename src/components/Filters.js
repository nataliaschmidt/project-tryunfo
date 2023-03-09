import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewCard from './NewCard';
import '../styles/Filters.css';

export default class Filters extends Component {
  state = {
    filteredName: '',
    filteredRarity: 'Todas',
    filteredTrunfo: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cards, cardRemove } = this.props;
    const { filteredName, filteredRarity, filteredTrunfo } = this.state;
    const raritys = ['Todas', 'Normal', 'Raro', 'Muito raro'];

    let cardsToRender = cards;

    if (filteredName !== '') {
      cardsToRender = cardsToRender
        .filter((card) => card.cardName.toLowerCase()
          .includes(filteredName.toLowerCase()));
    }

    if (filteredRarity !== 'Todas') {
      cardsToRender = cardsToRender.filter((card) => card.cardRare === filteredRarity);
    }

    if (filteredRarity === 'Todas') {
      cardsToRender = cards;
    }

    if (filteredTrunfo) {
      cardsToRender = cardsToRender.filter((card) => card.cardTrunfo);
    }

    return (
      <>
        <h2 className="filters">Filtros</h2>
        <div className="container-filters">
          <div className="container-input-name">
            <label htmlFor="filteredName" className="form-label">
              Nome:
              <input
                data-testid="name-filter"
                id="filteredName"
                className="form-control"
                type="text"
                name="filteredName"
                disabled={ filteredTrunfo }
                value={ filteredName }
                onChange={ this.handleChange }
              />
            </label>
          </div>

          <div className="container-input-rarity">
            <label htmlFor="filteredRarity" className="form-label">
              Raridade:
              <select
                data-testid="rare-filter"
                id="filteredRarity"
                className="form-select"
                name="filteredRarity"
                disabled={ filteredTrunfo }
                value={ filteredRarity }
                onChange={ this.handleChange }
              >
                {
                  raritys.map((rarity) => (
                    <option key={ rarity }>{rarity}</option>
                  ))
                }
              </select>
            </label>
          </div>

          <div className="container-input-check">
            <label htmlFor="filteredTrunfo" className="form-label">
              Super Trunfo
              <input
                data-testid="trunfo-filter"
                id="filteredTrunfo"
                className="form-check-input"
                type="checkbox"
                name="filteredTrunfo"
                checked={ filteredTrunfo }
                onChange={ this.handleChange }
              />
            </label>
          </div>
        </div>
        <div className="container-cards-deck">
          {cardsToRender.map((card) => (
            <NewCard
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              cardRemove={ () => cardRemove(card.cardName) }
            />
          ))}
        </div>
      </>
    );
  }
}

Filters.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  cardRemove: PropTypes.func.isRequired,
};
