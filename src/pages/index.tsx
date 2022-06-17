/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismicDocument } from '@prismicio/types'
import Noticias from 'Components/Noticias/Noticias'
import { PreviewData } from 'next'
import { useState } from 'react'

import { createClient } from '../../prismic'

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData })

  const posts = await client.getAllByType('post-de-noticias')

  return {
    props: { posts },
  }
}

function Page({
  posts,
}: {
  posts: PrismicDocument<Record<string, any>, string, string>[]
}) {
  const [inputValue, setInputValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  function handleChange(e: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return setInputValue(e.target.value)
  }

  console.log(posts)
  return (
    <>
      <input
        type="search"
        placeholder="pesquise o título da matéria"
        onChange={handleChange}
      />
      <Noticias
        post={posts.map(value => ({
          uid: value.uid || '',
          title: value.data.title,
          subtitle: value.data.subtitle,
        }))}
        inputValue={inputValue}
      />
      <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
        {' '}
        Próxima{' '}
      </button>
    </>
  )
}

export default Page
