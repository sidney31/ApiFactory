import Aos from 'aos'
import { useEffect, useRef } from 'react'
import { MdCheckCircleOutline, MdErrorOutline, MdOutlineInfo } from "react-icons/md"
import styles from './Alert.module.scss'


const Alert: React.FC<TAlert> = ({type, children, lifeTime=5000}: TAlert) => {
	
	const getTypeStyle = (type: AlertType) => ({
		'fail': styles.fail, 
		'info': styles.info, 
		'success': styles.success, 
	}[type])

	const alertRef = useRef<HTMLDivElement>(null)

	useEffect(() => {			
		Aos.init({ duration: 1000, delay: 100 })
		alertRef.current?.style.setProperty('--alert-life-time', `${lifeTime}ms`)
	}, [])

	// TODO: pool of alerts
	return (
		<div 
			ref={alertRef}
			data-aos='fade-up'
			className={`${styles.alert} ${getTypeStyle(type)}`}
		>
			<div>
				{type === 'fail' && <MdErrorOutline className={styles.alert_icon}/>}
				{type === 'info' && <MdOutlineInfo className={styles.alert_icon}/>}
				{type === 'success' && <MdCheckCircleOutline className={styles.alert_icon}/>}
			</div>
			<div className={styles.alert_content}>
				{children}
			</div>
		</div>
	)
}

export default Alert