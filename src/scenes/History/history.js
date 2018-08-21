// import React, { Component } from 'react'
// import { CardT } from 'data/types'
// import Svg from 'components/svg'
// import { tarotCardsRef } from 'config/firebase'
// import { Link } from 'react-router-dom'

// type StateT = {
//   cards: Array<CardT>,
//   dates: Array<string>,
// }

// class History extends Component<PropsT, StateT> {
//   state = {
//     cards: [],
//     dates: [],
//   }

//   componentDidMount() {
//     tarotCardsRef.orderByKey().on('value', snapshot => {
//       console.log('snapshot', snapshot.val())
//       const items = snapshot.val()
//       const newState = []
//       for (const item in items) {
//         newState.push({
//           date: items[item].date,
//           description: items[item].description,
//           direction: items[item].direction,
//           name: items[item].name,
//           reversed: items[item].reversed,
//           upright: items[item].upright,
//           keywords: items[item].keywords,
//           img_asset: items[item].img_asset,
//         })
//       }
//       this.setState({ cards: newState })
//     })
//   }

//   getCard = () => {
//     console.log('cards', this.state.cards)
//   }

//   getCardName = () => {
//     for (const card in this.state.cards) {
//     }
//   }

//   render() {
//     return (
//       <div className="History-container">
//         {this.state.cards.map(card => (
//           <div>
//             <div className="History-date">{card.date}</div>
//             {card.direction === 'upright' ? (
//               <button className="History-name">
//                 <Link
//                   className="History-link"
//                   to={`/history/${card.img_asset}/${card.direction}`}
//                 >
//                   {card.name}
//                 </Link>
//               </button>
//             ) : (
//               <button className="History-name">
//                 <Link
//                   className="History-link"
//                   to={`/history/${card.img_asset}/${card.direction}`}
//                 >
//                   {card.name} Reversed
//                 </Link>
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default History
