import { ReactKeycloakProvider } from '@react-keycloak/web'
import 'normalize.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import kc from './clients/UserClient.ts'
import { Account } from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import ScrollToTop from './ScrollToTop.jsx'
import './styles/common.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ScrollToTop>
				<Home />
			</ScrollToTop>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: 'service/:serviceName',
		element: (
			<ScrollToTop>
				<Home />
			</ScrollToTop>
		),
	},
	{
		path: 'account/',
		element: <Account />,
	},
])


ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReactKeycloakProvider authClient={kc}>
			<RouterProvider router={router} />
		</ReactKeycloakProvider>
	</StrictMode>
)