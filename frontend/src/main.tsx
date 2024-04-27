import { ReactKeycloakProvider } from '@react-keycloak/web'
import 'aos/dist/aos.css'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import Account from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import Login from './screens/Login/Login.tsx'
import Test from './screens/Test/Test.tsx'
import UserClient from './services/UserService.ts'
import './styles/common.scss'

import LoginProvider from './providers/LoginProvider.jsx'
import ScrollTopProvider from './providers/ScrollTopProvider.jsx'

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
				<Home />
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
		<RouterProvider router={router} />
	</ReactKeycloakProvider>
)
