import React, { Component } from 'react'
import { CardT } from 'types'
import Svg from 'components/svg'

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
      </div>
    )
  }
}

export default TarotCard
