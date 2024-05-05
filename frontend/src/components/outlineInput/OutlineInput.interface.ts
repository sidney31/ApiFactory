export interface Props {
	className?: string,
	type?: string,
	maxlength?: number,
	min?: number,
	name?: string,
	id?: string,
	placeholder?: string,
	value?: string,
	disabled?: boolean,
	onChange?: () => unknown,
}
