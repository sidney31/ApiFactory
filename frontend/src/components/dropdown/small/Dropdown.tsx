import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom' 

interface IDropdownProps {
	title: ReactNode
	items: {text: string, link: string}[]
}

const Dropdown = ({title, items}: IDropdownProps) => {
	const [dropdownState, setDropdownState] = useState(false)

	return (
		<div
			onClick={() => {
				setDropdownState(!dropdownState)
			}}
			className={styles.dropdown}
		>
			<p className={styles.dropdown_title}>
				{title}
			</p>
			<div
				className={`${styles.dropdown_items} ${
					(dropdownState && `${styles.open}`) || `${styles.hide}`
				}`}
			>
				{items.map(item => (
				  <Link to={item.link} key={item.text} className={styles.dropdown_item}>
					  {item.text}
				  </Link>
				))}
			</div>
		</div>
	)
}
export default Dropdown