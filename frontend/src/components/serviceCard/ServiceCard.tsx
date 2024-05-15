import { Link } from 'react-router-dom'
// import { Image } from 'react-skeleton-image'
import { Props } from './ServiceCard.interface'
import styles from './ServiceCard.module.scss'

const ServiceCard = (props: Props) => {
	return (
		<Link to={props.link}
			className={styles.card}
		>
			<div className={styles.card_hero}>
				<img
					className={styles.card_hero_image}
					// skeletonClassName={styles.card_hero_image_skeleton}
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
		</Link>
	)
}

export default ServiceCard
