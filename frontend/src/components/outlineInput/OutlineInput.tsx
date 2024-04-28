import { Props } from './OutlineInput.interface'
import styles from './OutlineInput.module.scss'

const OutlineInput = ({className, type, maxlength, min, name, id, placeholder, value, disabled}: Props) => {
	return (
		<div className={styles.wrapper}>
			<input 
			type={type || 'text'} 
			className={`${className} ${styles.input}`}
			maxLength={maxlength}
			min={min}
			name={name}
			id={id}
			value={value}
			disabled={disabled}
			placeholder=' '
			/>
			<p className={styles.placeholder}>
				{placeholder}
			</p>
		</div>
	)
}

export default OutlineInput