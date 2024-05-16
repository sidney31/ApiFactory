import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import { Props } from './Navbar.interface'
import styles from './Navbar.module.scss'

const setOpacity = (element: HTMLDivElement, opacity: number) => {
	element.style.backgroundColor = `rgba(255, 255, 255, ${opacity}%`
}

export const Navbar = (props: Props) => {
	const headerRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)

	const [burgerState, setBurgerState] = useState(false)
	const [menuState, setMenuState] = useState(
		window.matchMedia('(min-width: 1000px)').matches
	)

	const headerOpacityHandler = () => {
		if (!headerRef.current) return false
		const smooth = 5
		setOpacity(headerRef.current, window.scrollY / smooth)
	}

	const resizeHandler = () => {
		setBurgerState(false)
		setMenuState(window.matchMedia('(min-width: 1000px)').matches)
	}

	useLayoutEffect(() => {
		window.addEventListener('scroll', headerOpacityHandler)
		window.addEventListener('resize', resizeHandler)

		return () => {
			window.removeEventListener('scroll', headerOpacityHandler)
			window.removeEventListener('resize', resizeHandler)
		}
	})

	return (
		<nav
			ref={headerRef}
			className={`${styles.navbar} ${props.className}`}
			data-aos='fade-down'
			data-aos-delay='500'
		>
			<div className={styles.navbar_nav}>
				<Link to='/' className={styles.navbar_logo}>
					<img className='py-[10px]' src={props.logo_path} alt='logo' />
				</Link>
				<div
					ref={menuRef}
					className={`${styles.navbar_menuList} container ${
						(menuState && 'flex') || 'hidden'
					}`}
					onMouseEnter={() => {
						if (!headerRef.current) return false
						setOpacity(headerRef.current, 100)
					}}
					onMouseLeave={() => {
						if (!headerRef.current) return false
						headerOpacityHandler()
					}}
				>
					{props.nav_links?.map((nav_item, iterator) =>
						nav_item.dropdown_items ? (
							<Dropdown
								key={iterator}
								title={nav_item.title}
								items={nav_item.dropdown_items}
							/>
						) : (
							<Link
								to={nav_item.url}
								key={iterator}
								className={styles.navbar_menuLink}
							>
								{nav_item.title}
							</Link>
						)
					)}
				</div>
				<div className={`${styles.navbar_action}`}>
					{props.header_action}
					{props.nav_links?.length != 0 && (
						<div
						onClick={() => {
							setBurgerState(!burgerState)
							
							if (!headerRef.current) return false
							setOpacity(headerRef.current, burgerState ? 0 : 255)
							
							setMenuState(!menuState)
						}}
						className={`${styles.navbar_burger} ${
							(!!burgerState && `${styles.open}`) || `${styles.close}`
						}`}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
