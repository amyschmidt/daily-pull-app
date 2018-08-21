import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import { CardT, LogT } from 'types'
import Svg from 'components/svg'
import cx from 'classnames'

type PropsT = {
  card: CardT,
  direction: string,
  showSeparator: boolean,
}

class TarotCard extends Component<PropsT> {
  render() {
    return (
      <div>
        <Svg className="Card-image" filename={this.props.card.img_asset} />
        {this.props.direction === 'upright' ? (
          <div>
          <h3 className="Card-name">{this.props.card.name}</h3>
          <p className="Card-description">{this.props.card.upright}</p>
          </div>
        ) : (
          <div>
          <h3 className="Card-name">{this.props.card.name} Reversed</h3>
          <p className="Card-description">{this.props.card.reversed}</p>
          </div>

        )}
        
           {/*{this.props.direction === 'upright' ? (
            <div>
              <div className="Card-upright">{this.props.card.upright}</div>
              <div className="Card-title">Keywords</div>
              {this.props.card.keywords.upright.map(keyword => (
                <div className="Card-keyword">{keyword}</div>
              ))}
            </div>
          ) : (
            <div>
              <div className="Card-reversed">{this.props.card.reversed}</div>
              <div className="Card-title">Keywords</div>
              {this.props.card.keywords.reversed.map(keyword => (
                <div className="Card-keyword">{keyword}</div>
              ))}
            </div>
          )}
         {this.props.card.suit_keywords && (
            <div>
              <div className="Card-title">Suit</div>
              {this.props.card.suit_keywords.map(suit => (
                <div className="Card-keyword">{suit}</div>
              ))}
            </div>
          )}
          {this.props.card.card_keywords && (
            <div>
              <div className="Card-title">Card</div>
              {this.props.card.card_keywords.map(card => (
                <div className="Card-keyword">{card}</div>
              ))}
            </div>
          )}

          <div className="Card-title">Element</div>
          <div className="Card-keyword">{this.props.card.element}</div>
          <div className="Card-title">Astrology</div>
          <div className="Card-keyword">{this.props.card.astrology}</div> 
        </div> */}
      </div>
    )
  }
}

export default TarotCard
