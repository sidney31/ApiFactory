import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import OutlineBlock from '../../../../components/outlineBlock/OutlineBlock'
import HomeLayout from '../../HomeLayout'
import styles from './Requisites.module.scss'

const Vacancy = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<HomeLayout>
			<div data-aos='fade-up' className={`container ${styles.content_wrapper}`}>
				<h3 className={styles.page_title}>Реквизиты</h3>
				<OutlineBlock className={styles.requisites_block}>
				</OutlineBlock>
			</div>
		</HomeLayout>
	)
}

export default Vacancy