import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer.tsx'
import { Navbar } from '../../components/navbar/Navbar.tsx'
import ServiceCard from '../../components/serviceCard/ServiceCard.tsx'
import '../../styles/common.scss'
import styles from './Account.module.scss'
import { services_db } from './services_db.js'


export const Account = () => {
	// const { keycloak, initialized } = useKeycloak()
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	return (
		<>
			<Navbar
				nav_links={new Array()}
				logo_path='/svg/logo.svg'
				header_action={
					<>
						<Link to='/profile'>
							<button>Профиль</button>
						</Link>
					</>
				}
			/>
			<main>
				{/* <div className='container'>
					<h2 className='font-semibold text-[36px] mb-[36px]'>Сервисы</h2>
					<p>{keycloak.tokenParsed?.name}</p>
					<p>{keycloak.tokenParsed?.email}</p>
					{!!keycloak.authenticated && (
						<button
							type='button'
							onClick={() =>
								keycloak.logout({
									redirectUri: 'https://web.api-factory.ru/',
								})
							}
						>
							Выйти
						</button>
					)}
				</div> */}

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

			<Footer/>
		</>
	)
}
