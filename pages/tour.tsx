import siteMetadata from '@/data/siteMetadata'
import tourData from '@/data/tourData'
import TourDate from '@/components/TourDate'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function Tour() {
  return (
    <>
      <PageSEO title={`Tour - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tour
          </h1>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {tourData.length ? (
              tourData.map((d) => (
                <TourDate
                  key={d.date}
                  date={d.date}
                  venue={d.venue}
                  details={d.details}
                  tickets={d.tickets}
                />
              ))
            ) : (
              <p className="pb-2">No dates scheduled.</p>
            )}
          </div>
          <p className="pt-10">
            <Link
              href="/tour-archive"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              View our past tour dates →
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
