import { Link } from 'react-router-dom'
import { Navbar } from '../../components/navbar/Navbar'
import UserService from '../../services/UserService'
import * as db from './db.js'

const HomeLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
	return (
		<>
			<Navbar
						nav_links={db.NAV_LINKS}
						logo_path='/logos/technocat.svg'
						header_action={
							<>	
								<Link to='/account'>
									<button>
										{UserService.isAuth() &&
											'Личный кабинет' || 'Вход для клиентов'
										}
									</button>
								</Link>
							</>
						}
					/>
			<main>
				{children}
			</main>
		</>
	)
}
export default HomeLayout