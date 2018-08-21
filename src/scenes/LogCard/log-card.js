import React, { Component } from 'react'
import SelectCard from 'components/SelectCard'
import TarotCard from 'components/TarotCard'
import { CardT, LogT } from 'types'
// import { Actions as LogActions } from 'data/tarotCards'
// import { onStoreTransition } from 'data/utils'
// import { connect } from 'react-redux'
import * as tarot from 'tarot.json'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap';
import cx from 'classnames'

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
    console.log('dateString', dateString)
    return dateString
  }

  handleSubmit = (data: LogT) => {
    data.date = this.todaysDate()
    data.key = this.dateKey()
    data.direction = this.state.direction
    // this.props.logCard(data)
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

      //     {this.props.user && (
      //       <div>
      //         <button
      //           className="App-submit"
      //           onClick={() => this.handleSubmit(this.state.card)}
      //         >
      //           Log today's card
      //         </button>
      //         <button className="App-submit" onClick={() => this.showHistory()}>
      //           <Link className="App-link" to="/history">
      //             View history
      //           </Link>
      //         </button>
      //       </div>
      //     )}
      //     <div className="App-separator" />
      //     <SelectCard chooseCard={this.handleChooseCard} />
      //   </div>
      // </div>
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
      <div className="App-separator" />
      <SelectCard chooseCard={this.handleChooseCard} />
    </div>
    )
  }
}

export default LogCard
