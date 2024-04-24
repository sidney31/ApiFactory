import { useState } from 'react'
import { VscAdd, VscRemove } from 'react-icons/vsc'
import styles from './QuestionBox.module.scss'

export interface Props {
	question: string
	answer: string
}

export const QuestionBox = (props: Props) => {
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	const [state, setState] = useState(isDesktop)

	return (
		<div data-aos='zoom-in' className={styles.question_block_wrapper}>
			<div className={styles.question_wrapper}>
				<p className={styles.question}>{props.question}</p>
				<a
					className={styles.icon_button}
					onClick={() => {
						setState(!state)
					}}
				>
					{(!!state && <VscRemove />) || <VscAdd />}
				</a>
			</div>
			{!!state && <p className={styles.answer}>{props.answer}</p>}
		</div>
	)
}
