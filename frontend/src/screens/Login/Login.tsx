import Aos from 'aos'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Wave } from '../../components/wave/Wave'
import UserService from '../../services/UserService'
import styles from './Login.module.scss'

const Login = () => {
	const [passwordState, setPasswordState] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	const {
		register,
		handleSubmit,
	} = useForm()

	const onSubmit = (data: FieldValues) => {
		const accessToken = UserService.authorization(
			data.email,
			data.password
		)

		accessToken.then(token => {
			if (token) {
				navigate('/account')
				toast('Успешная авторизация!', {
					type: 'success'
				})																												
			} else {
				toast('Ошибка авторизации', {
					type: 'error'
				})
			}
		})
	}


	return (
		<>
			<Wave className={'blur-[1px]'} />
			<div data-aos='zoom-in' className={styles.loginFormWrapper}>
				<div className={styles.loginForm_header}>
					<img
						className={styles.loginForm_header_logo}
						src='/svg/logo.svg'
						alt='apifactory-logo'
					/>
					<h4 className={styles.loginForm_header_title}>
						Войдите в Ваш аккаунт
					</h4>
				</div>
				<div className={styles.loginForm_formWrapper}>
					<form
						noValidate
						className={styles.loginForm_form}
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className={styles.loginForm_inputWrapper}>
							<input
								type='email'
								id='email'
								placeholder='Электронная почта'
								{...register('email')}
							/>
						</div>
						<div
							className={`${styles.loginForm_inputWrapper} ${styles.loginForm_passwordInputWrapper}`}
						>
							<input
								type={(passwordState && 'text') || 'password'}
								id='password'
								placeholder='Пароль'
								{...register('password')}
							/>
							<button
								id={styles.passwordHandlerButton}
								type='button'
								onClick={() => setPasswordState(!passwordState)}
							>
								{(passwordState && <FaEyeSlash />) || <FaEye />}
							</button>
						</div>
						<button className={styles.loginForm_submitButton} type='submit'>
							Войти
						</button>
						<div className={styles.loginForm_form_forgotPassword_wrapper}>
							<div className={styles.loginForm_form_forgotPassword}>
								<a href='/password_reset'>Забыли пароль?</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
