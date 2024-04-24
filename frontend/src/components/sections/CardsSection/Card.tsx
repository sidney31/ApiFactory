import styles from './Card.module.scss'

export interface Props {
	image_path: string
	title: string
	subtitle: string
}

export const Card = (props: Props) => {
	return (
		<div className={styles.card_wrapper}>
			<div className={styles.card_hero}>
				<div className={styles.card_image}></div>
				<div className={styles.card_title}>{props.title}</div>
			</div>
			<div className={styles.card_subtitle}>{props.subtitle}</div>
		</div>
	)
}
