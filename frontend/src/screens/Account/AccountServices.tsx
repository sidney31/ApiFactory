import ServiceCard from '../../components/serviceCard/ServiceCard'
import styles from './Account.module.scss'
import services_db from './services_db'

const AccountServices = () => {
	return (
		<>
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
		</>
	)
}

export default AccountServices
