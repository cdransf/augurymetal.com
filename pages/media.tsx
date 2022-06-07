import siteMetadata from '@/data/siteMetadata'
import mediaData from '@/data/mediaData'
import { PageSEO } from '@/components/SEO'
import MediaItem from '@/components/MediaItem'

export default function Media() {
  return (
    <>
      <PageSEO title={`Media - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Media
          </h1>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {mediaData.length ? (
              mediaData.map((d) => (
                <MediaItem key={d.title} type={d.type} title={d.title} data={d.data} />
              ))
            ) : (
              <p className="pb-2">No media found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
