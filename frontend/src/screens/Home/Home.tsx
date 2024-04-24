import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Contact } from '../../components/contact/Contact.tsx'
import { Footer } from '../../components/footer/Footer.tsx'
import FooterForm from '../../components/footer/FooterForm.tsx'
import { Navbar } from '../../components/navbar/Navbar.tsx'
import { QuestionBox } from '../../components/questions/QuestionBox.tsx'
import { CardsSection } from '../../components/sections/CardsSection/CardsSection.tsx'
import { TextSection } from '../../components/sections/TextSection/TextSection.tsx'
import { TwiceSection } from '../../components/sections/TwiceSection/TwiceSection.tsx'
import VideoBlock from '../../components/videoBlock/VideoBlock.tsx'
import { Wave } from '../../components/wave/Wave.jsx'
import '../../scripts/scrollHandler.js'
import UserService from '../../services/UserService.ts'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'
import * as db from '../Account/db.js'
import { services_db } from './services_db.ts'


function Home() {
	const { serviceName } = useParams()
	const feedbackRef = useRef<HTMLDivElement>(null)
	
	const isDesktop = window.matchMedia('(min-width: 1000px)').matches
	
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	
	return (
		<>
			<Navbar
				nav_links={db.NAV_LINKS}
				logo_path='/tehnocat.svg'
				header_action={
					<>	
						<Link to='/account'>
							<button>
								{UserService.isAuth() &&
									'Личный кабинет' || 'Вход для клиентов'
								}
							</button>
						</Link>
					</>
				}
			/>
			<main>
				<div className={app.hero}>
					{(!!isDesktop && <Wave />) || (
						<video autoPlay muted loop>
							<source src='/heroBackground.webm' type='video/webm' />
							<source src='/heroBackground.mp4' type='video/mp4' />
						</video>
					)}
					<div className={app.hero_text__container}>
						{!!serviceName ? (
							<h2 className={`${app.hero_textTitle} w-[100%]`}>
								{services_db[serviceName].hero_title}
							</h2>
						) : (
							<>
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
										onClick={() =>
											scrollTo({
												top: feedbackRef.current?.getBoundingClientRect().top,
												left: 0,
												behavior: 'smooth',
											})
										}
										className={app.hero_textSubtitle_button}
									>
										Заказать обратный звонок
									</button>
								</h4>
							</>
						)}
					</div>
				</div>
				{!!serviceName ? (
					<TwiceSection
						text_title={services_db[serviceName].section_title}
						text_subtitle_large={services_db[serviceName].section_subtitle}
						text_extra={services_db[serviceName].section_text}
						image_path={services_db[serviceName].section_imagePath}
					/>
				) : (
					<TwiceSection
						text_small={db.OUTSOURCING_BLOCK.text_small}
						text_title={db.OUTSOURCING_BLOCK.text_title}
						text_subtitle={db.OUTSOURCING_BLOCK.text_subtitle}
						text_subtitle_button={db.OUTSOURCING_BLOCK.text_subtitle_button}
						image_path={db.OUTSOURCING_BLOCK.image_path}
					/>
				)}
				<CardsSection
					className='bg-[#f5f5f5]'
					titleClassName='me-[50px]'
					text_title={db.SERVICE_BLOCK.text_title}
					text_subtitle={db.SERVICE_BLOCK.text_subtitle}
					cards={db.SERVICE_BLOCK.cards}
				/>
				<TextSection
					text_small={db.TEXT_SECTION_BLOCK.text_small}
					text_title={db.TEXT_SECTION_BLOCK.text_title}
					text_content={db.TEXT_SECTION_BLOCK.text_content}
					button_text={db.TEXT_SECTION_BLOCK.button_text}
				/>
				<CardsSection
					titleClassName='me-[50px]'
					className='bg-[white]'
					text_title={db.SECURITY_BLOCK.text_title}
					text_subtitle={db.SECURITY_BLOCK.text_subtitle}
					cards={db.SECURITY_BLOCK.cards}
				/>
				<TwiceSection
					className='bg-[#f5f5f5]'
					titleClassName='pe-[50px]'
					text_small={db.INNOVATIONS_BLOCK.text_small}
					text_title={db.INNOVATIONS_BLOCK.text_title}
					text_subtitle={db.INNOVATIONS_BLOCK.text_subtitle}
					text_subtitle_button={db.INNOVATIONS_BLOCK.text_subtitle_button}
					image_path={db.INNOVATIONS_BLOCK.image_path}
				/>
				<section>
					<div className='container'>
						<h2
							data-aos='fade-up'
							className='text-center font-semibold text-[36px] mb-[44px]'
						>
							Различные отраслевые решения
						</h2>
						<div data-aos='fade-up' className={app.card_wrapper}>
							{db.SOLUTIONS_CARDS.map(card => (
								<div key={card.image_path} className='w-[200px] flex flex-col'>
									<img
										className='h-[50px] mb-[28px]'
										src={card.image_path}
										alt={card.title}
									/>
									<h5 className='font-semibold text-[20px] text-center'>
										{card.title}
									</h5>
								</div>
							))}
						</div>
						<h2
							data-aos='fade-up'
							className='mt-[60px] text-center font-medium text-[24px] mb-[44px]'
						>
							Нам доверяют ведущие компании отрасли по всему миру
						</h2>
						<div data-aos='fade-up' className={app.card_wrapper}>
							{db.CUSTOMERS_CARDS.map((card, index) => (
								<div key={index}>
									{(card.image_path && (
										<img src={card.image_path} alt={card.title} />
									)) ||
										(card.video_path && <VideoBlock src={card.video_path} />)}
								</div>
							))}
						</div>
					</div>
				</section>
				<section className='bg-[#f5f5f5]'>
					<div className='container'>
						<h2
							data-aos='fade-down'
							className='text-center font-semibold text-[36px] mb-[36px]'
						>
							Часто задаваемые вопросы
						</h2>
						{db.FAQ.map(iterator => (
							<QuestionBox
								key={iterator.question}
								question={iterator.question}
								answer={iterator.answer}
							/>
						))}
						<div className='text-center'>
							<h2
								data-aos='fade-down'
								className='font-semibold text-[32px] mt-[38px]'
							>
								Остались вопросы?
							</h2>
							<p
								data-aos='fade-up'
								data-aos-delay='200'
								className='text-[16px] mt-[12px]'
							>
								Свяжитесь с нами и получите больше информации
							</p>
							<button
								data-aos='fade-up'
								data-aos-delay='200'
								onClick={() =>
									scrollTo({
										top: feedbackRef.current?.getBoundingClientRect().bottom,
										left: 0,
										behavior: 'smooth',
									})
								}
								className='mt-[38px]'
							>
								Заказать обратный звонок
							</button>
						</div>
					</div>
				</section>
				<section>
					<div className='container'>
						<div className={app.contact_wrapper}>
							{db.CONTACTS_CARDS.map(contact => (
								<Contact
									key={contact.data}
									title={contact.title}
									subtitle={contact.subtitle}
									data={contact.data}
									type={contact.type}
								/>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer children={<FooterForm/>} reference={feedbackRef} />
		</>
	)
}

export default Home
