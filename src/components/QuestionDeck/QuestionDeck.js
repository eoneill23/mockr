import React, {useState} from 'react';
import Card from '../Question/Question';
import './QuestionDeck.css';

export const QuestionDeck = props => {
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

  let data = [{body: 'What is your name?'}, {body: 'What is your quest?'}, {body: 'What is your favourite colour?'}, {body: 'What is the average windspeed velocity of an unladen swallow?'}, {body: 'questuon'}, {body: 'Yet Another Question'}];

  let i = -1;
  const populateCards = data.map(data => {
    i++;
    return (<Card index={index} pos={i} question={data.body}/>);
  });

  return (
    <div>
      {populateCards}
      <button style={{position: 'fixed', top: '4rem'}} onClick={nextCard}>Next</button>
      <button style={{position: 'fixed', top: '6rem'}} onClick={prevCard}>Back</button>
      <button style={{position: 'fixed', top: '8rem'}} onClick={resetCards}>Reset</button>
    </div>
  );
}

export default QuestionDeck;
