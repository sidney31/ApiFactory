import Alert from '../../components/alert/Alert'

const Test = () => {
	return (
		<div className='flex flex-col gap-[10px]'>
			{/* здесь ничего нет */}
			<Alert type='success' children={'Успешная авторизация'}/>
			<Alert type='info' children={'Подтвердите ваш аккаунт'}/>
			<Alert type='fail' children={'Неверный пароль'}/>
		</div>
	)
}

export default Test
