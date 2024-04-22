import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
// import { Footer } from '../../components/footer/Footer.tsx'
import { Navbar } from '../../components/navbar/Navbar.tsx'
import ServiceCard from '../../components/serviceCard/ServiceCard.tsx'
import '../../styles/common.scss'
import styles from './Account.module.scss'
import services_db from './services_db.js'
import UserService from '../../services/UserService'
import { CgProfile } from "react-icons/cg";
import Dropdown from '../../components/dropdown/small/Dropdown.tsx'

const dropdown_items = [
	{ text: 'Оплата', link: '/account/payment' },
	{ text: 'Помощь', link: '/account/help' },
	{ text: 'Выход из аккаунта', link: '/account/logout' },
]

export const Account = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	return (
		<>
			<Navbar
				nav_links={new Array()}
				logo_path='/tehnocat.svg'
				header_action={
					<>
					  <Dropdown 
						  title={
								<div className='flex row items-center gap-[5px]'>
									<CgProfile/>
								  <p>{UserService.getName()}</p>
								</div>
							}
						  items={dropdown_items}
						/>
					</>
				}
			/>
			<main className='pt-[100px]'>
				<div data-aos='fade-up' className={styles.container}>
					<h2 className={styles.title}>Сервисы</h2>
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
			{/* <Footer/> */}
		</>
	)
}
