import Keycloak, { KeycloakConfig } from 'keycloak-js'

const initOptions: KeycloakConfig = {
  url: "https://id.api-factory.ru:8443/",
	realm: "API-FACTORY",
  clientId: "web",
};

const kc = new Keycloak(initOptions)

export default kc
