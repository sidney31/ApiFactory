import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import OutlineBlock from '../../../../components/outlineBlock/OutlineBlock'
import ResumeForm from '../../../../components/resumeForm/ResumeForm'
import HomeLayout from '../../HomeLayout'
import common from '../common.module.scss'
import styles from './Internship.module.scss'

const Internship = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<HomeLayout>
			<div data-aos='fade-up' className={`container-lg ${common.content_wrapper}`}>
				<h3 className={common.page_title}>Стажировка</h3>
				<div className={common.blocks_wrapper}>
					<OutlineBlock className={common.block}>
						<p>
							<strong> Присоединяйтесь к нашей команде </strong> – здесь вы найдете <strong>не только работу </strong>, но и <strong> возможность </strong> стать частью динамичного сообщества профессионалов в области информационных технологий.
						</p>
					</OutlineBlock>
					<OutlineBlock className={common.block}>
						<p>
							<strong> Программа 'Профессионалитет' </strong> - это уникальная возможность для студентов и молодых специалистов в области информационных технологий, информационной безопасности и разработки. Мы приглашаем студентов техникумов и вузов, а также всех, кто стремится обрести опыт и развиться в инновационной среде. Наши специалисты готовы делиться своими знаниями, обучая и вдохновляя вас на пути к успеху. 
						</p>
					</OutlineBlock>
					<div className={`${common.block} ${styles.block}`}>
						<ResumeForm/>
						<OutlineBlock>
							<p>
								<strong> Заполните форму, чтобы подать заявку на стажировку. </strong>
							</p>
							<br />
							<p>
								Прикрепите ваше резюме и краткое сопроводительное письмо, чтобы мы могли лучше понять ваши интересы и цели. 
							</p>
							<br />
							<p>
								Наша команда ждет вас, чтобы помочь вам раскрыть ваш потенциал и достичь новых высот в вашей карьере!
							</p>
					</OutlineBlock>
					</div>
				</div>
			</div>
		</HomeLayout>
	)
}

export default Internship