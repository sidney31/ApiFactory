import '../common.scss'
import styles from './TwiceSection.module.scss'

export interface Props {
	className?: string
	titleClassName?: string
	text_small: string
	text_title: string
	text_subtitle: string
	text_subtitle_button: string
	image_path: string
}

export const TwiceSection = (props: Props) => {
	return (
		<section className={props.className}>
			<div className={styles.container}>
				<div className={styles.text}>
					<p className='text_small'>{props.text_small}</p>
					<p className={`text_title ${props.titleClassName}`}>{props.text_title}</p>
					<p className={styles.text_subtitle}>{props.text_subtitle}</p>
					<button>{props.text_subtitle_button}</button>
				</div>
				<div className={styles.image}></div>
			</div>
		</section>
	)
}
