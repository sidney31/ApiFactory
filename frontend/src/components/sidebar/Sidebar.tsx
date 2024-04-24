import { BsCashCoin, BsGrid, BsQuestionCircle } from 'react-icons/bs'
import { LuArrowLeftFromLine, LuArrowRightFromLine } from 'react-icons/lu'
import { RiListSettingsLine } from 'react-icons/ri'

import { useState } from 'react'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const [minimize, setMinimize] = useState(false)

	return (
		<aside
			className={`${styles.sidebar} ${
				minimize ? styles.open : styles.minimize
			}`}
		>
			<div className={styles.sidebar_items}>
				<div className={`${styles.sidebar_item} ${styles.active}`}>
					<BsGrid />
					<p className={styles.sidebar_item_name}>Сервисы</p>
				</div>
				<div className={styles.sidebar_item}>
					<RiListSettingsLine />
					<p className={styles.sidebar_item_name}>Управление</p>
				</div>
				<div className={styles.sidebar_item}>
					<BsCashCoin />
					<p className={styles.sidebar_item_name}>Платежи</p>
				</div>
				<div className={styles.sidebar_item}>
					<BsQuestionCircle />
					<p className={styles.sidebar_item_name}>Помощь</p>
				</div>
			</div>

			<a
				className={styles.sidebar_minimize_button_wrapper}
				onClick={() => setMinimize(!minimize)}
			>
				<span className={styles.sidebar_minimize_button}>
					{(minimize && <LuArrowLeftFromLine />) || <LuArrowRightFromLine />}
				</span>
			</a>
		</aside>
	)
}

export default Sidebar
