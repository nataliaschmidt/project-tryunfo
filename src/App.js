import React from 'react';
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';
// import NewCard from './components/NewCard';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  validadeTextForm = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const textName = cardName.length > 0;
    const textDescription = cardDescription.length > 0;
    const textImage = cardImage.length > 0;
    const textRare = cardRare.length > 0;

    return textName && textDescription && textImage && textRare;
  };

  validateSumAndMinMaxAttr = () => {
    const SUM = 210;
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
    const validateText = this.validadeTextForm();
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
    const isTrunfo = cards.some((card) => card.cardTrunfo); // verificação funcionando, retorna true ou false
    // console.log(isTrunfo);
    this.setState({
      hasTrunfo: isTrunfo,
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
      cardRare: 'normal',
    }), () => {
      this.verifyTrunfo();
      // console.log(this.state.cards);
    });
  };

  removeCard = (cardIndex) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((_card, index) => index !== cardIndex),
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
        <section>
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

        <section>
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
        <section>
          <h2>TODAS AS CARTAS</h2>
          <Filters
            cards={ cards }
            cardRemove={ this.removeCard }
          />
        </section>
        {/* <section>
          {
            cards.map((card, index) => (
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
                cardRemove={ () => this.removeCard(index) }
              />
            ))
          }
        </section> */}
      </>
    );
  }
}

export default App;
