import { Navigate, useLocation } from 'react-router-dom'
import UserService from './services/UserService'

const LoginRequire = ({ children }) => {
	let location = useLocation();
  if (!UserService.isAuth())
		return <Navigate to="/login" state={{ from: location }} replace />;

	return children
}

export default LoginRequire
