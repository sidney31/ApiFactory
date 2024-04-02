// @ts-nocheck

import axios from 'axios'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Account } from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import UserService from './services/UserService.js'
import './styles/common.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'account/',
		element: <Account />,
	},
	{
		path: 'service/:serviceName',
		element: <Home />,
	},
])

const _axios = axios.create()
_axios.interceptors.request.use(config => {
	if (UserService.isLoggedIn()) {
		const cb = () => {
			config.headers.Authorization = `Bearer ${UserService.getToken()}`
			return Promise.resolve(config)
		}
		return UserService.updateToken(cb)
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
UserService.initKeycloak()
