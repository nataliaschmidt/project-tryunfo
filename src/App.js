import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  validateTextForm = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const textName = cardName.length > 0;
    const textDescription = cardDescription.length > 0;
    const textImage = cardImage.length > 0;
    const textRare = cardRare.length > 0;

    return textName && textDescription && textImage && textRare;
  };

  validateSumAndMinMaxAttr = () => {
    const SUM = 240;
    const MAX_LENGTH = 90;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= SUM;
    const maxMinValue1 = cardAttr1 >= 0 && cardAttr1 <= MAX_LENGTH;
    const maxMinValue2 = cardAttr2 >= 0 && cardAttr2 <= MAX_LENGTH;
    const maxMinValue3 = cardAttr3 >= 0 && cardAttr3 <= MAX_LENGTH;
    return sumAttr && maxMinValue1 && maxMinValue2 && maxMinValue3;
  };

  validateForm = () => {
    const validateAttr = this.validateSumAndMinMaxAttr();
    // console.log(validateAttr);
    const validateText = this.validateTextForm();
    if (validateAttr && validateText) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validateForm);
  };

  verifyTrunfo = () => {
    // criado botão para testar a função
    const { cards } = this.state;
    const isTrunfo = cards.some((card) => card.cardTrunfo);
    // console.log(isTrunfo);
    this.setState({
      hasTrunfo: isTrunfo,
      cardTrunfo: false, // voltando a ser falso para que quando adicionar a carta SP a primeira vez ele não fique sempre como true e adicone todas as cartas como SP.
    }, () => {
    //  console.log(hasTrunfo);
    });
  };

  onSaveButtonClick = (event) => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    event.preventDefault();
    const cardToAdd = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((currentState) => ({
      cards: [cardToAdd, ...currentState.cards],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      isSaveButtonDisabled: false,
      cardRare: 'normal',
    }), () => {
      this.verifyTrunfo();
      // console.log(this.state.cards);
    });
  };

  handleRemoveCard = (cardNameDel) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => card.cardName !== cardNameDel),
    }), () => {
      this.verifyTrunfo();
      // console.log(this.state.cards);
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      cards,
      hasTrunfo,
    } = this.state;

    return (
      <>
        <div className="container-top">
          <section className="container-form">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>

          <section className="container-preview">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </div>

        <section className="container-filters-deck">
          <Filters
            cards={ cards }
            cardRemove={ this.handleRemoveCard }
          />
        </section>
      </>
    );
  }
}

export default App;
