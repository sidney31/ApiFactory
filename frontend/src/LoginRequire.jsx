import { Navigate, useLocation } from 'react-router-dom'
import UserClient from './clients/UserClient'

const LoginRequire = ({ children }) => {
	let location = useLocation();
  if (!UserClient.isAuthorization)
		return <Navigate to="/login" state={{ from: location }} replace />;

	return children
}

export default LoginRequire
