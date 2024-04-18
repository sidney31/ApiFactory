import { ReactKeycloakProvider } from '@react-keycloak/web'
import 'aos/dist/aos.css'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import { kc } from './clients/UserClient.ts'
import { Account } from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import Test from './screens/Test/Test.tsx'
import ScrollToTop from './ScrollToTop.jsx'
import './styles/common.scss'

const initOptions = { 
	onLoad: 'check-sso', 
	silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`}

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
	{
		path: 'test/',
		element: <Test />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
		<ReactKeycloakProvider authClient={kc} initOptions={initOptions}>
			<RouterProvider router={router} />
		</ReactKeycloakProvider>
)