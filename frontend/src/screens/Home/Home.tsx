import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from 'react'
import { TwiceSection } from '../../components/sections/TwiceSection/TwiceSection'
import { Wave } from '../../components/wave/Wave'
import '../../scripts/scrollHandler.js'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'
import HomeContent from './HomeContent.js'
import HomeLayout from './HomeLayout.js'
import * as db from './db.js'

const Home = () => {
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	const feedbackRef = useRef<HTMLDivElement>(null)
	
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	const scrollToFeedback = () => {
		scrollTo({
			behavior: 'smooth',
			top: feedbackRef.current?.offsetTop,
		})
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
			<TwiceSection
				text_small={db.OUTSOURCING_BLOCK.text_small}
				text_title={db.OUTSOURCING_BLOCK.text_title}
				text_subtitle={db.OUTSOURCING_BLOCK.text_subtitle}
				text_subtitle_button={db.OUTSOURCING_BLOCK.text_subtitle_button}
				image_path={db.OUTSOURCING_BLOCK.image_path}
			/>
			<HomeContent/>
		</HomeLayout>
	)
}

export default Home