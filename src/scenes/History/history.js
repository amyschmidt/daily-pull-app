import React, { Component } from 'react'
import { CardT } from 'types'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { firestore } from 'data/firebase'

type StateT = {
  cards: Array<CardT>,
}

class History extends Component<PropsT, StateT> {
  state = {
    cards: [],
  }

  componentDidMount() {
    if (this.props.user) {
      const docRef = firestore.collection('users').doc(this.props.user.email).collection('tarotLog')
      const newState = []

      var that = this;
      docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const item = doc.data().data
            newState.push({
              date: item.date,
              description: item.description,
              direction: item.direction,
              name: item.name,
              reversed: item.reversed,
              upright: item.upright,
              keywords: item.keywords,
              img_asset: item.img_asset,
              astrology: item.astrology,
              element: item.element
            })
        })
        that.setState({ cards: newState })
      })
    }
  }

  render() {
    const { cards } = this.state
    return cards.length > 0 ? (
      <ListGroup>
       {cards.map(card => (
        <ListGroupItem className="History-container">
          <ListGroupItemHeading className="History-heading">{card.date}</ListGroupItemHeading>
          {card.direction === 'upright' ? (
            <ListGroupItemText className="History-name" tag="a" href={`/${card.img_asset}/${card.direction}`}>
              {card.name}
            </ListGroupItemText>
          ) : (
            <ListGroupItemText className="History-name" tag="a" href={`/${card.img_asset}/${card.direction}`}>
              {card.name} Reversed
            </ListGroupItemText>
          )
          }
        </ListGroupItem>
        ))}
        </ListGroup>
    ) :
    (
      <ListGroup>
        <ListGroupItem className="History-container">
        <ListGroupItemHeading className="History-heading">There are no tarot cards logged</ListGroupItemHeading>
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default History
