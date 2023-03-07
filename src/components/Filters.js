import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewCard from './NewCard';

export default class Filters extends Component {
  state = {
    filteredName: '',
    filteredRarity: 'todas', // iniciando o valor com todas as cartas
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
    const raritys = ['todas', 'normal', 'raro', 'muito raro'];

    let cardsToRender = cards;

    if (filteredName !== '') {
      cardsToRender = cardsToRender
        .filter((card) => card.cardName.includes(filteredName));
    }

    if (filteredRarity !== 'todas') {
      cardsToRender = cardsToRender.filter((card) => card.cardRare === filteredRarity);
    }

    if (filteredTrunfo) {
      cardsToRender = cardsToRender.filter((card) => card.cardTrunfo);
    }

    return (
      <>
        <h3>Filtros</h3>
        <label htmlFor="filteredName">
          Nome da carta:
          <input
            data-testid="name-filter"
            id="filteredName"
            type="text"
            name="filteredName"
            disabled={ filteredTrunfo }
            value={ filteredName }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="filteredRarity">
          Raridade:
          <select
            data-testid="rare-filter"
            id="filteredRarity"
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

        <label htmlFor="filteredTrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-filter"
            id="filteredTrunfo"
            type="checkbox"
            name="filteredTrunfo"
            checked={ filteredTrunfo }
            onChange={ this.handleChange }
          />
        </label>

        {cardsToRender.map((card, index) => (
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
            cardRemove={ () => cardRemove(index) }
          />
        ))}
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
