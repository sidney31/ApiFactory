import { ReactKeycloakProvider } from '@react-keycloak/web'
import 'aos/dist/aos.css'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import AlertProvider from './providers/AlertProvider.jsx'
import LoginProvider from './providers/LoginProvider.jsx'
import ScrollTopProvider from './providers/ScrollTopProvider.jsx'
import Account from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import Requisites from './screens/Home/Pages/Requisites/Requisites.tsx'
import Vacancy from './screens/Home/Pages/Vacancy/Vacancy.tsx'
import Login from './screens/Login/Login.tsx'
import Services from './screens/Services/Services.tsx'
import Test from './screens/Test/Test.tsx'
import UserClient from './services/UserService.ts'
import './styles/common.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ScrollTopProvider>
				<Home />
			</ScrollTopProvider>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: 'service/:serviceName',
		element: (
			<ScrollTopProvider>
				<Services/>
			</ScrollTopProvider>
		),
	},
	{
		path: 'account/:tabName?',
		element: (
			<LoginProvider>
				<Account />
			</LoginProvider>
		),
	},
	{
		path: 'requisites/',
		element: (
			<Requisites />
		),
	},
	{
		path: 'vacancy/',
		element: (
			<Vacancy />
		),
	},
	{
		path: '/login/',
		element: <Login />,
	},
	{
		path: 'test/',
		element: <Test />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ReactKeycloakProvider
		authClient={UserClient.instance}
		initOptions={UserClient.options}
	>
		<AlertProvider>
			<RouterProvider router={router} />
		</AlertProvider>
	</ReactKeycloakProvider>
)
