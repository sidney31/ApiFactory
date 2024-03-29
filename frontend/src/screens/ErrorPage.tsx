import { Link } from 'react-router-dom'

export const ErrorPage = () => {
	return (
		<div className='h-[100svh] flex flex-col items-center justify-center'>
			<p className='text-[32px] mb-[8px]'>Выбранная страница не существует</p>
			<Link to={'/'} className='hover:underline'>
				Вернуться на главную
			</Link>
		</div>
	)
}
