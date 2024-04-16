import { useRef } from 'react'

interface Props {
	className?: string
	src?: string
}

const VideoBlock = (props: Props) => {
	const videoRef = useRef<HTMLVideoElement>(null)

	const mouseOverHandler = () => {
		videoRef.current?.play()
	}

	return (
		<video
			ref={videoRef}
			className='object-fill h-[inherit]'
			onMouseOver={mouseOverHandler}
			autoPlay={false}
			muted
		>
			<source src={props.src} />
		</video>
	)
}

export default VideoBlock
