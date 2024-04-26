import { BsCashCoin, BsGrid, BsQuestionCircle } from 'react-icons/bs'
import { RiListSettingsLine } from 'react-icons/ri'
import { ITab } from './tab.interface'

export const tabs: ITab[] = [
	{
		icon: BsGrid, 
		link: '/account/services/', 
		name: 'services',
		title: 'Сервисы',
	},
	{
		icon: RiListSettingsLine, 
		link: '/account/management/', 
		name: 'management',
		title: 'Управление',
	},
	{
		icon: BsCashCoin, 
		link: '/account/payments/', 
		name: 'payments',
		title: 'Платежи',
	},
	{
		icon: BsQuestionCircle, 
		link: '/account/help/', 
		name: 'help',
		title: 'Помощь',
	},
]