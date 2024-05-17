import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import OutlineBlock from '../../../../components/outlineBlock/OutlineBlock'
import ResumeForm from '../../../../components/resumeForm/ResumeForm'
import HomeLayout from '../../HomeLayout'
import common from '../common.module.scss'
import styles from './Vacancy.module.scss'

const Vacancy = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<HomeLayout>
			<div data-aos='fade-up' className={`container-lg ${common.content_wrapper}`}>
				<h3 className={common.page_title}>Вакансии</h3>
				<div className={common.blocks_wrapper}>
					<OutlineBlock className={common.block}>
						<p>
							<strong>Присоединяйтесь к нашей команде!</strong>
							<br />
							Мы постоянно ищем талантливых специалистов в области информационной безопасности, информационных технологий и разработки.
						</p>
					</OutlineBlock>
					<OutlineBlock className={common.block}>
						<p>
							Если Вы готовы к вызовам в динамичной индустрии и стремитесь к профессиональному росту, мы ждем именно Вас. Просмотрите наши вакансии ниже и отправьте нам свое резюме, чтобы присоединиться к нашей космической команде!
						</p>
					</OutlineBlock>
					<div className={`${common.block} ${styles.block}`}>
						<ResumeForm/>
						<OutlineBlock>
							<p>
								Чтобы подать заявку на вакансию, пожалуйста, <strong>заполните форму</strong>, предоставив нам контактную информацию и краткое описание Вашего опыта и квалификаций. Также, прикрепите ваше резюме, чтобы мы могли более детально оценить вашу кандидатуру. 
							</p>
							<br />
							<p>
								Мы рассмотрим Ваше резюме с большим вниманием и свяжемся с вами в ближайшее время для обсуждения возможностей сотрудничества.
							</p>
					</OutlineBlock>
					</div>
				</div>
			</div>
		</HomeLayout>
	)
}

export default Vacancy