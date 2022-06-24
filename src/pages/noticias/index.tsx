/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismicDocument } from '@prismicio/types'
import Filtros from 'Components/Noticias/Filtros'
import Noticias from 'Components/Noticias/Noticias'
import { PreviewData } from 'next'
import { useState } from 'react'

import { createClient } from '../../../prismic'

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData })
  const noticias = await client.getAllByType('post-de-noticias')
  return {
    props: { noticias },
  }
}

function Page({
  noticias,
}: {
  noticias: PrismicDocument<Record<string, any>, string, string>[]
}) {
  const [currentPage, setCurrentPage] = useState(1)

  function filterPosts(
    itens: PrismicDocument<Record<string, any>, string, string>[],
    pagePosts: number,
    page: number
  ) {
    // eslint-disable-next-line no-param-reassign
    page -= 1

    const inicio = pagePosts * page
    const limite = inicio + pagePosts
    return itens.slice(inicio, limite)
  }

  function setPaginationBtn(itensLength: number, postsPage: number) {
    // número de páginas renderizadas
    return Math.ceil(itensLength / postsPage)
  }
  const paginationBtn = setPaginationBtn(noticias.length, 9)
  return (
    <>
      <Filtros />
      <Noticias
        post={filterPosts(noticias, 9, currentPage).map(value => ({
          uid: value.uid || '',
          image: value.data.image,
          title: value.data.title,
          subtitle: value.data.subtitle,
        }))}
        pagebtn={() => setCurrentPage(currentPage + 1)}
        paginationBtn={paginationBtn}
      />
    </>
  )
}

export default Page
