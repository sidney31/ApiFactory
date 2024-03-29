import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export interface Props {
	className?: string
	nav_links: Array<{ text: string; url: string }>
	position: Position
	logo_path: string
	right_side: ReactNode
}

export enum Position {
	top = 'fixed',
	bottom = 'relative',
}

export const Navbar = (props: Props) => {
	const scrollHandler = () => {
		const HERO_HEIGHT = document.querySelector("[class*='hero']")?.clientHeight
		if (!HERO_HEIGHT) return false
		// TODO: очеловечить
		const SCROLL_TOP =
			window.scrollY > HERO_HEIGHT / 2
				? window.scrollY / 10 > 100
					? 100
					: window.scrollY / 10
				: 0
		document
			.querySelector('nav')
			?.setAttribute(
				'style',
				`background-color: rgba(255, 255, 255, ${SCROLL_TOP}%)`
			)
	}

	if (props.position === Position.top)
		document.addEventListener('scroll', scrollHandler)

	return (
		<nav className={`${styles.navbar} ${props.position} ${props.className}`}>
			<div className={styles.navbar_nav__container}>
				<a href='#' className={styles.navbar_logo}>
					<img className='py-[10px]' src={props.logo_path} alt='logo' />
				</a>
				<div className={styles.navbar_menu}>
					<ul className={styles.navbar_menuList}>
						{props.nav_links.map(link => (
							<li key={link.url} className={styles.navbar_menuListItem}>
								<Link to={link.url} className={styles.navbar_menuLink}>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.rightSide}>{props.right_side}</div>
			</div>
		</nav>
	)
}
