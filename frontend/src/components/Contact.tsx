export interface Props {
	title: string
	subtitle: string
	data: string
	type: ContactType
}

export enum ContactType {
	email = 'mailto',
	phone = 'tel',
	address = '',
}

export const Contact = (props: Props) => {
	return (
		<div className='flex flex-col w-[270px]'>
			<h2 className='font-bold text-[40px] mb-[36px]'>{props.title}</h2>
			<p className='font-light text-[14px] mb-[36px] min-h-[70px]'>
				{props.subtitle}
			</p>
			<a
				href={`${props.type}:${props.data}`}
				className='font-light text-[20px] text-[#36332f] hover:underline'
			>
				{props.data}
			</a>
		</div>
	)
}
