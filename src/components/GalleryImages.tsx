import { ReactGallery, type RenderArg } from 'next-gallery/react'
import { useState } from 'react'
import './GalleryImages.css'
import { images } from "../json/gallery.json"

export function GalleryImages() {
	const [isWFW, setWFW] = useState(false)
	const [isFat, setFat] = useState(false)
	const [isInflation, setInflation] = useState(false)
	const [isVore, setVore] = useState(false)


	const galleryImages = images
		.filter(image => isWFW || !image.wfw)
		.filter(image => isFat || !image.tags.includes("fat"))
		.filter(image => isInflation || !image.tags.includes("inflation"))
		.filter(image => isVore || !image.tags.includes("vore"))
		.map(image => ({
				"src": "/gallery/" + image.path,
				"aspect_ratio": image.size[0] / image.size[1]
		}))

	
	const breakpoints = [500, 1000, 1600];
	const ratios = [2.2, 4, 6, 8];

	const render = ({src, alt}: RenderArg) => (
    	<img src={src} alt={alt ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
	)

	return (
		<>
			<div className='header'>
				<button onClick={() => {setWFW(isWFW => !isWFW)}}>{isWFW ? "disable" : "enable"} WFW</button>
				<button onClick={() => {setFat(isFat => !isFat)}}>{isFat ? "hide" : "show"} Fat</button>
				<button onClick={() => {setInflation(isInflation => !isInflation)}}>{isInflation ? "hide" : "show"} Inflation</button>
				<button onClick={() => {setVore(isVore => !isVore)}}>{isVore ? "hide" : "show"} Vore</button>
			</div>
			<div className='gallery_images'>
				<ReactGallery images={galleryImages} breakpoints={breakpoints} ratios={ratios} render={render} lastRowBehavior='fill' gap='2px'/>
			</div>
		</>
	)
}