import axios from 'axios'
import { useFormik } from 'formik'
import { GoAlertFill } from "react-icons/go"
import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'
import 'react-phone-number-input/style.css'
import { Tooltip } from 'react-tooltip'
import * as Yup from 'yup'
import styles from './FooterForm.module.scss'

const FooterForm = () =>{
	const { handleSubmit, setValues, values, handleChange, errors, resetForm, setSubmitting } = useFormik({
		initialValues: {
			name: '',
			phone: '',
			question: '',
			agreement: false,
		},
		validationSchema: Yup.object({
			phone: Yup.string()
			.max(12, 'Введите корректный номер')
			.min(12, 'Введите корректный номер'),
			agreement: Yup.bool().oneOf([true], 'Обязательно')
		}),
		onSubmit: values => {
			axios
				.post('https://web.api-factory.ru/api/v1/feedback/', values)   
				.then(response => {
					console.log(response)
					resetForm()
					setSubmitting(false)
				})
				.catch(error => {
					console.log(error)
				})
		},
	})

	return (
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
					className={styles.form}
				>
					<div className={styles.footer_form_field}>
					<p className={styles.error}></p>
						<input
							id='name'
							onChange={handleChange}
							value={values.name}
							type='text'
							placeholder='Имя'
						/>
					</div>
					<div className={styles.footer_form_field}>
						{!!errors.phone &&
							<div 
								className={`mt-[10px] ${styles.error}`} 
								data-tooltip-id="tooltip" 
								data-tooltip-content={errors.phone}
								data-tooltip-place="top"
							>
								<GoAlertFill />
								<Tooltip id="tooltip" />
							</div>
						}
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
						{!!errors.agreement && 
							<div
								className={`mt-[-1px] ${styles.error}`}
								data-tooltip-id="tooltip" 
								data-tooltip-content={errors.agreement}
								data-tooltip-place="top"
							>
								<GoAlertFill />
								<Tooltip id="tooltip" />
							</div>
						}
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
	)
}

export default FooterForm
