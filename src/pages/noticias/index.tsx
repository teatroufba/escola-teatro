/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
  const noticias = await client.getAllByType('post-de-noticias', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })

  return {
    props: { noticias },
  }
}

export default function Page({
  noticias,
}: {
  noticias: PrismicDocument<Record<string, any>, string, string>[]
}) {
  const posts = noticias.map(items => ({
    uid: items.uid || '',
    title: items.data.title,
    subtitle: items.data.subtitle,
    imageUrl: items.data.image.url,
    imageAlt: items.data.image.alt,
    tags: items.tags,
    date: new Date(items.first_publication_date).toISOString(),
  }))
  return <Noticias post={posts} />
}
