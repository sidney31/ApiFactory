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
					<p className='text_small'>{props.text_small}</p>
					<h2 className='text_title'>{props.text_title}</h2>
					<p className={`${styles.text_content}`}>{props.text_content}</p>
					<button className='bg-[#36332f] text-[#f5f5f5] hover:bg-[#00000000] hover:text-[#36332f] px-[36px] py-[10px]'>
						{props.button_text}
					</button>
				</div>
			</div>
		</section>
	)
}
