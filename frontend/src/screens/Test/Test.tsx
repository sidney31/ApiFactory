import Dropdown from '../../components/dropdown/Dropdown'

const Test = () => {
	return (
		<div className='flex flex-col'>
			<Dropdown
				title={'Список'}
				items={[
					{ text: 'item1', link: 'link1' },
					{ text: 'item2', link: 'link2' },
					{ text: 'item3', link: 'link3' },
					{ text: 'item4', link: 'link4' },
					{ text: 'item5', link: 'link5' },
				]}
			/>
			<Dropdown
				title={'Список'}
				items={[
					{ text: 'item1', link: 'link1' },
					{ text: 'item2', link: 'link2' },
					{ text: 'item3', link: 'link3' },
					{ text: 'item4', link: 'link4' },
					{ text: 'item5', link: 'link5' },
				]}
			/>
		</div>
	)
}

export default Test
