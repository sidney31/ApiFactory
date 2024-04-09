import { useKeycloak } from '@react-keycloak/web'
import { Link, useParams } from 'react-router-dom'
import { Contact } from '../../components/Contact.tsx'
import { QuestionBox } from '../../components/QuestionBox.tsx'
// import { VideoCard } from '../../components/VideoCard.jsx'
import { Footer } from '../../components/footer/Footer.tsx'
import { Navbar, Position } from '../../components/navbar/Navbar.tsx'
import { CardsSection } from '../../components/sections/CardsSection/CardsSection.tsx'
import { TextSection } from '../../components/sections/TextSection/TextSection.tsx'
import { TwiceSection } from '../../components/sections/TwiceSection/TwiceSection.tsx'
import { Wave } from '../../components/wave/Wave.jsx'
import '../../scripts/scrollHandler.js'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'
import * as db from './db.js'
import { services_db } from './services_db.ts'

function Home() {
	const { serviceName } = useParams()
	const { keycloak } = useKeycloak()
	return (
		<>
			<Navbar
				nav_links={db.NAV_LINKS}
				position={Position.top}
				logo_path='/svg/logo.svg'
				right_side={
					<>
						{(!!keycloak.authenticated && (
							<Link to='/account'>
								<button>Личный кабинет</button>
							</Link>
						)) || (
							<button onClick={() => keycloak.login({redirectUri: `${location.href}/account`})}>
								Вход для клиентов
							</button>
						)}
					</>
				}
			/>
			<main>
				<div className={app.hero}>
					<Wave />
					<div className={app.hero_text__container}>
						{!!serviceName ? (
							<h1 className={`${app.hero_textTitle} w-[100%]`}>
								{services_db[serviceName].hero_title}
							</h1>
						) : (
							<>
								<h1 className={app.hero_textTitle}>
									Cоздаем пространство эффективности вашего бизнеса
								</h1>
								<p className={app.hero_textSubtitle}>
									Мы ведущая компания по аутсорсингу IT, специализирующаяся на
									предоставлении индивидуальных решений, помогающих бизнесу
									процветать в цифровую эпоху.
									<button className={app.hero_textSubtitle_button}>
										Заказать обратный звонок
									</button>
								</p>
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
						<h1 className='text-center font-semibold text-[36px] mb-[44px]'>
							Различные отраслевые решения
						</h1>
						<div className='flex justify-between'>
							{db.SOLUTIONS_CARDS.map(card => (
								<div key={card.image_path} className='w-[200px] flex flex-col'>
									<img
										className='h-[50px] mb-[28px]'
										src={card.image_path}
										alt={card.title}
									/>
									<p className='font-semibold text-[20px] text-center'>
										{card.title}
									</p>
								</div>
							))}
						</div>
						<h1 className='mt-[60px] text-center font-medium text-[24px] mb-[44px]'>
							Нам доверяют ведущие компании отрасли по всему миру
						</h1>
						<div className='flex justify-between'>
							{db.CUSTOMERS_CARDS.map(card => (
								<>
										<img
									  key={card.image_path}
									  src={card.image_path}
									  alt={card.title}
									  />
								</>
							))}
						</div>
					</div>
				</section>
				<section className='bg-[#f5f5f5]'>
					<div className='container'>
						<h1 className='text-center font-semibold text-[36px] mb-[36px]'>
							Часто задаваемые вопросы
						</h1>
						{db.FAQ.map(iterator => (
							<QuestionBox
								key={iterator.question}
								question={iterator.question}
								answer={iterator.answer}
							/>
						))}
						<div className='text-center'>
							<h1 className='font-semibold text-[32px] mt-[38px]'>
								Остались вопросы?
							</h1>
							<p className='text-[16px] mt-[12px]'>
								Свяжитесь с нами и получите больше информации
							</p>
							<button className='mt-[38px]'>Заказать обратный звонок</button>
						</div>
					</div>
				</section>
				<section>
					<div className='container'>
						<div className='flex flex-row justify-between'>
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
			<Footer />
		</>
	)
}

export default Home
