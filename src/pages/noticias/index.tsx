/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismicDocument } from '@prismicio/types'
import Noticias from 'Components/Noticias/Noticias'
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
    <Noticias
      post={posts.map(value => ({
        uid: value.data.uid,
        title: value.data.title,
        subtitle: value.data.subtitle,
      }))}
    />
  )
}

export default Page
