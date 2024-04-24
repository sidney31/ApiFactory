import '../common.scss'
import styles from './TextSection.module.scss'
export interface Props {
	text_small: string
	text_title: string
	text_content: string
	button_text: string
}

export const TextSection = (props: Props) => {
	return (
		<section>
			<div className='container'>
				<div className='text text-center'>
					<p data-aos='fade-down' className='text_small'>
						{props.text_small}
					</p>
					<h2 data-aos='fade-up' className='text_title'>
						{props.text_title}
					</h2>
					<p data-aos='fade-up' className={`${styles.text_content}`}>
						{props.text_content}
					</p>
					<button data-aos='fade-up' className={styles.button}>
						{props.button_text}
					</button>
				</div>
			</div>
		</section>
	)
}
