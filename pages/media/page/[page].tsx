import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import siteMetadata from '@/data/siteMetadata'
import mediaData from '@/data/mediaData'
import { PageSEO } from '@/components/SEO'
import MediaList from '@/layouts/ MediaList'
import { POSTS_PER_PAGE } from '../../media'

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
  const totalPages = Math.ceil(mediaData.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { page },
  } = context
  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = mediaData.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const pagination = {
    page: 'media',
    currentPage: pageNumber,
    totalPages: Math.ceil(mediaData.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function Media({
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Media - ${siteMetadata.author}`} description={siteMetadata.description} />
      <MediaList initialDisplayPosts={initialDisplayPosts} pagination={pagination} />
    </>
  )
}
