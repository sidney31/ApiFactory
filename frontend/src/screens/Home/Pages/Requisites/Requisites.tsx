import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import OutlineBlock from '../../../../components/outlineBlock/OutlineBlock'
import HomeLayout from '../../HomeLayout'
import { RequisitesData } from './Requisites.data'
import styles from './Requisites.module.scss'

const Requisites = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<HomeLayout>
			<div data-aos='fade-up' className={`container ${styles.content_wrapper}`}>
				<h3 className={styles.page_title}>Реквизиты</h3>
				<OutlineBlock className={styles.requisites_block}>
					<h4 className={styles.block_title}>{RequisitesData.title}</h4>
					<div className={styles.table_wrapper}>
						{RequisitesData.data.map((requisite) => (
							<div className={styles.table_item}>
								<p className={styles.table_item_title}>{requisite.title}</p>
								<p className={styles.table_item_value}>{requisite.value}</p>
							</div>
							))}
					</div>
				</OutlineBlock>
			</div>
		</HomeLayout>
	)
}

export default Requisites