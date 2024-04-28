import { FunctionComponent } from 'react'
import { OutlineBlockProps } from './OutlineBlock.interface'
 
const OutlineBlock: FunctionComponent<OutlineBlockProps> = ({className, children}: OutlineBlockProps) => {
	return <div className={`${className} rounded-[9px] border-[1px] border-[#dddddd50] border-solid bg-[#f9f9f980] p-[20px]`}>{children}</div>;
}
 
export default OutlineBlock;