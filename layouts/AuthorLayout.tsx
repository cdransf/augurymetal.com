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
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Band
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={bannerimage}
              alt="avatar"
              width="1250px"
              height="579px"
              className="rounded-sm"
            />
            <div className="flex space-x-3 pt-8">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
              <SocialIcon kind="facebook" href={facebook} size={6} />
              <SocialIcon kind="instagram" href={instagram} size={6} />
              <SocialIcon kind="youtube" href={youtube} size={6} />
              <SocialIcon kind="twitter" href={twitter} size={6} />
              <SocialIcon kind="spotify" href={spotify} size={6} />
              <SocialIcon kind="applemusic" href={applemusic} size={6} />
              <SocialIcon kind="bandcamp" href={bandcamp} size={6} />
              <SocialIcon kind="lastfm" href={lastfm} size={6} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
