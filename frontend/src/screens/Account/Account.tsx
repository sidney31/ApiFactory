import Aos from 'aos'
import { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import Sidebar from '../../components/sidebar/Sidebar'
import UserService from '../../services/UserService'
import styles from './Account.module.scss'
import services_db from './services_db'

useEffect(() => {
	Aos.init({ duration: 1000, delay: 100 })
}, [])

const Account = () => {
	return (
		<>
			<nav data-aos='fade-down' className={styles.header}>
				<Link to='/' className={styles.navbar_logo}>
					<img className='py-[10px]' src='/svg/logo.svg' alt='logo' />
				</Link>
				<div className={styles.navbar_account}>
					<CgProfile />
					<p>{UserService.getName()}</p>
				</div>
			</nav>
			<main>
				<div className={styles.main_wrapper}>
					<Sidebar />
					<div data-aos='fade-up' className={styles.content}>
						<h3 className={styles.page_title}>Доступные сервисы</h3>
						<div className={styles.cards_wrapper}>
							{services_db.map((service, index) => (
								<ServiceCard
								key={index}
								title={service.hero_title}
								titleBackground={service.hero_image}
								name={service.name}
								logo={service.logo}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Account
