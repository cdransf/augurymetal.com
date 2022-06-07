import Image from '@/components/Image'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <Link href="/">
        <Image
          src="/static/images/header-banner.jpg"
          alt="header banner"
          width="1500px"
          height="600px"
        />
      </Link>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between">
          <div className="flex items-center text-base sm:w-full">
            <div className="sm:border-y-1 sm:border-l-1 hidden border sm:flex sm:w-full sm:justify-between sm:border-r-0 sm:border-primary-900 sm:text-center">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="focus:shadow-outline-blue sm:border-r-1 inline border border-transparent bg-primary-600 px-4 py-3 text-sm font-bold leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-500 sm:grow sm:border-y-0 sm:border-l-0 sm:border-primary-900 sm:text-center"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
