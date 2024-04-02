import { ReactNode } from 'react'
import '../common.scss'
import styles from './TwiceSection.module.scss'

export interface Props {
	className?: string
	titleClassName?: string
	text_small?: string
	text_title: string
	text_subtitle?: string
	text_subtitle_large?: string
	text_subtitle_button?: string
	text_extra?: ReactNode | string
	image_path: string
}

export const TwiceSection = (props: Props) => {
	return (
		<section className={props.className}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.text}>
						{props.text_small && (
							<p className='text_small'>{props.text_small}</p>
						)}
						<p className={`text_title ${props.titleClassName}`}>
							{props.text_title}
						</p>
						{!!props.text_subtitle_large && (
							<p className={styles.text_subtitle_large}>
								{props.text_subtitle_large}
							</p>
						)}
						{!!props.text_subtitle && (
							<p className={styles.text_subtitle}>{props.text_subtitle}</p>
						)}
						{props.text_subtitle_button && (
							<button>{props.text_subtitle_button}</button>
						)}
					</div>
					<div className={styles.image}></div>
				</div>
				{props.text_extra && (
					<div
						className={styles.text_extra}
						dangerouslySetInnerHTML={{ __html: props.text_extra }}
					></div>
				)}
			</div>
		</section>
	)
}
