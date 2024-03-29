import { Card } from '../../Card'
import styles from './CardsSection.module.scss'

export interface Props {
	className?: string
	titleClassName?: string
	text_title: string
	text_subtitle: string
	cards: Array<Card>
}

export interface Card {
	image_path: string
	title: string
	subtitle: string
}

export const CardsSection = (props: Props) => {
	return (
		<section className={props.className}>
			<div className='container'>
				<div className={styles.text}>
					<p className={`${styles.text_title} ${props.titleClassName}`}>{props.text_title}</p>
					<p className={styles.text_subtitle}>{props.text_subtitle}</p>
				</div>
				<div className={styles.cards}>
					{props.cards.map(card => (
						<Card
							key={card.title}
							image_path={card.title}
							title={card.title}
							subtitle={card.subtitle}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
