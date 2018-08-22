import React, { Component } from 'react'
import SelectCard from 'components/SelectCard'
import TarotCard from 'components/TarotCard'
import { CardT, LogT } from 'types'
import * as tarot from 'tarot.json'
import { Jumbotron, Container } from 'reactstrap';
import cx from 'classnames'
import { firestore } from 'data/firebase'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

type StateT = {
  card?: CardT,
  date: Date,
  cards: Array<Object>,
  direction: string,
}

class LogCard extends Component<StateT> {
  state = {
    card: tarot[0][0].cards[0],
    cards: [],
    date: Date(),
    direction: 'upright',
  }

  todaysDate = () => {
    const today = new Date()
    const dateString = `${
      months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`
    return dateString
  }

  dateKey = () => {
    const today = new Date()
    const date = ('0' + today.getDate()).slice(-2)
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const dateString = `${today.getFullYear()}-${month}-${date}`
    return dateString
  }

  handleSubmit = (data: LogT) => {
    data.date = this.todaysDate()
    data.key = this.dateKey()
    data.direction = this.state.direction
    firestore.collection('users').doc(this.props.user.email).collection('tarotLog').doc(data.key).set({
      data
    })
    .then(function() {
        console.log("Document successfully written!")
    })
    .catch(function(error) {
        console.error("Error writing document: ", error)
    })
  }

  handleChooseCard = (card: CardT, direction: string) => {
    this.setState({
      card: card,
      direction: direction,
    })
  }

  showHistory = () => {}

  render() {
    return (
      <div>
      <Jumbotron fluid className="LogCard-container">
        <Container fluid>
          <h2 className={cx("display-5", "LogCard-title")}>{this.todaysDate()}</h2>
          <TarotCard
            card={this.state.card}
            direction={this.state.direction}
            showSeparator={true}
          />
        </Container>
      </Jumbotron>
      {this.props.user && (
        <div className="LogCard-submit-container">
          <button
            className="LogCard-submit"
            onClick={() => this.handleSubmit(this.state.card)}
          >
            Log today's card
          </button>
        </div>
      )}
      <div className="LogCard-separator" />
      <SelectCard chooseCard={this.handleChooseCard} />
    </div>
    )
  }
}

export default LogCard
