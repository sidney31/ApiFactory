import { ToastContainer } from 'react-toastify'

const AlertProvider = ({ children }) => {
	return (
	<>
		{children}
		<ToastContainer
			position='bottom-right'
			autoClose={5000}
			theme='dark'
			className='toastContainer'
		/>
	</>
	)
}

export default AlertProvider