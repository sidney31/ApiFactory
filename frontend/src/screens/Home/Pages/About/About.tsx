import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import OutlineBlock from '../../../../components/outlineBlock/OutlineBlock'
import HomeLayout from '../../HomeLayout'
import styles from './About.module.scss'

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<HomeLayout>
			<div data-aos='fade-up' className={`container-lg ${styles.content_wrapper}`}>
				<h3 className={styles.page_title}>О нас</h3>
				<OutlineBlock className={styles.about_block}>
					<p>
						<strong>
							Компания «ТехноКот» 
						</strong>
						- это Центр поддержки ИТ инфраструктуры и обеспечения
						информационной безопасности.
					</p>
					<br />
					<p>
						Специалисты организации проектируют и внедряют различные инфраструктурные
						решения, обеспечивают поддержку высокого уровня информационной безопасности и доступности ИТ-инфраструктуры, в соответствии с SLA. Самостоятельно выполняют работы по монтажу слаботочных сетей связи.
					</p>
				</OutlineBlock>
			</div>
		</HomeLayout>
	)
}

export default About