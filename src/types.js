export type CardT = {
  name: string,
  description: string,
  upright: string,
  reversed: string,
  keywords: Array<string>,
  suit_keywords?: Array<string>,
  card_keywords?: Array<string>,
  astrology: string,
  element: string,
  img_asset: string,
}

export type SuitT = {
  name: string,
  cards: Array<CardT>,
}

export type LogT = {
  card: CardT,
  date: string,
  key: string,
}