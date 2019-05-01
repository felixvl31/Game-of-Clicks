import React from "react";
import Nav from "../Nav/Nav.js";
import Container from "../Container/Container.js";
import Item from "../Item/Item.js";
import Characters from "../../Characters.json";

class Game extends React.Component {
  state = {
    Characters,
    score: 0,
    topScore: 0
  };
  shuffleCharacters = (Characters) => {
    for (var i = 0; i < Characters.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (Characters.length - i));
      var temp = Characters[j];
      Characters[j] = Characters[i];
      Characters[i] = temp;
    }
    return Characters;
  };

  resetCharacters = (Characters) => {
    const resetCharacters = Characters.map(item => ({ ...item, clicked: false }));
    return this.shuffleCharacters(resetCharacters);
  };

  handleRight = (rightCharacters) => {
    const newScore = this.state.score + 1;
    const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
    this.setState({
      Characters: this.shuffleCharacters(rightCharacters),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleWrong = (wrongCharacters) => {
    this.setState({
      Characters: this.resetCharacters(wrongCharacters),
      score: 0
    });
  };

  handleClick = (id) => {
    let guessed = false;
    const nextCharacters = this.state.Characters.map(item => {
      const newItem = { ...item };
      if (newItem.id === id && !newItem.clicked) {
        newItem.clicked = true;
        guessed = true;
      }
      return newItem;
    });
    guessed ? this.handleRight(nextCharacters) : this.handleWrong(nextCharacters);
  };
  

  render() {
    return (
      <>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Container>
          {this.state.Characters.map(item => (
            <Item
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.handleClick}
              image={item.image}
            />
          ))}
        </Container>
      </>
    );
  }
}

export default Game;
