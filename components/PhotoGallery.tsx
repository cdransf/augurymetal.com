import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Image from './Image'

const PhotoGallery = (props) => {
  const { title, data } = props
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const slides = data.map((d) => {
    return { src: d }
  })

  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {data.length
        ? data.map((d: string, index: number) => (
            <div className="relative flex h-24 flex-col items-center overflow-hidden" key={d}>
              <Image
                alt={title}
                onClick={() => {
                  setPhotoIndex(index)
                  setIsOpen(true)
                }}
                src={d}
                quality={75}
                loading="lazy"
                fill
                style={{ objectFit: 'cover' }}
                className="-mt-18 w-full max-w-none cursor-pointer"
              />
            </div>
          ))
        : null}
      <Lightbox index={photoIndex} open={isOpen} slides={slides} close={() => setIsOpen(false)} />
    </div>
  )
}

export default PhotoGallery
