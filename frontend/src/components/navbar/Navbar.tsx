import { ReactNode, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { NavbarMenuItem } from './NavbarMenuItem'

export interface Props {
	className?: string
	nav_links: Array<{
		title: string
		url: string
		childs?: Array<{ title: string; url: string }>
	}>
	position: Position
	logo_path: string
	right_side: ReactNode
}

export enum Position {
	top = 'fixed',
	bottom = 'relative',
}

const setOpacity = (element: HTMLDivElement, opacity: number) => {
	element.style.backgroundColor = `rgba(255, 255, 255, ${opacity}%`
}

export const Navbar = (props: Props) => {
	const header = useRef<HTMLDivElement>(null)
	const [burgerState, setBurgerState] = useState(false)

	const headerOpacityHandler = () => {
		if (!header.current) return false
		const smooth = 5
		setOpacity(header.current, window.scrollY / smooth)
	}

	useEffect(() => {
		document.addEventListener('scroll', headerOpacityHandler)
	})

	return (
		<nav
			ref={props.position == Position.top ? header : null}
			className={`${styles.navbar} ${
				props.position == Position.top
					? `${styles.header_navbar}`
					: `${styles.footer_navbar}`
			} ${props.position} ${props.className}`}
		>
			<div className={styles.navbar_nav}>
				<Link to='/' className={styles.navbar_logo}>
					<img className='py-[10px]' src={props.logo_path} alt='logo' />
				</Link>
				<div
					onClick={() => {
						setBurgerState(!burgerState)

						if (!header.current) return false
						setOpacity(header.current, burgerState ? 0 : 255)
					}}
					className={`${styles.navbar_burger} ${
						(!!burgerState && `${styles.open}`) || `${styles.close}`
					}`}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul
					className={`${styles.navbar_menuList} container`}
					onMouseEnter={() => {
						if (!header.current) return false
						setOpacity(header.current, 100)
					}}
					onMouseLeave={() => {
						if (!header.current) return false
						headerOpacityHandler()
					}}
				>
					{props.nav_links.map((link, iterator) => (
						<NavbarMenuItem key={iterator} data={link} />
					))}
				</ul>
				<div className={`${styles.rightSide}`}>{props.right_side}</div>
			</div>
		</nav>
	)
}
