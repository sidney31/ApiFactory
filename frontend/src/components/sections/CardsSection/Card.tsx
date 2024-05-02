import { CardProps } from './Card.interface'
import styles from './Card.module.scss'

export const Card = ({image_path, title, subtitle}: CardProps) => {
	return (
		<div className={styles.card_wrapper}>
			<div className={styles.card_hero}>
				<div className={styles.card_image}>
					<img src={image_path} alt={title}/>
				</div>
				<div className={styles.card_title}>{title}</div>
			</div>
			<div className={styles.card_subtitle}>{subtitle}</div>
		</div>
	)
}
