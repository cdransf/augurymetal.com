import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const {
    name,
    bannerimage,
    email,
    facebook,
    instagram,
    youtube,
    twitter,
    spotify,
    applemusic,
    bandcamp,
    lastfm,
  } = frontMatter

  return (
    <>
      <PageSEO title={`Band - ${name}`} description={`Band - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Band
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={bannerimage}
              alt="avatar"
              width="1250"
              height="579"
              className="rounded-sm"
            />
            <div className="flex space-x-3 pt-8">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="facebook" href={facebook} />
              <SocialIcon kind="instagram" href={instagram} />
              <SocialIcon kind="youtube" href={youtube} />
              <SocialIcon kind="twitter" href={twitter} />
              <SocialIcon kind="spotify" href={spotify} />
              <SocialIcon kind="applemusic" href={applemusic} />
              <SocialIcon kind="bandcamp" href={bandcamp} />
              <SocialIcon kind="lastfm" href={lastfm} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
