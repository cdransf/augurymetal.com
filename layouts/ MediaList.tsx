import MediaItem from '@/components/MediaItem'
import Pagination from '@/components/Pagination'
import { ComponentProps } from 'react'

interface Props {
  initialDisplayPosts?: { type: string; title: string; data: string | string[] }[]
  pagination?: ComponentProps<typeof Pagination>
}
const MediaList = ({ initialDisplayPosts = [], pagination }: Props) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Media
          </h1>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {initialDisplayPosts.length ? (
              initialDisplayPosts.map((d) => (
                <MediaItem key={d.title} type={d.type} title={d.title} data={d.data} />
              ))
            ) : (
              <p className="pb-2">No media found.</p>
            )}
          </div>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          page="media"
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}

export default MediaList
