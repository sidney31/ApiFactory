import { ReactNode } from 'react'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

interface Props {
	reference?: React.RefObject<HTMLDivElement>
	children?: ReactNode
}

export const Footer = (props: Props) => {
	return (
		<footer ref={props.reference} className={`${styles.footer}`}>
			{props.children}
			<div className={styles.footer_nav}>
				<Link to='/' className={styles.footer_nav_logo}>
					<img className='py-[10px]' src='/svg/logo2.svg' alt='logo' />
				</Link>
				<div className={`${styles.footer_menu} ${styles.container}`}></div>
				<div className='text-[16px] whitespace-nowrap'>© 2024 АПИ-ФАКТОРИ</div>
			</div>
		</footer>
	)
}
