import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wave } from '../../components/wave/Wave.jsx'
import '../../scripts/scrollHandler.js'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'
import HomeLayout from '../Home/HomeLayout.tsx'
import { services_db } from './Services.data.ts'

const ServicesLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	const { serviceName } = useParams()

	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])

	if (!serviceName)
		return <></>

	return (
		<>
		<HomeLayout>
			<div className={app.hero}>
					{(!!isDesktop && <Wave />) || (
						<video autoPlay muted loop playsInline>
							{/* <source src='/heroBackground.webm' type='video/webm' /> */}
							<source src='/heroBackground.mp4' type='video/mp4' />
						</video>
					)}
					<div className={app.hero_text__container}>
							<h1 className={`${app.hero_textTitle} w-[100%] mx-auto`}>
								{services_db[serviceName].hero_title}
							</h1>
					</div>
				</div>
				{ children }
		</HomeLayout>
		</>
	)
}

export default ServicesLayout