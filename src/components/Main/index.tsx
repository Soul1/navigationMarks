import {h, Fragment} from 'preact'
import {useState} from 'preact/hooks'
import * as Type from '../../types'
import '../../animation/index.scss'
import './index.scss'

const marks = [
  [{id: 1, markColor: 'red', markAnimate: 'lateral', text: 'lateral red'}, {id: 2, markColor: 'green', markAnimate: 'lateral', text: 'lateral green'}],
  [
    {id: 3, markAnimate: 'northCardinal', text: 'north cardinal'}, {id: 4, markAnimate: 'eastCardinal', text: 'east cardinal'},
    {id: 5, markAnimate: 'southCardinal', text: 'south cardinal'}, {id: 6, markAnimate: 'westCardinal', text: 'west cardinal // пока не работает //'}
  ],
  [{id: 7, markAnimate: 'isolatedDanger', text: 'isolated danger'}],
  [{id: 8, markAnimate: 'emergencyWreckMarking', text: 'emergency wreck marking'}],
  [{id: 9, markAnimate: 'saveWater', text: 'save water'}],
  [{id: 10, markAnimate: 'special', text: 'special'}],
]

export const NavigationMarks = () => {
  const [currentMark, setCurrentMark] = useState<Mark>({
    id: 1,
    markColor: 'red',
    markAnimate: 'lateral',
    text: 'lateral red'
  })
  return (
    <Centered>
      <div class='window'>
        <Circle color={currentMark.markColor} animate={currentMark.markAnimate}/>
      </div>
      <span class='marks'>
        {marks.map(mark => <Mark mark={mark} onCurrentMark={setCurrentMark}/>)}
      </span>
    </Centered>
  )
}

const Centered: Type.F<{}> = ({children}) =>
  <section class='hero centered'>
    <div class='hero-body has-text-centered'>
      {children}
    </div>
  </section>


type Mark = {
  id: number
  markColor?: string
  markAnimate: string
  text: string
}

type MarkProps = {
  mark: Mark[]
  onCurrentMark: (mark: Mark) => void
}

const Mark: Type.F<MarkProps> = ({mark, onCurrentMark}) => {
  return (
    <Fragment>
      {mark.map(i => <p class='mark' onClick={() => onCurrentMark(i)}>{i.text}</p>)}
    </Fragment>
    )
}

const Circle: Type.F<{color: string, animate: string}> = ({color, animate}) =>
  <div class={`circle ${color} ${animate}`}/>