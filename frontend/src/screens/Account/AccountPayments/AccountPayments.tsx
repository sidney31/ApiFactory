import { FaPen } from "react-icons/fa"
import { IoHelpCircleOutline } from "react-icons/io5"
import OutlineBlock from '../../../components/outlineBlock/OutlineBlock'
import OutlineInput from '../../../components/outlineInput/OutlineInput'
import styles from './AccountPayments.module.scss'


const AccountPayments = () => {
	return (
		<>
			<h3 className={styles.page_title}>Платежи</h3>
			<div className={styles.cards_wrapper}>
				<OutlineBlock className={styles.block}>
					<div className={styles.blockTitle}>
						<p className={styles.title_text}>Реквизиты</p>
						<FaPen className='fill-[#36332F50] h-[14px]'/>
					</div>
					<div className={styles.formWrapper}>
						<OutlineInput value='ООО "Тест"' placeholder='Название' disabled={true}></OutlineInput>
						<OutlineInput value='001122334455' placeholder='ИНН' disabled={true}></OutlineInput>
						<OutlineInput value='001122334455' placeholder='КПП' disabled={true}></OutlineInput>
					</div>
				</OutlineBlock>
 
				<OutlineBlock className={styles.block}>
					<div className={styles.blockTitle}>
						<p className={styles.title_text}>ЭДО</p>
						<IoHelpCircleOutline className='fill-[#36332F50] w-[20px] h-[20px]'/>
					</div>
					<div className={styles.formWrapper}>
					</div>
				</OutlineBlock>

				<OutlineBlock className={`${styles.block} w-full h-[444px]`}>
					<div className={styles.blockTitle}>
						<p className={styles.title_text}>История платежей</p>
					</div>
				</OutlineBlock>
			</div>
		</>
	)
}

export default AccountPayments
