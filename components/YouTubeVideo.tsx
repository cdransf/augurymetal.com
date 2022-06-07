const YoutubeVideo = (props) => {
  const { title, data } = props

  return (
    <div
      className="relative h-0 w-full max-w-full overflow-hidden"
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${data}`}
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  )
}

export default YoutubeVideo
