import { ReactKeycloakProvider } from '@react-keycloak/web'
import 'aos/dist/aos.css'
import axios from 'axios'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import kc from './clients/UserClient.ts'
import { Account } from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import Test from './screens/Test/Test.tsx'
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
	{
		path: 'test/',
		element: <Test />,
	},
])


ReactDOM.createRoot(document.getElementById('root')!).render(
		<ReactKeycloakProvider authClient={kc}>
			<RouterProvider router={router} />
		</ReactKeycloakProvider>
)

const instance = axios.create({
  baseURL: "https://web.api-factory.ru/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
	const token = kc.token;
	console.log('done')
	if (token) {
		console.log(token)
		// config.headers["Authorization"] = 'Bearer ' + token;
		config.headers["x-access-token"] = token;
	}
	return config;   
}, (error) => {
	return Promise.reject(error);
})	
