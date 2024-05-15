export interface Props {
	className?: string
	nav_links?: {
		title: string
		url: string
		dropdown_items?: { text: string; link: string }[]
	}[]
	logo_path: string
	header_action?: React.ReactNode
}
