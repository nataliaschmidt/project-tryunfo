import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

export default class Form extends Component {
  render() {
    const raritys = ['Normal', 'Raro', 'Muito raro'];
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h1>ADICIONE UMA NOVA CARTA</h1>
        <label htmlFor="cardName" className="form-label">
          Nome:
          <input
            data-testid="name-input"
            id="cardName"
            className="form-control"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage" className="form-label">
          Imagem:
          <input
            data-testid="image-input"
            id="cardImage"
            className="form-control"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription" className="form-label">
          Descrição:
          <input
            data-testid="description-input"
            id="cardDescription"
            className="form-control"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1" className="form-label">
          Velocidade Média:
          <input
            data-testid="attr1-input"
            id="cardAttr1"
            className="form-control"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2" className="form-label">
          Peso Médio:
          <input
            data-testid="attr2-input"
            id="cardAttr2"
            className="form-control"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3" className="form-label">
          Força:
          <input
            data-testid="attr3-input"
            id="cardAttr3"
            className="form-control"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare" className="form-label">
          Raridade:
          <select
            data-testid="rare-input"
            id="cardRare"
            className="form-control"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            {
              raritys.map((rarity) => (
                <option key={ rarity }>{rarity}</option>
              ))
            }
          </select>
        </label>
        { hasTrunfo ? <p id="has-trunfo">Você já tem um Super Trunfo em seu baralho!</p>
          : (
            <div className="form-check form-switch">
              <label htmlFor="cardTrunfo" className="form-label">
                Super Trunfo
                <input
                  data-testid="trunfo-input"
                  id="cardTrunfo"
                  className="form-check-input"
                  type="checkbox"
                  name="cardTrunfo"
                  role="switch"
                  disabled={ hasTrunfo }
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            </div>)}
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
