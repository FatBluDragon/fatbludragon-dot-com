import './Gallery.css'
import { GalleryImages } from '../components/GalleryImages'
import { GallerySearch } from '../components/GallerySearch'

export function Gallery() {


	return (
		<>
			<GallerySearch />
			<GalleryImages />
		</>
	)
}