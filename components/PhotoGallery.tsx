import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Image from './Image'

const PhotoGallery = (props) => {
  const { title, data } = props
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {data.length
        ? data.map((d: string, index: number) => (
            <Image
              key={d}
              alt={title}
              onClick={() => {
                setPhotoIndex(index)
                setIsOpen(true)
              }}
              src={d}
              className="w-1/4 cursor-pointer object-cover"
              width="300px"
              height="300px"
            />
          ))
        : null}

      {isOpen && (
        <Lightbox
          mainSrc={data[photoIndex]}
          nextSrc={data[(photoIndex + 1) % data.length]}
          prevSrc={data[(photoIndex + data.length - 1) % data.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + data.length - 1) % data.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % data.length)}
        />
      )}
    </div>
  )
}

export default PhotoGallery
