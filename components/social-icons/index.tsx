import Mail from './mail.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Youtube from './youtube.svg'
import Twitter from './twitter.svg'
import Spotify from './spotify.svg'
import AppleMusic from './applemusic.svg'
import BandCamp from './bandcamp.svg'
import Lastfm from './lastfm.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  spotify: Spotify,
  applemusic: AppleMusic,
  bandcamp: BandCamp,
  lastfm: Lastfm,
}

const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
    </a>
  )
}

export default SocialIcon
