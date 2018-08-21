import React, { Component } from 'react'
import * as tarot from 'tarot.json'
import { SuitT, CardT } from 'types'

type PropsT = {
  chooseCard: () => mixed,
}

type StateT = {
  currentSuit: SuitT,
  direction: string,
}

class SelectCard extends Component<PropsT, StateT> {
  state = {
    currentSuit: tarot[0][0],
    direction: 'upright',
  }

  updateSuit = (suit: SuitT) => {
    this.setState({
      currentSuit: suit,
    })
  }

  updateDirection = (direction: string) => {
    this.setState({
      direction: direction,
    })
  }

  render() {
    return (
      <div>
        <div className="Suits-container">
          {tarot.map(suit => (
            <button className="Suits" onClick={() => this.updateSuit(suit)}>
              {suit.name}
            </button>
          ))}
        </div>
        <div className="Direction-container">
          <button
            className="Direction"
            onClick={() => this.updateDirection('upright')}
          >
            Upright
          </button>
          <button
            className="Direction"
            onClick={() => this.updateDirection('reversed')}
          >
            Reversed
          </button>
        </div>
        <div className="Cards-container">
          {this.state.direction === 'upright'
            ? this.state.currentSuit.cards.map(card => (
                <button
                  className="Cards"
                  onClick={() =>
                    this.props.chooseCard(card, this.state.direction)
                  }
                >
                  {card.name}
                </button>
              ))
            : this.state.currentSuit.cards.map(card => (
                <button
                  className="Cards"
                  onClick={() =>
                    this.props.chooseCard(card, this.state.direction)
                  }
                >
                  {card.name} Reversed
                </button>
              ))}
        </div>
      </div>
    )
  }
}

export default SelectCard
