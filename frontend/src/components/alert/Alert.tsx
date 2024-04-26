import Aos from 'aos'
import { useEffect, useRef } from 'react'
import { AlertProps } from './Alert.interface'
import styles from './Alert.module.scss'

const Alert: React.FC<AlertProps> = ({type, children, lifeTime='5000ms'}: AlertProps) => {
	const getTypeStyle = (type: AlertType) => ({
		'fail': styles.fail, 
		'info': styles.info, 
		'success': styles.success, 
	}[type])

	const alertRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
		alertRef.current?.style.setProperty('--alert-life-time', lifeTime)
	}, [])

	// TODO: pool of alerts
	return (
		<div 
			ref={alertRef}
			data-aos='fade-up'
			className={`${styles.alert} ${getTypeStyle(type)}`}
		>
			{children}
		</div>
	)
}

export default Alert