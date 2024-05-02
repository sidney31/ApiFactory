import { Card } from './Card'
import { Props } from './CardsSection.interface'
import styles from './CardsSection.module.scss'

export const CardsSection = (props: Props) => {
	return (
		<section className={props.className}>
			<div className='container'>
				<div className={styles.text_wrapper}>
					<h2
						data-aos='fade-right'
						className={`${styles.text_title} ${props.titleClassName}`}
					>
						{props.text_title}
					</h2>
					<p data-aos='fade-left' className={styles.text_subtitle}>
						{props.text_subtitle}
					</p>
				</div>
				<div data-aos='fade-up' className={styles.cards}>
					{props.cards.map(card => (
						<Card
							key={card.title}
							image_path={card.image_path}
							title={card.title}
							subtitle={card.subtitle}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
