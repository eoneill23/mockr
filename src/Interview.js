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

  resetCards = () => {
    this.setState({index: 0});
  }

  render () {
    return (
      <div>
        <Card index={this.state.index} color='blue' pos='0'/>
        <Card index={this.state.index} color='red' pos='1'/>
        <Card index={this.state.index} color='yellow' pos='2'/>
        <Card index={this.state.index} color='green' pos='3'/>
        <Card index={this.state.index} color='purple' pos='4'/>
        <button style={{position: 'fixed'}} onClick={this.nextCard}>Next</button>
        <button style={{position: 'fixed', top: '2rem'}} onClick={this.resetCards}>Reset</button>
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
      <div className={'card ' + this.whereAmI(this.props.index)} style={{background: this.props.color}}>

      </div>
    );
  }
}

export default Deck;
