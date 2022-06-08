import { PrismicDocument } from '@prismicio/types'
import { PreviewData } from 'next'

import { createClient } from '../../../prismic'

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData })

  const noticias = await client.getSingle('pagina-de-noticias')
  const posts = await client.getAllByType('post-de-noticias')

  return {
    props: { noticias, posts },
  }
}

function Page({
  posts,
}: {
  posts: PrismicDocument<Record<string, any>, string, string>[]
}) {
  return (
    <>
      {posts.map(items => ({
        items,
      }))}
    </>
  )
}

export default Page
