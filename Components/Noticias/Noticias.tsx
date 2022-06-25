/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image'
import { useState } from 'react'

import PostCard from './PostCard'
import { StyledFiltros, StyledPage } from './styles'

interface INoticias {
  post: IPosts[]
}

interface IPosts {
  uid: string
  title: any
  subtitle: any
  image: any
  tags: string[]
}
export default function Noticias({ post }: INoticias) {
  const [currentPage, setCurrentPage] = useState(1)
  const [ordering, setOrdering] = useState('desc')

  function filterPosts(itens: IPosts[], pagePosts: number, page: number) {
    // eslint-disable-next-line no-param-reassign
    page -= 1
    const inicio = pagePosts * page
    const limite = inicio + pagePosts

    if (ordering === 'asc') return itens.slice(inicio, limite).reverse()
    if (ordering === 'a-z') return itens.slice(inicio, limite).sort()
    return itens.slice(inicio, limite)
  }
  function setPaginationBtn(itensLength: number, postsPage: number) {
    return Math.ceil(itensLength / postsPage)
  }
  const paginationBtn = setPaginationBtn(post.length, 9)

  return (
    <>
      <StyledFiltros>
        <div className="filter-button">
          <button onClick={() => setOrdering('desc')}> Mais antigas </button>
          <button onClick={() => setOrdering('asc')}> Mais recentes </button>
          <button onClick={() => setOrdering('a-z')}> De A -Z </button>
        </div>
        <form className="filter-input">
          <span>
            <p>Filtrar por data</p>
            <input placeholder="Data de inicio" />
          </span>
          <input placeholder="Data final" />
          <button> Filtrar </button>
        </form>
      </StyledFiltros>
      <StyledPage>
        <div className="posts-flex">
          {filterPosts(post, 9, currentPage).map(value => (
            <PostCard
              uid={value.uid}
              title={value.title}
              subtitle={value.subtitle}
              imageUrl={value.image.url}
              imageAlt={value.image.alt}
            />
          ))}
        </div>
        <div className="pagination-btn">
          <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
            <Image
              src="/icon-left.png"
              alt="página anterior"
              width={5}
              height={9}
            />
          </button>
          <div className="pages-btn">
            <button type="button">{currentPage} </button>
            <span>de</span>
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage + paginationBtn - 1)}
            >
              {paginationBtn}
            </button>
          </div>
          <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
            <Image
              src="/icon-right.png"
              alt="próxima página"
              width={5}
              height={9}
            />
          </button>
        </div>
      </StyledPage>
    </>
  )
}
