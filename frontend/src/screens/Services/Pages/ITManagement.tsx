import { TwiceSection } from '../../../components/sections/TwiceSection/TwiceSection'
import HomeContent from '../../Home/HomeContent/HomeContent'

const ITManagement = () => {
	return (
		<>
			<div className='text-[24px]'>
				<TwiceSection 
					text_title="Преобразуйте ваш бизнес, используя наши технологические решения."
					text_subtitle_large="Наша услуга по управлению ИТ-инфраструктурой обеспечивает надежное функционирование и развитие вашего бизнеса. Мы предлагаем полный спектр услуг: от проектирования и внедрения до обеспечения безопасности ИТ-среды. С нами ваша ИТ-инфраструктура будет готовой к вызовам современного бизнеса."
					image_path='/img/11.jpg'
					/>
				<section className='py-0'>
					<div className='container'>
						<p> Наша компания предлагает комплексные услуги по управлению ИТ-инфраструктурой, обеспечивая надежность, безопасность и доступность ваших информационных систем. Мы предоставляем: </p>
						<ul className='list-none mt-[20px]'>
							<li> 
								- <span className='font-bold'> Проектирование и построение ИТ-инфраструктуры под ключ: </span> Полный цикл разработки и реализации ИТ-решений, от анализа потребностей до ввода в эксплуатацию.
							</li>
							<li> 
								- <span className='font-bold'> Внедрение или модернизация объектов ИТ-инфраструктуры заказчика: </span> Современные технологии и методы для повышения эффективности и производительности ваших ИТ-ресурсов.
							</li>
							<li> 
								- <span className='font-bold'> Безболезненная миграция ИТ-инфраструктур: </span> Плавный переход на новые платформы и системы с минимальным простоем и рисками.
							</li>
							<li> 
								- <span className='font-bold'> Доступность ИТ-сервисов в соответствии с SLA: </span> Гарантия уровня сервиса и оперативное решение проблем в рамках соглашений о качестве обслуживания.
							</li>
							<li> 
								- <span className='font-bold'> Предоставление ИТ-сервисов в соответствии с каталогом ИТ-услуг:  </span> Широкий спектр ИТ-услуг, адаптированных под потребности вашего бизнеса.
							</li>
						</ul>
						<p className='mt-[20px]'> Мы также предлагаем внедрение систем как на базе облачных технологий (cloud), так и на локальной инфраструктуре (on-premise): </p>
						<ul className='list-none mt-[20px]'>
							<li> 
								- <span className='font-bold'> Мониторинг доступности информационных активов: </span> Полный цикл разработки и реализации ИТ-решений, от анализа потребностей до ввода в эксплуатацию.
							</li>
							<li> 
								- <span className='font-bold'> Учёт сетевого оборудования: </span> Постоянное отслеживание и анализ состояния ваших ИТ-ресурсов для предотвращения и оперативного устранения проблем.
							</li>
							<li> 
								- <span className='font-bold'> Безболезненная миграция ИТ-инфраструктур: </span> Полный контроль и учет всех компонентов вашей сети для обеспечения её надежности и безопасности.
							</li>
							<li> 
								- <span className='font-bold'> Межсетевое экранирование с сетевой защитой от атак: </span> Комплексные решения по защите от внешних угроз и несанкционированного доступа.
							</li>
							<li> 
								- <span className='font-bold'> Видеоконференцсвязь и другие услуги: </span> Внедрение и поддержка систем для эффективного взаимодействия и коммуникации внутри вашей компании.
							</li>
						</ul>
						<p className='mt-[20px]'> Все услуги предоставляются квалифицированными специалистами, обладающими богатым опытом внедрения и эксплуатации решений от множества ведущих вендоров, представленных на российском рынке. Наши эксперты помогут вам выбрать и реализовать оптимальные ИТ-решения для достижения ваших бизнес-целей.</p>
					</div>
				</section>
			</div>
			<HomeContent three={false} four={false}/>
		</>
	)
}

export default ITManagement