import { useRef } from 'react'

// interface Props{
// 	className?: string,
// 	videoPath: string,
// }

export const VideoCard = (props) => {
	const videoRef = useRef(null)

	const mouseOverHandler = () => {
		videoRef.current?.play();
	}
	// const mouseOutHandler = () => {
	// 	videoRef.current?.stop();
	// }

	return (
		<video 
		ref={videoRef} 
		className={props.className}
		onMouseOver={mouseOverHandler}
		// onMouseOut={mouseOutHandler}
		playsInline muted loop
		>
			<source src={props.source} type='video/mp4' />
		</video>
	)
}