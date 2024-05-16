import OutlineBlock from '../outlineBlock/OutlineBlock'
import styles from './ResumeForm.module.scss'

const ResumeForm = () => {
	return (
		<OutlineBlock className={styles.form_wrapper}>
			<form action="">
				<div className={styles.input_wrapper}>
					<input placeholder=' ' id="name"/>
					<p className={styles.placeholder}>ФИО</p>
				</div>
				<div className={styles.input_wrapper}>
					<textarea maxLength={100} placeholder=' ' rows={4} id="about"/>
					<p className={styles.placeholder}>О себе</p>
				</div>
				<div className={styles.input_wrapper}>
					<input placeholder=' ' id="phone" type='tel'/>
					<p className={styles.placeholder}>Контактный телефон</p>
				</div>
				<div className={styles.input_wrapper}>
					<input placeholder=' ' id="resume" type='file'/>
					<p className={styles.placeholder}>Резюме</p>
				</div>
				<button>Отправить</button>
			</form>
		</OutlineBlock>
	)
}

export default ResumeForm