import { CardProps } from './Card.interface'

export interface Props {
	className?: string
	titleClassName?: string
	text_title: string
	text_subtitle: string
	cards: Array<CardProps>
}