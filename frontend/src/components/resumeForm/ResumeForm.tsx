import axios from 'axios'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'
import 'react-phone-number-input/style.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import OutlineBlock from '../outlineBlock/OutlineBlock'
import styles from './ResumeForm.module.scss'

const ResumeForm = () => {
	const [fileName, setFileName] = useState('');

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
		.post('https://technocat.team/api/v1/resume/', 
			data,
			{ withCredentials: false }
		)   
		.then(response => {
			console.log(response)
			toast('Заявление успешно отправлено!', {
				type: 'info'
			})
			reset()
		})
		.catch(error => {
			console.log(error)
			toast('Произошла ошибка, попробуйте позже!', {
				type: 'error'
			})
		})
		reset()
		setFileName('')
	}

	return (
		<OutlineBlock className={styles.form_wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.input_wrapper}>
					<input
						{...register('name', {
							required: 'Имя обязательно к заполнению!',
						})}
						placeholder=' '
					/>
					<p className={styles.placeholder}>ФИО</p>
					<span className='hidden'>
						{errors?.name && toast(errors?.name?.message as string || 'Ошибка!', {type: 'error'})}
					</span>
				</div> 
				<div className={styles.input_wrapper}>
					<textarea maxLength={100} placeholder=' ' rows={4} 
						{...register('about', {
							required: 'Укажите информацию о себе!',
						})}/>
					<p className={styles.placeholder}>О себе</p>
					<span className='hidden'>
						{errors?.about && toast(errors?.about?.message as string || 'Ошибка!', {type: 'error'})}
					</span>
				</div>
				<div className={styles.input_wrapper}>
					<PhoneInput
						{...register('phone', {
							required: 'Номер телефона обязателен!',
						})}
						onChange={()=>{}}
						labels={ru}
						international
						defaultCountry='RU'
					/>
					<span className='hidden'>
						{errors?.phone && toast(errors?.phone?.message as string || 'Ошибка!', {type: 'error'})}
					</span>
				</div>
				<div className={`${styles.input_wrapper} ${styles.input_area}`}>
					<input
						id='file_input'
						className={styles.file_input}
						type='file'
						{...register('resume', {
							required: 'Прикрепите резюме!',
						})}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							const SPLIT_PATH = event.target.value.split('\\')
							setFileName(SPLIT_PATH[SPLIT_PATH.length - 1])
						}}
					/>
					<label htmlFor="file_input" className={styles.file_input_label}>
						<img src="/svg/file.svg" alt="Прикрепите файл" />
						<p>{fileName}</p>
					</label>
					<p className={styles.placeholder}>Резюме</p>
					<span className='hidden'>
						{errors?.resume && toast(errors?.resume?.message as string || 'Ошибка!', {type: 'error'})}
					</span>
				</div>
				<button>Отправить</button>
			</form>
		</OutlineBlock>
	)
}

export default ResumeForm