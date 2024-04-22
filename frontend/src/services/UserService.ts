import axios from 'axios'
import Keycloak, { KeycloakConfig } from 'keycloak-js'
import { redirect } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'


const initOptions: KeycloakConfig = {
	url: 'https://id.api-factory.ru:8443/',
	realm: 'API-FACTORY',
	clientId: 'web',
}

const instance = new Keycloak(initOptions)

const options = {	
	onLoad: 'check-sso', 
	silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`
}

const parseCookies = () => {
	const cookies = document.cookie.split('; ')
	const parsedCookies = new Map()
	for (let i = 0; i < cookies.length; i++){
		let cookie = cookies[i].split('=')
		parsedCookies.set(cookie[0], cookie[1])
	}
	return parsedCookies
}

const getToken = () => parseCookies().get('access_token')

const getDecodedToken = () =>	!!getToken() && JSON.parse(JSON.stringify(jwtDecode(getToken()))) || null

const getUsername = () => instance.tokenParsed?.preffererd_username

const isAuth = () => !!getToken()

const doLogin = (redirectUri: string) => redirect(`/login?next=/${redirectUri}`)

const authorization = async (username: string, password: string ) => {
	await axios.post(
		`${initOptions.url}realms/${initOptions.realm}/protocol/openid-connect/token`,
		{
			client_id: initOptions.clientId,
			grant_type: 'password',
			client_secret: 'XBqkDl76yQbnApivK6YpwYOyjpf3Akcl',
			username: username,
			password: password,
		},
		{
			headers: {
				"Content-Type": 'application/x-www-form-urlencoded'
			}
		}
	)
	.then((response) => {
		console.log('Успешная авторизация')
		saveToken(response.data.access_token)
	})
	.catch((error) => {
		console.log(`Ошибка получения токена: ${error}`)
	})
	return getToken()
}

const saveToken = (access_token: string) => {
	document.cookie = `access_token=${access_token}; samesite`
}

const UserService = {
	instance,
	options,
	getToken,
	getDecodedToken,
	getUsername,
	isAuth,
	doLogin,
	authorization,
}

export default UserService

