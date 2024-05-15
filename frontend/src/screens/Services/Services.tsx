import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TwiceSection } from '../../components/sections/TwiceSection/TwiceSection.tsx'
import { Wave } from '../../components/wave/Wave.jsx'
import '../../scripts/scrollHandler.js'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'
import HomeLayout from '../Home/HomeLayout.tsx'
import { services_db } from './Services.data.ts'

const Services = () => {
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	const { serviceName } = useParams()

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	if (!serviceName)
		return <></>

	return (
		<HomeLayout>
			<div className={app.hero}>
					{(!!isDesktop && <Wave />) || (
						<video autoPlay muted loop playsInline>
							{/* <source src='/heroBackground.webm' type='video/webm' /> */}
							<source src='/heroBackground.mp4' type='video/mp4' />
						</video>
					)}
					<div className={app.hero_text__container}>
							<h2 className={`${app.hero_textTitle} w-[100%]`}>
								{services_db[serviceName].hero_title}
							</h2>
					</div>
				</div>
				<TwiceSection
						text_title={services_db[serviceName].section_title}
						text_subtitle_large={services_db[serviceName].section_subtitle}
						text_extra={services_db[serviceName].section_text}
						image_path={services_db[serviceName].section_imagePath}
				/>
		</HomeLayout>
	)
}

export default Services