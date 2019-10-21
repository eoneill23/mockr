import React from 'react';
import './Interview.css';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  nextCard = () => {
    this.setState({index: this.state.index + 1});
  }

  prevCard = () => {
    let nextIndex = this.state.index - 1;
    if (nextIndex < 0) {
      this.setState({index: 0});
    } else {
      this.setState({index: nextIndex});
    }
  }

  resetCards = () => {
    this.setState({index: 0});
  }

  render () {
    let card1 = {question: 'What is your name?'};
    let card2 = {question: 'What is your quest?'};
    let card3 = {question: 'What is your favourite colour?'};
    let card4 = {question: 'What is the average windspeed velocity of an unladen swallow?'};
    let card5 = {question: ''};
    return (
      <div>
        <Card index={this.state.index} data={card1} pos='0'/>
        <Card index={this.state.index} data={card2} pos='1'/>
        <Card index={this.state.index} data={card3} pos='2'/>
        <Card index={this.state.index} data={card4} pos='3'/>
        <Card index={this.state.index} data={card5} pos='4'/>
        <button style={{position: 'fixed'}} onClick={this.nextCard}>Next</button>
        <button style={{position: 'fixed', top: '2rem'}} onClick={this.prevCard}>Back</button>
        <button style={{position: 'fixed', top: '4rem'}} onClick={this.resetCards}>Reset</button>
      </div>
    );
  }
}

class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  whereAmI(index) {
    let pos = parseInt(this.props.pos);
    if (pos < index) {
      return 'card-finished';
    } else if (pos === index) {
      return 'card-focused';
    } else {
      if (pos === (index + 1)) {
        return 'card-first';
      } else if (pos === (index + 2)) {
        return 'card-second';
      } else if (pos === (index + 3)) {
        return 'card-third';
      } else {
        return 'card-hidden';
      }
    }
  }

  render () {
    return (
      <div className={'card shadow ' + this.whereAmI(this.props.index)}>
        <h1>Q: {this.props.data.question}</h1>
      </div>
    );
  }
}

export default Deck;
