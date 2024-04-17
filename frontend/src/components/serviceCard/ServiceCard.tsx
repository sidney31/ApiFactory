import styles from './ServiceCard.module.scss'

interface Props {
	title: string
	titleBackground: string
	name: string
	logo: string
}

const ServiceCard = (props: Props) => {
	return (
		<div className={styles.card}>
			<div className={styles.card_hero}>
				<img
					className={styles.card_hero_image}
					loading="lazy"
					src={props.titleBackground}
					alt={props.title}
				/>
				<p className={styles.card_hero_title}>{props.title}</p>
			</div>
			<div className={styles.card_caption}>
				<div className={styles.card_caption_logo}>
					<img src={props.logo} alt='' />
				</div>
				<div className={styles.card_text_wrapper}>
					<p className={styles.card_caption_name}>{props.name}</p>
					<p className={styles.card_caption_state}>Активировано</p>
				</div>
			</div>
		</div>
	)
}

export default ServiceCard
