/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from 'next/image'
import { useState } from 'react'

import PostCard from './PostCard'
import { StyledButton, StyledPage, StyledTags, StyledTitlePage } from './styles'

interface INoticias {
  post: IPosts[]
}

interface IPosts {
  uid: string
  title: string
  subtitle: string
  image: any
  tags: string[]
  date: string
}

export default function Noticias({ post }: INoticias) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState('desc')
  const [filter, setFilter] = useState('todos')

  function setPaginationBtn(posts: number, maxPage: number) {
    return Math.ceil(posts / maxPage)
  }
  const paginationBtn = setPaginationBtn(post.length, 4)

  function filtered(itens: IPosts[], maxPost: number, current: number) {
    let ctPage = current
    let posts = itens

    ctPage -= 1
    const first = maxPost * ctPage
    const last = first + maxPost

    if (sort === 'date') {
      const finput = new Date(
        (document.querySelector('#idate') as HTMLInputElement).value
      ).toDateString()
      const linput = new Date(
        (document.querySelector('#fdate') as HTMLInputElement).value
      ).toDateString()

      posts = posts.filter(value => value.date > finput && value.date < linput)
    }
    if (sort === 'a-z') {
      posts.sort((a, b) => {
        if (a.title < b.title) return -1
        return 1
      })
    }
    if (sort !== 'todos') {
      posts = posts.filter(
        value =>
          value.tags.map(item => item.toString()).toString() ===
          filter.toString()
      )
    }
    if (sort === 'asc') return posts.slice(first, last).reverse()

    return posts.slice(first, last)
  }
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
          <button onClick={() => setSort('desc')}> Mais antigas </button>
          <button onClick={() => setSort('asc')}> Mais recentes </button>
          <button onClick={() => setSort('a-z')}> De A -Z </button>
        </div>
        <form className="filter-input">
          <span>
            <p>Filtrar por data</p>
            <input type="date" placeholder="Data de inicio" id="idate" />
          </span>
          <input type="date" placeholder="Data final" id="fdate" />
          <button type="button" onClick={() => setSort('date')}>
            Filtrar
          </button>
        </form>
      </StyledButton>
      <StyledPage>
        <div className="posts-flex">
          {filtered(post, 4, currentPage).map(value => (
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
