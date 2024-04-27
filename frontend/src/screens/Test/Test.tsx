import Alert from '../../components/alert/Alert'
import useAlerts from '../../hooks/useAlerts/useAlerts'

const Test = () => {
	const {alerts, addAlert} = useAlerts()
	return (
		<>
			<div className='flex flex-col gap-[10px]'>
				{/* здесь ничего нет */}
				<button 
					onClick={() => {
						addAlert({type: 'success', children: 'Успешная авторизация!'})
					}}
					>
					Успешная авторизация!		
				</button>
				<button 
					onClick={() => {
						addAlert({type: 'info', children: 'info alert'})
					}}
					>
					Информационный алерт				
				</button>
				<button 
					onClick={() => {
						addAlert({type: 'fail', children: 'fail alert'})
					}}
					>
					Феил алерт				
				</button>
			</div>
			<div className='flex flex-col gap-[10px] mt-[20px]'>
				{alerts.map((alert, index) => ( <Alert key={index} type={alert.type} children={alert.children} /> ))}
			</div>
		</>
	)
}

export default Test
