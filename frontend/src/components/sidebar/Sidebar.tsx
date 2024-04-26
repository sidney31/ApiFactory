import { useEffect, useState } from 'react'
import { LuArrowLeftFromLine, LuArrowRightFromLine } from 'react-icons/lu'
import { Link, useParams } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import { tabs } from './menu.data.ts'

const Sidebar = () => {
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	const [minimize, setMinimize] = useState(isDesktop)
	
	const { tabName } = useParams();
	let [activeTab, setActiveTab] = useState<string>('')

	useEffect(() => {
		setActiveTab(tabName as string || 'services')
	}, [tabName])

	return (
		<aside className={`${styles.sidebar} ${
				minimize ? styles.open : styles.minimize
			}`}
		>
			<div className={styles.sidebar_items}>
				{tabs.map((tab, index) => (
					<Link 
					to={tab.link} 
					key={index}
					className={`${styles.sidebar_item} ${activeTab == tab.name && styles.active} `}
					>
						{<tab.icon/>}
						<p className={styles.sidebar_item_name}>{tab.title}</p>
					</Link>
				))}
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
