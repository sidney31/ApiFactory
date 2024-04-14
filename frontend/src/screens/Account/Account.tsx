import { useKeycloak } from '@react-keycloak/web'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/navbar/Navbar.tsx'
import '../../styles/common.scss'

export const Account = () => {
	const { keycloak } = useKeycloak()
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
			<main className='relative top-[100px]'>
				<div className='container'>
					<h2 className='font-semibold text-[36px] mb-[36px]'>Сервисы</h2>
					<p>{keycloak.tokenParsed?.name}</p>
					<p>{keycloak.tokenParsed?.email}</p>
					{!!keycloak.authenticated && (
						<button
							type='button'
							onClick={() =>
								keycloak.logout({ redirectUri: 'https://web.api-factory.ru/' })
							}
						>
							Выйти
						</button>
					)}
				</div>
			</main>
		</>
	)
}
