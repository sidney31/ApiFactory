import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import styles from './Account.module.scss'

import ServiceCard from '../../components/serviceCard/ServiceCard'
import Sidebar from '../../components/sidebar/Sidebar'
import services_db from './services_db'

const Account = () => {
	return (
		<>
			<nav className={styles.header}>
				<Link to='/' className={styles.navbar_logo}>
					<img className='py-[10px]' src='/svg/logo.svg' alt='logo' />
				</Link>
				<div className={styles.navbar_account}>
					<CgProfile />
					{/* <p>{UserService.getName()}</p> */}
					<p>Иванов И.</p>
				</div>
			</nav>
			<main>
				<Sidebar />
				<div className={styles.content}>
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
			</main>
		</>
	)
}

export default Account
