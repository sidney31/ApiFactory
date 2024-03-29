export interface Props {
	image_path: string
	title: string
	subtitle: string
}

export const Card = (props: Props) => {
	return (
		<div className='flex flex-col h-full'>
			<div className='bg-[#D9D9D9] w-[280px] h-[170px] mb-[20px]'></div>
			<div className='mb-[15px] text-[16px] font-bold h-[40px] me-[10px]'>
				{props.title}
			</div>
			<div className='text-[14px] font-light me-[15px]'>{props.subtitle}</div>
		</div>
	)
}
