import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Wave } from '../../components/wave/Wave'
import '../../scripts/scrollHandler.js'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'
import HomeContent from './HomeContent/HomeContent.js'
import HomeLayout from './HomeLayout.js'

const Home = () => {
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	const scrollToFeedback = () => {
		window.scroll({
			top: document.body.scrollHeight,
			left: 0,
			behavior: 'smooth'
		});
	}

	return (
		<HomeLayout>
			<div className={app.hero}>
				{(!!isDesktop && <Wave />) || (
					<video autoPlay muted loop>
						{/* <source src='/heroBackground.webm' type='video/webm' /> */}
						<source src='/heroBackground.mp4' type='video/mp4' />
					</video>
				)}
				<div className={app.hero_text__container}>
					<h1
						data-aos='fade-right'
						data-aos-delay='300'
						className={app.hero_textTitle}
					>
						Cоздаем пространство эффективности вашего бизнеса
					</h1>
					<h4
						data-aos='fade-left'
						data-aos-delay='300'
						className={app.hero_textSubtitle}
					>
						Мы ведущая компания по аутсорсингу IT, специализирующаяся на
						предоставлении индивидуальных решений, помогающих бизнесу
						процветать в цифровую эпоху.
						<br />
						<button
							onClick={scrollToFeedback}
							className={app.hero_textSubtitle_button}
						>
							Заказать обратный звонок
						</button>
					</h4>
				</div>
			</div>
			<HomeContent/>
		</HomeLayout>
	)
}

export default Home