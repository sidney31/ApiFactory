import { useState } from 'react'
import styles from './Dropdown.module.scss'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface Props {
	title: string
	items: { text: string; link: string }[]
}

const Dropdown = (props: Props) => {
	const [dropdownState, setDropdownState] = useState(false)
	return (
		<a
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
					(dropdownState && 'flex') || 'hidden'
				}`}
			>
				{props.items.map(item => (
					<Link to={item.link} key={item.text} className={styles.dropdown_item}>
						{item.text}
					</Link>
				))}
			</div>
		</a>
	)
}

export default Dropdown
