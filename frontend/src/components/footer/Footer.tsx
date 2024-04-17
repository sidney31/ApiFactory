import { useFormik } from 'formik'
import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import styles from './Footer.module.scss'

interface Props {
	reference?: React.RefObject<HTMLDivElement>
}

export const Footer = (props: Props) => {
	const { handleSubmit, setValues, values, handleChange } = useFormik({
		initialValues: {
			name: '',
			phone: '',
			question: '',
			agreement: false,
		},
		validationSchema: Yup.object({
			name: Yup.string().required(),
			phone: Yup.string().required(),
			question: Yup.string().required(),
			agreement: Yup.boolean().required(),
		}),
		onSubmit: values => {
			console.log(values)
		},
	})

	return (
		<footer ref={props.reference} className={`${styles.footer}`}>
			<div className='container'>
				<div className={`${styles.footer_formWrapper} py-[40px]`}>
					<h2 data-aos='fade-up-right' className={styles.footer_formTitle}>
						Отправьте заявление, и с Вами обязательно свяжутся
					</h2>
					<form
						noValidate
						onSubmit={handleSubmit}
						data-aos='fade-up-left'
						id='feedback_form'
					>
						<div className={styles.footer_form_field}>
							<input
								id='name'
								onChange={handleChange}
								value={values.name}
								type='text'
								placeholder='Имя'
							/>
						</div>
						<div className={styles.footer_form_field}>
							<PhoneInput
								id='phone'
								value={values.phone}
								onChange={(phone: string) =>
									setValues({
										...values,
										phone: phone,
									})
								}
								className={styles.footer_phoneInput}
								labels={ru}
								international
								defaultCountry='RU'
							/>
						</div>
						<div className={styles.footer_form_field}>
							<input
								id='question'
								onChange={handleChange}
								value={values.question}
								placeholder='Вопрос'
							/>
						</div>
						<div
							className={`${styles.footer_form_field} flex flex-row gap-[1em]`}
						>
							<input id='agreement' onChange={handleChange} type='checkbox' />
							<label className={styles.footer_form_label} htmlFor='agreement'>
								Нажимая кнопку «Отправить», я даю свое согласие на обработку
								моих персональных данных, в соответствии с Федеральным законом
								от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях
								и для целей, определенных в Согласии на обработку персональных
								данных
							</label>
						</div>
						<div className='text-center'>
							<button type='submit'>Отправить</button>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.footer_nav}>
				<Link to='/' className={styles.footer_nav_logo}>
					<img className='py-[10px]' src='/svg/logo2.svg' alt='logo' />
				</Link>
				<div className='text-[16px] whitespace-nowrap'>© 2024 АПИ-ФАКТОРИ</div>
			</div>
		</footer>
	)
}
