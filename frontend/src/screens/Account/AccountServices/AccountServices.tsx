import ServiceCard from '../../../components/serviceCard/ServiceCard'
import styles from './AccountServices.module.scss'
import services from './Service.data.ts'

const AccountServices = () => {
	return (
		<>
			<h3 className={styles.page_title}>Доступные сервисы</h3>
			<div className={styles.cards_wrapper}>
				{services.map((service, index) => (
					<ServiceCard
					key={index}
					title={service.hero_title}
					titleBackground={service.hero_image}
					name={service.name}
					logo={service.logo}
					link={service.link}
					/>
				))}
			</div>
		</>
	)
}

export default AccountServices
