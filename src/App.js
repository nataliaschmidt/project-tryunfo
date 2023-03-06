import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };
  // Campos nome, descrição, imagem e raridade devem conter alguma informação
  // Soma do valor dos 3 atributos não pode ser maior do que 210
  // Cada um dos 3 atributos pode ter no máximo 90 pontos e não podem receber valores negaticos

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
    console.log(validateAttr);
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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    console.log('teste onSaveButtonClick');
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
      </>
    );
  }
}

export default App;
