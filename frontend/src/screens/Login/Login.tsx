import Aos from 'aos'
import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Wave } from '../../components/wave/Wave'
import styles from './Login.module.scss'


const Login = () => {
	const [passwordState, setPasswordState] = useState(false)

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<>
			<Wave className={'blur-[1px]'}/>
			<div data-aos='zoom-in' className={styles.loginFormWrapper}>
				<div className={styles.loginForm_header}>
					<img 
						className={styles.loginForm_header_logo} 
						src="/svg/logo3.svg"
						alt="apifactory-logo"
					/>
					<h4 className={styles.loginForm_header_title}>
						Войдите в Ваш аккаунт
					</h4>
				</div>
				<div className={styles.loginForm_formWrapper}>
					<form
						className={styles.loginForm_form}
						action=""
					>
						<div className={styles.loginForm_inputWrapper}>
							<input type="email" placeholder='Электронная почта' />
						</div>
						<div 
							className={
								`${styles.loginForm_inputWrapper} ${styles.loginForm_passwordInputWrapper}`
							}
						>
							<input 
								type={passwordState && 'text' || 'password'} 
								placeholder='Пароль'
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
