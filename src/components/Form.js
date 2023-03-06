import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const raritys = ['normal', 'raro', 'muito raro'];

    return (
      <form>
        <h1>ADICIONE UMA NOVA CARTA</h1>
        <label htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            id="cardName"
            type="text"
            name="cardName"
            required
            // value={}
            // onChange={}
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <input
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            required
            // value={}
            // onChange={}
          />
        </label>

        <label htmlFor="cardAttr1">
          Velocidade Média
          <input
            data-testid="attr1-input"
            id="cardAttr1"
            type="number"
            name="cardAttr1"
            required
            // value={}
            // onChange={}
          />
        </label>

        <label htmlFor="cardAttr2">
          Peso Média
          <input
            data-testid="attr2-input"
            id="cardAttr2"
            type="number"
            name="cardAttr2"
            required
            // value={}
            // onChange={}
          />
        </label>

        <label htmlFor="cardAttr3">
          Força
          <input
            data-testid="attr3-input"
            id="cardAttr3"
            type="number"
            name="cardAttr3"
            required
            // value={}
            // onChange={}
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            data-testid="image-input"
            id="cardImage"
            type="text"
            name="cardImage"
            required
            // value={}
            // onChange={}
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            data-testid="rare-input"
            id="cardRare"
            name="cardRare"
            required
            // value={}
            // onChange={}
          >
            {
              raritys.map((rarity) => (
                <option key={ rarity }>{rarity}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            id="cardTrunfo"
            type="checkbox"
            name="cardTrunfo"
            // value={}
            // onChange={}
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          // disabled={}
          // onChange={}
        >
          Salvar

        </button>
      </form>
    );
  }
}
