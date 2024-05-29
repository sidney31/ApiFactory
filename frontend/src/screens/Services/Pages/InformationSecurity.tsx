import { TwiceSection } from '../../../components/sections/TwiceSection/TwiceSection'
import HomeContent from '../../Home/HomeContent/HomeContent'

const InformationSecurity = () => {
	return (
		<>
			<div className='text-[24px]'>
				<TwiceSection 
					text_title="Повышайте уровень безопасности вашего бизнеса с нашими решениями"
					text_subtitle_large="В современном цифровом мире информационная безопасность важнее как никогда. Мы предлагаем полный спектр услуг для защиты ваших данных и ИТ-инфраструктуры, обеспечивая их надежную безопасность."
					image_path='/img/10.jpg'
				/>
				<section className='py-0'>
					<div className='container'>
						<p> Мы предлагаем комплексные услуги по управлению информационной безопасностью, чтобы защитить ваши данные и ИТ-инфраструктуру от киберугроз и утечек информации. Наши услуги включают: </p>
						<ul className='list-none'>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Мониторинг и анализ событий безопасности, быстрая реакция на подтвержденные инциденты: </span> Круглосуточное наблюдение за событиями в вашей сети с оперативным реагированием на выявленные угрозы.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Проактивное предотвращение угроз безопасности: </span> Внедрение и использование передовых технологий и методик для предотвращения потенциальных атак до их возникновения.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Проверка сетей компании на наличие уязвимостей (black box, white box) и рекомендации по их устранению: </span> Комплексные тесты безопасности для выявления слабых мест в ваших системах и предложения по их устранению.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Противодействие утечкам чувствительной информации: </span> Меры и технологии для защиты конфиденциальных данных от несанкционированного доступа и утечек.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Подготовка отчетов об актуальном состоянии ИТ инфраструктуры, зарегистрированных инцидентах и действиях потенциальных злоумышленников: </span> Регулярные отчеты для полной информированности о состоянии вашей безопасности.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Постоянное совершенствование системы безопасности, с учетом актуальных угроз безопасности и оптимизации процессов**: </span> Постоянное обновление и улучшение систем защиты в соответствии с последними угрозами и тенденциями.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Повышение осведомленности пользователей: </span> Обучение сотрудников основам информационной безопасности для минимизации человеческого фактора в инцидентах.
							</li>
							<li className="mt-[20px]"> 
								- <span className='font-bold'> Выполнение требований законодательства РФ (152-ФЗ, 98-ФЗ, 187-ФЗ): </span> Соответствие всем необходимым нормативным требованиям и стандартам безопасности.
							</li>
						</ul>
						<p className='mt-[20px]'> Наши специалисты постоянно анализируют большие объемы информации, чтобы распознать настоящие угрозы и эффективно устранить их. Квалифицированные эксперты проводят комплекс технических услуг для противодействия киберугрозам, предотвращения утечек информации и повышения уровня защищенности ИТ-инфраструктуры заказчика. </p>
						<p className='mt-[20px]'> Доверьте безопасность своей компании профессионалам, чтобы обеспечить надежную защиту и стабильное функционирование ваших информационных систем. </p>
					</div>
				</section>
			</div>
			<HomeContent/>
		</>
	)
}

export default InformationSecurity