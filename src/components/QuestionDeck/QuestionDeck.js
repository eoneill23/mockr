import React, {useState} from 'react';
import Card from '../Question/Question';
import './QuestionDeck.css';

export const QuestionDeck = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex(index + 1);
  }

  const prevCard = () => {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  }

  const resetCards = () => {
    setIndex(0);
  }

  let card1 = {question: 'What is your name?'};
  let card2 = {question: 'What is your quest?'};
  let card3 = {question: 'What is your favourite colour?'};
  let card4 = {question: 'What is the average windspeed velocity of an unladen swallow?'};
  let card5 = {question: ''};

  return (
    <div>
      <Card index={index} data={card1} pos='0'/>
      <Card index={index} data={card2} pos='1'/>
      <Card index={index} data={card3} pos='2'/>
      <Card index={index} data={card4} pos='3'/>
      <Card index={index} data={card5} pos='4'/>
      <button style={{position: 'fixed', top: '4rem'}} onClick={nextCard}>Next</button>
      <button style={{position: 'fixed', top: '6rem'}} onClick={prevCard}>Back</button>
      <button style={{position: 'fixed', top: '8rem'}} onClick={resetCards}>Reset</button>
    </div>
  );
}

export default QuestionDeck;
