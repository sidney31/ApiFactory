import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru'
import 'react-phone-number-input/style.css'
import { Navbar, Position } from '../navbar/Navbar'
import styles from './Footer.module.scss'

export const Footer = () => {
	const NAV_LINKS = [
		{ text: 'О компании', url: '/about' },
		{ text: 'Отраслевые решения', url: '/solutions' },
		{ text: 'Услуги и цены', url: '/services_and_prices' },
		{ text: 'Заказчики', url: '/customers' },
		{ text: 'Контакты', url: '/contacts' },
	]
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={`${styles.footer_formWrapper} py-[40px]`}>
					<p className={styles.footer_formTitle}>
						Отправьте заявление, и с Вами обязательно свяжутся
					</p>
					<form>
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
			<Navbar
				nav_links={NAV_LINKS}
				position={Position.bottom}
				logo_path='/svg/logo2.svg'
				right_side={
					<div className='text-[16px] whitespace-nowrap'>
						© 2024 АПИ-ФАКТОРИ
					</div>
				}
			/>
		</footer>
	)
}
