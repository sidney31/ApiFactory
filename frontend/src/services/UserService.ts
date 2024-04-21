import axios from 'axios'
import Keycloak, { KeycloakConfig } from 'keycloak-js'
import { redirect } from 'react-router-dom'

let token: string | null

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

const getToken = () => token

const getUsername = () => instance.tokenParsed?.preffererd_username

const isAuth = () => !!token

const doLogin = (redirectUri: string) => redirect(`/login?next=/${redirectUri}`)

const getAccessToken = async (username: string, password: string ) => {
	let access_token: string | undefined

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
		access_token = response.data.access_token
		token = response.data.access_token
	})
	.catch((error) => {
		console.log(`Ошибка получения токена: ${error}`)
	})
	return access_token
}

const UserService = {
	instance,
	options,
	getToken,
	getUsername,
	isAuth,
	getAccessToken,
	doLogin,
}

export default UserService

