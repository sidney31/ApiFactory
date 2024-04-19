import Keycloak, { KeycloakConfig } from 'keycloak-js'
import { redirect } from 'react-router-dom'

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
const getToken = () => instance.token

const getUsername = () => instance.tokenParsed?.preffererd_username

const isAuthorization = !!instance.token

const doLogin = (redirectUri: string) => redirect(`/login?next=/${redirectUri}`)


const UserClient = {
	instance,
	options,
	getToken,
	getUsername,
	isAuthorization,
	doLogin,
}

export default UserClient

