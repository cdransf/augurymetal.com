import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          <SocialIcon kind="spotify" href={siteMetadata.spotify} />
          <SocialIcon kind="applemusic" href={siteMetadata.applemusic} />
          <SocialIcon kind="bandcamp" href={siteMetadata.bandcamp} />
          <SocialIcon kind="lastfm" href={siteMetadata.lastfm} />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <Link href="https://coryd.dev">Site by Cory</Link>
        </div>
      </div>
    </footer>
  )
}
