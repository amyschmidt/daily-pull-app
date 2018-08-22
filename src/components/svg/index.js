import React from 'react'
import cx from 'classnames'
import { onlyUpdateForKeys } from 'recompose'
import Loadable from 'react-loadable'

const svgs = {
  wordmark: () =>
    import(/* webpackChunkName: 'wordmark' */
    '!!raw-loader!svgo-loader!assets/wordmark.svg'),
  //major
  'the-fool': () =>
    import(/* webpackChunkName: 'the-fool' */
    '!!raw-loader!svgo-loader!assets/the-fool.svg'),
  'the-magician': () =>
    import(/* webpackChunkName: 'the-magician' */
    '!!raw-loader!svgo-loader!assets/the-magician.svg'),
  'the-high-priestess': () =>
    import(/* webpackChunkName: 'the-high-priestess' */
    '!!raw-loader!svgo-loader!assets/the-high-priestess.svg'),
  'the-empress': () =>
    import(/* webpackChunkName: 'the-empress' */
    '!!raw-loader!svgo-loader!assets/the-empress.svg'),
  'the-emperor': () =>
    import(/* webpackChunkName: 'the-emperor' */
    '!!raw-loader!svgo-loader!assets/the-emperor.svg'),
  'the-hierophant': () =>
    import(/* webpackChunkName: 'the-hierophant' */
    '!!raw-loader!svgo-loader!assets/the-hierophant.svg'),
  'the-lovers': () =>
    import(/* webpackChunkName: 'the-lovers' */
    '!!raw-loader!svgo-loader!assets/the-lovers.svg'),
  'the-chariot': () =>
    import(/* webpackChunkName: 'the-chariot' */
    '!!raw-loader!svgo-loader!assets/the-chariot.svg'),
  strength: () =>
    import(/* webpackChunkName: 'strength' */
    '!!raw-loader!svgo-loader!assets/strength.svg'),
  'the-hermit': () =>
    import(/* webpackChunkName: 'the-hermit' */
    '!!raw-loader!svgo-loader!assets/the-hermit.svg'),
  'wheel-of-fortune': () =>
    import(/* webpackChunkName: 'wheel-of-fortune' */
    '!!raw-loader!svgo-loader!assets/wheel-of-fortune.svg'),
  justice: () =>
    import(/* webpackChunkName: 'justice' */
    '!!raw-loader!svgo-loader!assets/justice.svg'),
  'the-hanged-man': () =>
    import(/* webpackChunkName: 'the-hanged-man' */
    '!!raw-loader!svgo-loader!assets/the-hanged-man.svg'),
  death: () =>
    import(/* webpackChunkName: 'death' */
    '!!raw-loader!svgo-loader!assets/death.svg'),
  temperance: () =>
    import(/* webpackChunkName: 'temperance' */
    '!!raw-loader!svgo-loader!assets/temperance.svg'),
  'the-devil': () =>
    import(/* webpackChunkName: 'the-devil' */
    '!!raw-loader!svgo-loader!assets/the-devil.svg'),
  'the-tower': () =>
    import(/* webpackChunkName: 'the-tower' */
    '!!raw-loader!svgo-loader!assets/the-tower.svg'),
  'the-star': () =>
    import(/* webpackChunkName: 'the-star' */
    '!!raw-loader!svgo-loader!assets/the-star.svg'),
  'the-moon': () =>
    import(/* webpackChunkName: 'the-moon' */
    '!!raw-loader!svgo-loader!assets/the-moon.svg'),
  'the-sun': () =>
    import(/* webpackChunkName: 'the-sun' */
    '!!raw-loader!svgo-loader!assets/the-sun.svg'),
  judgement: () =>
    import(/* webpackChunkName: 'judgement' */
    '!!raw-loader!svgo-loader!assets/judgement.svg'),
  'the-world': () =>
    import(/* webpackChunkName: 'the-world' */
    '!!raw-loader!svgo-loader!assets/the-world.svg'),
  //cups
  'ace-of-cups': () =>
    import(/* webpackChunkName: 'ace-of-cups' */
    '!!raw-loader!svgo-loader!assets/ace-of-cups.svg'),
  'two-of-cups': () =>
    import(/* webpackChunkName: 'two-of-cups' */
    '!!raw-loader!svgo-loader!assets/two-of-cups.svg'),
  //swords
  'ace-of-swords': () =>
    import(/* webpackChunkName: 'ace-of-swords' */
    '!!raw-loader!svgo-loader!assets/ace-of-swords.svg'),
  'two-of-swords': () =>
    import(/* webpackChunkName: 'two-of-swords' */
    '!!raw-loader!svgo-loader!assets/two-of-swords.svg'),
  'seven-of-swords': () =>
    import(/* webpackChunkName: 'seven-of-swords' */
    '!!raw-loader!svgo-loader!assets/seven-of-swords.svg'),
  'nine-of-swords': () =>
    import(/* webpackChunkName: 'nine-of-swords' */
    '!!raw-loader!svgo-loader!assets/nine-of-swords.svg'),
  'ten-of-swords': () =>
    import(/* webpackChunkName: 'ten-of-swords' */
    '!!raw-loader!svgo-loader!assets/ten-of-swords.svg'),
  //wands
  'five-of-wands': () =>
    import(/* webpackChunkName: 'five-of-wands' */
    '!!raw-loader!svgo-loader!assets/five-of-wands.svg'),
  //pentacles
  'two-of-pentacles': () =>
    import(/* webpackChunkName: 'two-of-pentacles' */
    '!!raw-loader!svgo-loader!assets/two-of-pentacles.svg'),
  'ten-of-pentacles': () =>
    import(/* webpackChunkName: 'ten-of-pentacles' */
    '!!raw-loader!svgo-loader!assets/ten-of-pentacles.svg'),
  'page-of-pentacles': () =>
    import(/* webpackChunkName: 'page-of-pentacles' */
    '!!raw-loader!svgo-loader!assets/page-of-pentacles.svg'),
  'queen-of-pentacles': () =>
    import(/* webpackChunkName: 'queen-of-pentacles' */
    '!!raw-loader!svgo-loader!assets/queen-of-pentacles.svg'),
}

const Container = ({ svg, filename, className }) => (
  <div
    className={cx('Svg-Icon', className)}
    dangerouslySetInnerHTML={{ __html: svg || filename }}
  />
)

const Loaders = Object.keys(svgs).reduce((prev, next) => {
  prev[next] = Loadable({
    loader: svgs[next],
    loading(props) {
      if (!props.pastDelay) return null
      return <Container filename={props.filename} className={props.className} />
    },
    render(loaded, props) {
      return <Container svg={loaded} className={props.className} />
    },
  })
  return prev
}, {})

export const BaseSvg = props => {
  const Loader = Loaders[props.filename]
  if (!Loader) return null
  return <Loader {...props} />
}

const enhance = onlyUpdateForKeys(['filename', 'className'])

export default enhance(BaseSvg)
