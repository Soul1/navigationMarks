import {FunctionalComponent} from 'preact'

export type F<T> = FunctionalComponent<T>

export type Mark = {
  id: number
  markColor?: string
  markAnimate: string
  text: string
  img: string
}

export type Info = {
  id: number
  title: string
  text: string
  img: string
}