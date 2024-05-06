import axios from 'axios'
import { FieldValues, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'
import 'react-phone-number-input/style.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './FooterForm.module.scss'

const FooterForm = () => {
	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
		reset,
	} = useForm({
		mode: "onBlur"
	})

	const onSubmit = (data: FieldValues) => {
		axios
			.post('https://web.api-factory.ru/api/v1/feedback/', 
				data, 
				{
					headers: {"Access-Control-Allow-Origin": "*"}
				}
			)   
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		reset()
		toast('Заявление успешно отправлено!', {
			type: 'info'
		})
	}

	return (
		<div className='container'>
			<div className={`${styles.footer_formWrapper} py-[40px]`}>
				<h2 data-aos='fade-up-right' className={styles.footer_formTitle}>
					Отправьте заявление, и с Вами обязательно свяжутся
				</h2>
				<form
					data-aos='fade-up-left'
					id='feedback_form'
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className={styles.footer_form_field}>
						<input
							{...register('name', {
								required: 'Имя обязательно к заполнению!',
							})}
							placeholder='Имя'
						/>
						{errors?.name && toast(errors?.name?.message as string || 'Ошибка!', {type: 'error'})}
					</div>
					<div className={styles.footer_form_field}>
						<PhoneInput
							{...register('phone', {
								required: 'Номер телефона обязателен!',
							})}
							onChange={()=>{}}
							className={styles.footer_phoneInput}
							labels={ru}
							international
							defaultCountry='RU'
							placeholder='+7 000 000 00 00'
						/>
						{errors?.phone && toast(errors?.phone?.message as string || 'Ошибка!', {type: 'error'})}
					</div>
					<div className={styles.footer_form_field}>
						<input
							{...register('question', {
								required: 'Вопрос обязателен к заполнению!',
							})}
							placeholder='Вопрос'
						/>
						{errors?.question && toast(errors?.question?.message as string || 'Ошибка!', {type: 'error'})}
					</div>
					<div
						className={`${styles.footer_form_field} flex flex-row gap-[1em]`}
					>
						<input
							{...register('agreement', {
								required: 'Согласие обязательно!',
							})}
							type='checkbox' 
							id='agreement'
						/>
						<label className={styles.footer_form_label} htmlFor='agreement'>
							Нажимая кнопку «Отправить», я даю свое согласие на обработку
							моих персональных данных, в соответствии с Федеральным законом
							от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях
							и для целей, определенных в Согласии на обработку персональных
							данных
						</label>
						{errors?.agreement && toast(errors?.agreement?.message as string || 'Ошибка!', {type: 'error'})}
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
