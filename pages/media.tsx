import siteMetadata from '@/data/siteMetadata'
import MediaList from '@/layouts/ MediaList'
import mediaData from '@/data/mediaData'
import { PageSEO } from '@/components/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ComponentProps } from 'react'

export const POSTS_PER_PAGE = 5

export const getStaticProps: GetStaticProps<{
  initialDisplayPosts: ComponentProps<typeof MediaList>['initialDisplayPosts']
  pagination: ComponentProps<typeof MediaList>['pagination']
}> = async () => {
  const initialDisplayPosts = mediaData.slice(0, POSTS_PER_PAGE)
  const pagination = {
    page: 'blog',
    currentPage: 1,
    totalPages: Math.ceil(mediaData.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, pagination } }
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
