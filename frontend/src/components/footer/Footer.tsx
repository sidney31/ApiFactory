import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import { Props } from './Footer.interface'
import styles from './Footer.module.scss'

export const Footer = (props: Props) => {
	return (
		<footer ref={props.reference} className={`${styles.footer}`}>
			{props.children}
			<div className={styles.footer_nav}>
				<Link to='/' className={styles.footer_nav_logo}>
					<img className='py-[10px] fill-white' src='/logos/technocat.svg' alt='logo' />
				</Link>
				<div className={`${styles.footer_menu} ${styles.container}`}></div>
				<div className='text-[16px] whitespace-nowrap text-[#f5f5f5]'>© 2024 ТЕХНО-КОТ</div>
			</div>
		</footer>
	)
}
