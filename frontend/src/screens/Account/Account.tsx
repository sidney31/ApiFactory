import { useKeycloak } from '@react-keycloak/web'


export const Account = () => {
  const { keycloak } = useKeycloak()
	return(	
    <div>
      <p>{keycloak.tokenParsed?.name}</p>
      <p>{keycloak.tokenParsed?.email}</p>
      {!!keycloak.authenticated && (
        <button 
          type="button" 
          onClick={() => keycloak.logout({redirectUri: 'https://web.api-factory.ru/'})}
        >
          Выйти
        </button>
      )}
    </div>
	)
}
