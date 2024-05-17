import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef } from 'react'
import { Footer } from '../../../components/footer/Footer.tsx'
import FooterForm from '../../../components/footer/FooterForm.tsx'
import { QuestionBox } from '../../../components/questions/QuestionBox.tsx'
import { CardsSection } from '../../../components/sections/CardsSection/CardsSection.tsx'
import { TextSection } from '../../../components/sections/TextSection/TextSection.tsx'
import { TwiceSection } from '../../../components/sections/TwiceSection/TwiceSection.tsx'
import '../../../scripts/scrollHandler.js'
import app from '../../../styles/app.module.scss'
import '../../../styles/common.scss'
import * as db from '../db.js'

const HomeContent = (props: IHomeContent) => {
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
		<>
			{ props.one !== false && 
				<TwiceSection
				text_small={db.OUTSOURCING_BLOCK.text_small}
				text_title={db.OUTSOURCING_BLOCK.text_title}
				text_subtitle={db.OUTSOURCING_BLOCK.text_subtitle}
				text_subtitle_button={db.OUTSOURCING_BLOCK.text_subtitle_button}
				image_path={db.OUTSOURCING_BLOCK.image_path}
				/>
			}
			{ props.two !== false && 
				<CardsSection
					className='bg-[#f5f5f5]'
					titleClassName='me-[50px]'
					text_title={db.SERVICE_BLOCK.text_title}
					text_subtitle={db.SERVICE_BLOCK.text_subtitle}
					cards={db.SERVICE_BLOCK.cards}
				/>
			}
			{ props.three !== false && 
				<TextSection
					text_small={db.TEXT_SECTION_BLOCK.text_small}
					text_title={db.TEXT_SECTION_BLOCK.text_title}
					text_content={db.TEXT_SECTION_BLOCK.text_content}
					button_text={db.TEXT_SECTION_BLOCK.button_text}
				/>
			}
			{ props.four !== false && 
				<CardsSection
					titleClassName='me-[50px]'
					className='bg-[white]'
					text_title={db.SECURITY_BLOCK.text_title}
					text_subtitle={db.SECURITY_BLOCK.text_subtitle}
					cards={db.SECURITY_BLOCK.cards}
				/>
			}
			{ props.five !== false && 
				<TwiceSection
					className='bg-[#f5f5f5]'
					titleClassName='pe-[50px]'
					text_small={db.INNOVATIONS_BLOCK.text_small}
					text_title={db.INNOVATIONS_BLOCK.text_title}
					text_subtitle={db.INNOVATIONS_BLOCK.text_subtitle}
					text_subtitle_button={db.INNOVATIONS_BLOCK.text_subtitle_button}
					image_path={db.INNOVATIONS_BLOCK.image_path}
				/>
			}
			{ props.six !== false && 
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
					</div>
				</section>
			}
			{ props.seven !== false && 
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
								onClick={scrollToFeedback}
								className='mt-[38px]'
							>
								Заказать обратный звонок
							</button>
						</div>
					</div>
				</section>
			}
			{ props.eight !== false && 
				<Footer children={<FooterForm/>} reference={feedbackRef} /> 
			}
		</>
	)
}

export default HomeContent