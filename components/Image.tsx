import NextImage, { ImageProps } from 'next/image'
import { ItemRef } from 'react-photoswipe-gallery'

const Image = ({ ...rest }: ImageProps & { ref?: ItemRef }) => <NextImage {...rest} />

export default Image
