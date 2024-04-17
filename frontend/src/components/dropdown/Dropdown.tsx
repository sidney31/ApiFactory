import { useState } from 'react'
import styles from './Dropdown.module.scss'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface Props {
	title: string
	items: { text: string; link: string }[]
}

// todo: доработать состояние множеств элементов
const Dropdown = (props: Props) => {
	const [dropdownState, setDropdownState] = useState(false)
	return (
		<div
			onClick={() => {
				setDropdownState(!dropdownState)
			}}
			className={styles.dropdown}
		>
			<p className={styles.dropdown_title}>
				{props.title}
				{(dropdownState && <IoIosArrowUp />) || <IoIosArrowDown />}
			</p>
			<div
				className={`${styles.dropdown_items} ${
					(dropdownState && `${styles.open}`) || `${styles.hide}`
				}`}
			>
				{props.items.map(item => (
					<Link to={item.link} key={item.text} className={styles.dropdown_item}>
						{item.text}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Dropdown
