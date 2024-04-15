import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

interface Props {
	reference?: React.RefObject<HTMLDivElement>
}

export const Footer = (props: Props) => {
	// const NAV_LINKS = [
	// 	{ title: 'О компании', url: '/about' },
	// 	{ title: 'Отраслевые решения', url: '/solutions' },
	// 	{ title: 'Услуги и цены', url: '/services_and_prices' },
	// 	{ title: 'Заказчики', url: '/customers' },
	// 	{ title: 'Контакты', url: '/contacts' },
	// ]
	return (
		<footer ref={props.reference} className={styles.footer}>
			<div className='container'>
				<div className={`${styles.footer_formWrapper} py-[40px]`}>
					<h2 className={styles.footer_formTitle}>
						Отправьте заявление, и с Вами обязательно свяжутся
					</h2>
					<form id='feedback_form'>
						<div className={styles.footer_form_field}>
							<input type='text' placeholder='Имя' />
						</div>
						<div className={styles.footer_form_field}>
							<PhoneInput
								className={styles.footer_phoneInput}
								labels={ru}
								international
								defaultCountry='RU'
								countryCallingCodeEditable={false}
								onChange={() => {}}
							/>
						</div>
						<div className={styles.footer_form_field}>
							<input type='text' placeholder='Вопрос' />
						</div>
						<div
							className={`${styles.footer_form_field} flex flex-row gap-[1em]`}
						>
							<input id='agreement' type='checkbox' />
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
