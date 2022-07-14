/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Noticias from 'Components/Home/Noticias'
import { PreviewData } from 'next'

import Agenda from '@/components/agenda'

import { createClient } from '../../prismic'

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData })
  const items = await client.getAllByType('agenda')

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

  const posts = await client.getAllByType('post-de-noticias', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })

  const noticias = posts.map(value => ({
    uid: value.uid,
    title: value.data.title,
    subtitle: value.data.subtitle,
    imageUrl: value.data.image.url,
    imageAlt: value.data.image.alt,
    date: value.first_publication_date,
  }))
  return {
    props: { mural, agenda, noticias },
  }
}

interface INoticias {
  uid: string
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  date: string
}

interface IAgenda {
  uid: string
  title: string
  imageUrl: string
  imageAlt: string
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

export default function Home({
  mural,
  agenda,
  noticias,
}: {
  mural: IMural[]
  agenda: IAgenda[]
  noticias: INoticias[]
}) {
  console.log(agenda)
  return (
    <>
      <Agenda mural={mural} />
      <Noticias noticias={noticias} />
    </>
  )
}
