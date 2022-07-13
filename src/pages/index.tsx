/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PreviewData } from 'next'

import { createClient } from '../../prismic'

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData })
  const items = await client.getAllByType('agenda', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })

  const mural = items.map(value => ({
    uid: value.uid || '',
    title: value.data.titulo,
    imageUrl: value.data.imagem.url,
    imageAlt: value.data.imagem.alt,
    date: value.data.data,
    tipo: value.data.tipo,
    local: value.data.local,
  }))

  const itemsAgenda = await client.getAllByType('mural-estudantil', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })

  const agenda = itemsAgenda.map(value => ({
    uid: value.uid || '',
    title: value.data.titulo,
    imageUrl: value.data.imagem.url || '',
    imageAlt: value.data.imagem.alt,
  }))
  return {
    props: { mural, agenda },
  }
}

interface IMural {
  uid: string
  title: string
  imageUrl: string
  imageAlt: string
  date: string
  tipo: string
  local: string
}

interface IAgenda {
  uid: string
  title: string
  imageUrl: string
  imageAlt: string
}

export default function Home({
  mural,
  agenda,
}: {
  mural: IMural
  agenda: IAgenda
}) {
  console.log(mural, agenda)
  return null
}
