import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

interface Props {
	data: navbarMenuLink
	onMouseEnter?: MouseEventHandler
	onMouseLeave?: MouseEventHandler
}

interface navbarMenuLink {
	title: string
	url: string
	childs?: navbarMenuLink[]
}

export const NavbarMenuItem = (props: Props) => {
	return (
		<div
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			className={styles.navbar_menuListItem}
		>
			<div className={styles.navbar_menuLink}>
				{props.data.childs ? (
					<>
						<p>{props.data.title}</p>
						<div className={styles.navbar_menuItemDropdown}>
							<div className={styles.navbar_menuDropdownItems}>
								{props.data.childs?.map(child => (
									<Link to={child.url} key={child.title}>
										{child.title}
									</Link>
								))}
							</div>
						</div>
					</>
				) : (
					<Link to={props.data.url}>{props.data.title}</Link>
				)}
			</div>
		</div>
	)
}
