// import React, { Component } from 'react'
// import { CardT } from 'data/types'
// import Svg from 'components/svg'
// import * as tarot from 'tarot.json'
// import TarotCard from 'components/TarotCard'

// type StateT = {
//   card: CardT,
// }

// class CardDetails extends Component<StateT> {
//   state = {
//     card: tarot[0][0].cards[0],
//   }

//   componentDidMount() {
//     this.setCardFromImageAsset()
//   }

//   setCardFromImageAsset = () => {
//     tarot.map(suit =>
//       suit.cards.map(card => {
//         if (this.props.match.params.card === card.img_asset) {
//           this.setState({ card: card })
//         }
//       }),
//     )
//   }

//   render() {
//     return (
//       <div className="Details-container">
//         <TarotCard
//           card={this.state.card}
//           direction={this.props.match.params.direction}
//           showSeparator={false}
//         />
//       </div>
//     )
//   }
// }

// export default CardDetails
