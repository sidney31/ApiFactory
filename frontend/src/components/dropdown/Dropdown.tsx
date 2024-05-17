import { ReactNode, useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styles from './Dropdown.module.scss'

interface IDropdownProps {
	title: ReactNode
	items: { text: string; link: string }[]
	onItemClick?: () => void
}

const Dropdown = ({title, items, onItemClick}: IDropdownProps) => {
	const [dropdownState, setDropdownState] = useState(false)

	const dropdownRef = useRef(null)

	useEffect(() => {
		window.addEventListener('click', (event) => {
			if (event.target != dropdownRef.current)
				setDropdownState(false)
		})
	}, [])
	return (
		<div
			onClick={() => {
				setDropdownState(!dropdownState)
			}}
			className={styles.dropdown}
			>
			<p className={styles.dropdown_title}
				ref={dropdownRef}
			>
				{title}
				{(dropdownState && <IoIosArrowUp />) || <IoIosArrowDown />}
			</p>
			<div
				className={`${styles.dropdown_items} ${
					(dropdownState && `${styles.open}`) || `${styles.hide}`
				}`}
			>
				{items.map(item => (
					<Link to={item.link} key={item.text} className={styles.dropdown_item} onClick={onItemClick}>
						{item.text}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Dropdown
