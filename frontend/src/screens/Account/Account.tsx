import { useKeycloak } from '@react-keycloak/web'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/navbar/Navbar.tsx'
import '../../styles/common.scss'

import ServiceCard from '../../components/serviceCard/ServiceCard.tsx'
import styles from './Account.module.scss'
import { services_db } from './services_db.js'

export const Account = () => {
	const { keycloak } = useKeycloak()

	return (
		<>
			{(!keycloak.authenticated && (
				<div className='h-[100svh] flex flex-col items-center justify-center'>
					<h1>Требуется авторизация</h1>
					<button
						onClick={() => {
							keycloak.login()
						}}
					>
						Авторизация
					</button>
				</div>
			)) || (
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
					<main className='relative top-[100px]'>
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

						<div className='container'>
							<h2 className='font-semibold text-[36px] mb-[36px]'>Сервисы</h2>
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
			)}
		</>
	)
}
