import { VscAdd } from 'react-icons/vsc'

export interface Props {
	question: string
	answer: string
}

export const QuestionBox = (props: Props) => {
	return (
		<div className='mx-auto w-[840px] px-[32px] py-[18px] border-solid border-[1px] border-[#302e2c] relative mb-[14px]'>
			<VscAdd className='text-[24px] absolute right-[32px] top-[18px]' />
			<p className='text-[16px] font-semibold mb-[28px]'>{props.question}</p>
			<p className='text-[16px]'>{props.answer}</p>
		</div>
	)
}
