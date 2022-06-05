import { PrismicDocument } from '@prismicio/types'
import { PreviewData } from 'next'

import { createClient } from '../../prismic'

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData })

  const noticias = await client.getAllByType('noticias')

  return {
    props: { noticias },
  }
}

export default function Homepage({
  noticias,
}: {
  noticias: PrismicDocument<Record<string, any>, string, string>
}) {
  console.log(noticias)
  return <div />
}
