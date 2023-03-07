import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewCard from './NewCard';

export default class Filters extends Component {
  state = {
    filteredName: '',
  };

  handleSearchChange = ({ target }) => {
    const { value } = target;
    this.setState({
      filteredName: value,
    });
  };

  render() {
    const { cards, cardRemove } = this.props;
    const { filteredName } = this.state;
    const raritys = ['todas', 'normal', 'raro', 'muito raro'];
    const cardsNameFiltered = cards.filter((card) => {
      const { cardName } = card;
      return filteredName && cardName.includes(filteredName);
    });

    return (
      <>
        <label htmlFor="filteredName">
          Filtrar pelo nome da carta:
          <input
            data-testid="name-filter"
            id="filteredName"
            type="text"
            name="filteredName"
            value={ filteredName }
            onChange={ this.handleSearchChange }
          />
        </label>

        <label htmlFor="filteredRarity">
          Filtrar pela raridade:
          <select
            data-testid="rare-filter"
            id="filteredRarity"
            name="filteredRarity"
            // value={  }
            // onChange={  }
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
            // checked={  }
            // onChange={  }
          />
        </label>

        {filteredName !== ''
          ? cardsNameFiltered.map((cardFiltered, index) => (
            <NewCard
              key={ cardFiltered.cardName }
              cardName={ cardFiltered.cardName }
              cardDescription={ cardFiltered.cardDescription }
              cardAttr1={ cardFiltered.cardAttr1 }
              cardAttr2={ cardFiltered.cardAttr2 }
              cardAttr3={ cardFiltered.cardAttr3 }
              cardImage={ cardFiltered.cardImage }
              cardRare={ cardFiltered.cardRare }
              cardTrunfo={ cardFiltered.cardTrunfo }
              cardRemove={ () => cardRemove(index) }
            />
          ))
          : cards.map((cardFiltered, index) => (
            <NewCard
              key={ cardFiltered.cardName }
              cardName={ cardFiltered.cardName }
              cardDescription={ cardFiltered.cardDescription }
              cardAttr1={ cardFiltered.cardAttr1 }
              cardAttr2={ cardFiltered.cardAttr2 }
              cardAttr3={ cardFiltered.cardAttr3 }
              cardImage={ cardFiltered.cardImage }
              cardRare={ cardFiltered.cardRare }
              cardTrunfo={ cardFiltered.cardTrunfo }
              cardRemove={ () => cardRemove(index) }
            />
          )) }
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
