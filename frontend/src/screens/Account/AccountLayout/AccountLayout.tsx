import Aos from 'aos'
import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Sidebar from '../../../components/sidebar/Sidebar'
import UserService from '../../../services/UserService'
import styles from './AccountLayout.module.scss'

const AccountLayout: React.FC<{children: React.ReactNode}> = ({children}) => {

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	return (
		<>
			<nav data-aos='fade-down'  className={styles.header}>
				<Link to='/' className={styles.navbar_logo}>
					<img className='py-[10px]' src='/svg/logo.svg' alt='logo' />
				</Link>
				<div className={styles.navbar_account}>
					<CgProfile />
					<p>{UserService.getName()}</p>
				</div>
			</nav>
			<main className={styles.main_wrapper}>
				<Sidebar />
				<div data-aos='fade-up' data-aos-delay='700' className={styles.content}>
					{children}
				</div>
			</main>
		</>
	)
}

export default AccountLayout
