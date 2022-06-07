import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image from './Image'

const PhotoGallery = (props) => {
  const { title, data } = props

  return (
    <Gallery>
      {data.length
        ? data.map((d: string) => (
            <Item cropped key={d}>
              {({ ref, open }) => <Image alt={title} ref={ref} onClick={open} src={d} />}
            </Item>
          ))
        : null}
    </Gallery>
  )
}

export default PhotoGallery
