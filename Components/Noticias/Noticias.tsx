/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image'
import { useState } from 'react'

import PostCard from './PostCard'
import { StyledButton, StyledPage, StyledTags, StyledTitlePage } from './styles'

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
  const [filter, setFilter] = useState('todos')

  function filterPosts(itens: IPosts[], pagePosts: number, page: number) {
    page -= 1
    const inicio = pagePosts * page
    const limite = inicio + pagePosts

    if (ordering === 'a-z') {
      itens.sort((a, b) => {
        if (a.title < b.title) return -1
        return 1
      })
    }
    if (filter !== 'todos') {
      itens = itens.filter(
        value =>
          value.tags.map(item => item.toString()).toString() ===
          filter.toString()
      )

      console.log(itens)

      /* if (ordering === 'asc') return res.slice(inicio, limite).reverse()
      if (ordering === 'a-z') return res.slice(inicio, limite).sort()
      return res.slice(inicio, limite) */
    }

    if (ordering === 'asc') return itens.slice(inicio, limite).reverse()
    if (ordering === 'a-z') return itens.slice(inicio, limite).sort()
    return itens.slice(inicio, limite)
  }
  function setPaginationBtn(itensLength: number, postsPage: number) {
    return Math.ceil(itensLength / postsPage)
  }
  const paginationBtn = setPaginationBtn(post.length, 4)

  return (
    <>
      <StyledTitlePage>
        <h1>Notícias</h1>
        <h3>Veja as últimas notícias da Escola de Teatro da UFBA</h3>
      </StyledTitlePage>
      <StyledTags filter={filter}>
        <button className="todos" onClick={() => setFilter('todos')}>
          Todos
        </button>
        <button className="acadêmico" onClick={() => setFilter('acadêmico')}>
          Acadêmico
        </button>
        <button className="avisos" onClick={() => setFilter('avisos')}>
          Avisos
        </button>
        <button className="concursos" onClick={() => setFilter('concursos')}>
          Concursos
        </button>
        <button className="eventos" onClick={() => setFilter('eventos')}>
          Eventos
        </button>
        <button className="notas" onClick={() => setFilter('notas')}>
          Notas
        </button>
        <button className="parcerias" onClick={() => setFilter('parcerias')}>
          Parcerias
        </button>
      </StyledTags>
      <StyledButton>
        <div className="filter-button">
          <button onClick={() => setOrdering('desc')}> Mais antigas </button>
          <button onClick={() => setOrdering('asc')}> Mais recentes </button>
          <button onClick={() => setOrdering('a-z')}> De A -Z </button>
        </div>
        <form className="filter-input">
          <span>
            <p>Filtrar por data</p>
            <input type="date" placeholder="Data de inicio" />
          </span>
          <input type="date" placeholder="Data final" />
          <button> Filtrar </button>
        </form>
      </StyledButton>
      <StyledPage>
        <div className="posts-flex">
          {filterPosts(post, 4, currentPage).map(value => (
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
          <button
            type="button"
            onClick={() => {
              if (currentPage >= paginationBtn) setCurrentPage(currentPage - 1)
            }}
          >
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
          <button
            type="button"
            onClick={() => {
              if (currentPage < paginationBtn) setCurrentPage(currentPage + 1)
            }}
          >
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
