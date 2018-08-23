import React, { Component } from 'react'
import { CardT } from 'types'
import Svg from 'components/svg'
import * as tarot from 'tarot.json'
import { Jumbotron, Container } from 'reactstrap';

type StateT = {
  card: CardT,
}

class CardDetails extends Component<StateT> {
  state = {
    card: tarot[0][0].cards[0],
  }

  componentDidMount() {
    this.setCardFromImageAsset()
  }

  setCardFromImageAsset = () => {
    tarot.map(suit =>
      suit.cards.map(card => {
        if (this.props.match.params.card === card.img_asset) {
          this.setState({ card: card })
        }
      }),
    )
  }

  render() {
    const { card } = this.state
    return (
      <div>
        <Jumbotron fluid className="CardDetails-container">
          <Container fluid>
            <Svg className="CardDetails-image" filename={card.img_asset} />
            {this.props.match.params.direction === 'upright' ? (
              <div>
              <h3 className="Card-name">{card.name}</h3>
              <p className="CardDetails-description">{card.upright}</p>
              <div className="CardDetails-heading">Keywords</div>
              {card.keywords.upright.map(keyword => (
                  <div className="CardDetails-keyword">{keyword}</div>
                ))}
              </div>
              ) : (
                <div>
                <h3 className="CardDetails-name">{card.name} Reversed</h3>
                <p className="CardDetails-description">{card.reversed}</p>
                <div className="CardDetails-heading">Keywords</div>
                {card.keywords.reversed.map(keyword => (
                  <div className="CardDetails-keyword">{keyword}</div>
                ))}
                </div>
            )}
            <div className="CardDetails-heading">Element</div>
            <div className="CardDetails-keyword">{card.element}</div>
            <div className="CardDetails-heading">Astrology</div>
            <div className="CardDetails-keyword">{card.astrology}</div> 
            {card.suit_keywords && (
            <div>
              <div className="CardDetails-heading">{card.suit} Keywords</div>
              {card.suit_keywords.map(suit => (
                <div className="CardDetails-keyword">{suit}</div>
              ))}
            </div>
            )}
            {card.card_keywords && (
              <div>
                <div className="CardDetails-heading">{card.card} Keywords</div>
                {card.card_keywords.map(card => (
                  <div className="CardDetails-keyword">{card}</div>
                ))}
              </div>
            )}
          </Container>
        </Jumbotron>
      {/* <div className="Details-container">
         {this.props.match.params.direction === 'upright' ? (
            <div>
              <div className="Card-upright">{card.upright}</div>
              <div className="Card-title">Keywords</div>
              {card.keywords.upright.map(keyword => (
                <div className="Card-keyword">{keyword}</div>
              ))}
            </div>
          ) : (
            <div>
              <div className="Card-reversed">{card.reversed}</div>
              <div className="Card-title">Keywords</div>
              {card.keywords.reversed.map(keyword => (
                <div className="Card-keyword">{keyword}</div>
              ))}
            </div>
          )}
         {card.suit_keywords && (
            <div>
              <div className="Card-title">Suit</div>
              {card.suit_keywords.map(suit => (
                <div className="Card-keyword">{suit}</div>
              ))}
            </div>
          )}
          {card.card_keywords && (
            <div>
              <div className="Card-title">Card</div>
              {card.card_keywords.map(card => (
                <div className="Card-keyword">{card}</div>
              ))}
            </div>
          )}

          <div className="Card-title">Element</div>
          <div className="Card-keyword">{card.element}</div>
          <div className="Card-title">Astrology</div>
          <div className="Card-keyword">{card.astrology}</div> 
        </div>  */}
      </div>
    )
  }
}

export default CardDetails
