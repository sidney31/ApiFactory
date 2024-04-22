import Aos from 'aos'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { Wave } from '../../components/wave/Wave'
import UserService from '../../services/UserService'
import styles from './Login.module.scss'

const Login = () => {
	const [passwordState, setPasswordState] = useState(false)
	const navigate = useNavigate();

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: values => {
			const accessToken = UserService.getAccessToken(values.email, values.password)
			accessToken.then(token => {
				console.log(token);
				!!token && navigate('/account')
			})
		},
	})
	
	return (
		<>
			<Wave className={'blur-[1px]'}/>
			<div data-aos='zoom-in' className={styles.loginFormWrapper}>
				<div className={styles.loginForm_header}>
					<img 
						className={styles.loginForm_header_logo} 
						src="/tehnocat.svg"
						alt="apifactory-logo"
					/>
					<h4 className={styles.loginForm_header_title}>
						Войдите в Ваш аккаунт
					</h4>
				</div>
				<div className={styles.loginForm_formWrapper}>
					<form
						noValidate
						className={styles.loginForm_form}
						onSubmit={handleSubmit}
					>
						<div className={styles.loginForm_inputWrapper}>
							<input 
								type="email" 
								id='email'
								placeholder='Электронная почта' 
								onChange={handleChange}
								value={values.email}
							/>
						</div>
						<div 
							className={
								`${styles.loginForm_inputWrapper} ${styles.loginForm_passwordInputWrapper}`
							}
						>
							<input 
								type={passwordState && 'text' || 'password'} 
								id='password'
								placeholder='Пароль'
								onChange={handleChange}
								value={values.password}
							/>
							<button 
								id={styles.passwordHandlerButton}
								type="button"
								onClick={() => setPasswordState(!passwordState)}
							>
								{passwordState && <FaEyeSlash /> || <FaEye/>}
							</button>
						</div>
						<button className={styles.loginForm_submitButton} type='submit'>
							Войти
						</button>
						<div className={styles.loginForm_form_forgotPassword_wrapper}>
							<div className={styles.loginForm_form_forgotPassword}>
								<a href="/password_reset">
									Забыли пароль?
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
