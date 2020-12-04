import {h} from 'preact'
import {useState} from 'preact/hooks'
import {Marks, InfoMarks, CardinalInfo} from '../pages'
import * as Img from '../common/images'
import * as Type from '../../types'
import '../../animation/index.scss'
import './index.scss'

const marks: Type.Mark[][] = [
  [{id: 1, markColor: 'red', markAnimate: 'lateral', text: 'lateral red', img: Img.lateralRed}, {id: 2, markColor: 'green', markAnimate: 'lateral', text: 'lateral green', img: Img.lateralGreen}],
  [
    {id: 3, markAnimate: 'northCardinal', text: 'north cardinal', img: Img.northCardinal}, {id: 4, markAnimate: 'eastCardinal', text: 'east cardinal', img: Img.eastCardinal},
    {id: 5, markAnimate: 'southCardinal', text: 'south cardinal', img: Img.southCardinal}, {id: 6, markAnimate: 'westCardinal', text: 'west cardinal', img: Img.westCardinal}
  ],
  [{id: 7, markAnimate: 'isolatedDanger', text: 'isolated danger', img: Img.isolatedDanger}],
  [{id: 8, markAnimate: 'emergencyWreckMarking', text: 'emergency wreck marking', img: Img.emergencyWreckMarking}],
  [{id: 9, markAnimate: 'saveWater', text: 'save water', img: Img.saveWater}],
  [{id: 10, markAnimate: 'special', text: 'special', img: Img.special}]
]

enum Pages {InfoMarks, Marks, CardinalInfo}

export const NavigationMarks = () => {
  const [currentMark, setCurrentMark] = useState<Type.Mark>({
    id: 1,
    markColor: 'red',
    markAnimate: 'lateral',
    text: 'lateral red',
    img: Img.lateralRed
  })
  let [currentPage, setCurrentPage] = useState(Pages.InfoMarks)
  const prev = () => {
    setCurrentPage(--currentPage)
  }
  const next = () => {
    setCurrentPage(++currentPage)
  }
  let i = 1 + currentPage
  return (
    <Centered>
      {currentPage === Pages.InfoMarks && <InfoMarks />}
      {currentPage === Pages.CardinalInfo && <CardinalInfo />}
      {currentPage === Pages.Marks && <Marks marks={marks} ship={Img.ship} currentMark={currentMark} onCurrentMark={setCurrentMark}/>}
      <div class='arrows has-text-centered'>
        {currentPage > 0 && <div class='prev' onClick={prev}>туда</div>}
        <div class='current-page'>{`${i} из 4`}</div>
        {currentPage <= 4 && <div class='next' onClick={next}>сюда</div>}
      </div>
    </Centered>
  )
}

const Centered: Type.F<{}> = ({children}) =>
  <section class='hero centered'>
    <div class='hero-body'>
      {children}
    </div>
  </section>

