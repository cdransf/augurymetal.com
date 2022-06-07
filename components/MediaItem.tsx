import PhotoGallery from './PhotoGallery'
import YoutubeVideo from './YouTubeVideo'

const MediaItem = (props) => {
  const { type, title, data } = props

  if (type !== 'video' && type !== 'photos') return null

  const item =
    type === 'video' ? (
      <YoutubeVideo title={title} data={data} />
    ) : (
      <PhotoGallery title={title} data={data} />
    )

  return (
    <div className="mb-12 w-full border border-solid border-primary-900">
      <h3 className="bg-primary-600 px-4 py-3 text-center text-sm font-bold text-white">{title}</h3>
      {item}
    </div>
  )
}

export default MediaItem
