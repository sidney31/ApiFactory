import { Props } from './Contact.interface'
import styles from './Contact.module.scss'

export const Contact = (props: Props) => {
	return (
		<div className={styles.contact_card}>
			<div data-aos='fade-down' className={styles.contact_title_wrapper}>
				<h2 className={styles.contact_title}>{props.title}</h2>
				<p className={styles.contact_subtitle}>{props.subtitle}</p>
			</div>
			<a
				data-aos='fade-up'
				data-aos-delay='300'
				href={`${props.type}:${props.data}`}
				className={styles.contact_data}
			>
				<h4>{props.data}</h4>
			</a>
		</div>
	)
}
