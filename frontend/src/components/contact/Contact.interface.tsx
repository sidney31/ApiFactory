export interface Props {
	title: string
	subtitle: string
	data: string
	type: ContactType
}

export enum ContactType {
	email = 'mailto',
	phone = 'tel',
	address = '',
}