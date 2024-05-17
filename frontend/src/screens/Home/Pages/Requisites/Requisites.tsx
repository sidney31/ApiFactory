import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import OutlineBlock from '../../../../components/outlineBlock/OutlineBlock'
import HomeLayout from '../../HomeLayout'
import common from '../common.module.scss'
import { RequisitesData } from './Requisites.data'

const Requisites = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, delay: 100 })
	}, [])
	return (
		<HomeLayout>
			<div data-aos='fade-up' className={`container-lg ${common.content_wrapper}`}>
				<h3 className={common.page_title}>Реквизиты</h3>
				<OutlineBlock className={common.content_block}>
					<h4 className={common.block_title}>{RequisitesData.title}</h4>
					<div className={common.table_wrapper}>
						{RequisitesData.data.map((requisite) => (
							<div className={common.table_item}>
								<p className={common.table_item_title}>{requisite.title}</p>
								<p className={common.table_item_value}>{requisite.value}</p>
							</div>
							))}
					</div>
				</OutlineBlock>
			</div>
		</HomeLayout>
	)
}

export default Requisites