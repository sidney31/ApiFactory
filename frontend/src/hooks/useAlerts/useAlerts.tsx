import { useEffect, useState } from 'react'

const useAlerts = () => {
	const [alerts, setAlerts] = useState(new Array<TAlert>)
	const [isAlertAdded, setAlertAdded] = useState(false)
	const MAX_ALERTS = 3

	useEffect(() => {
		isAlertAdded && removeAlert()
	}, [alerts])

	const addAlert = (alert: TAlert) => {
		if (alerts.length < MAX_ALERTS) {
			setAlerts([...alerts, alert])

			setTimeout(() => {
				setAlertAdded(true)
			}, alert.lifeTime || 5000);
		}
	}
	
	const removeAlert = () => {
		setAlerts(alerts.slice(0, alerts.length - 1))
		setAlertAdded(false)
	}

	return {
		'alerts': alerts,
		'addAlert': addAlert
	}
}
	

export default useAlerts