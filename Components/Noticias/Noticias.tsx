/* eslint-disable no-param-reassign */
import Image from 'next/image'
import { useState } from 'react'

import PostCard from './PostCard'
import {
  StyledContentPage,
  StyledFilterButton,
  StyledFilterSort,
  StyledPage,
} from './styles'

interface INoticias {
  post: IPosts[]
}

interface IPosts {
  uid: string
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  tags: string[]
  date: string
}

export default function Noticias({ post }: INoticias) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState('desc')
  const [filter, setFilter] = useState('todos')
  const [idate, setIDate] = useState('')
  const [fdate, setFDate] = useState('')

  function setPaginationBtn(posts: number, maxPage: number) {
    return Math.ceil(posts / maxPage)
  }
  const paginationBtn = setPaginationBtn(post.length, 9)

  function filtered(itens: IPosts[], maxPost: number, current: number) {
    current -= 1
    const first = maxPost * current
    const last = first + maxPost

    if (sort === 'date' && idate !== '' && fdate !== '') {
      const finput = new Date(idate).toISOString()
      const linput = new Date(fdate).toISOString()
      itens = itens.filter(value => value.date < linput && value.date > finput)
    }
    if (sort === 'a-z') {
      itens.sort((a, b) => {
        if (a.title < b.title) return -1
        return 1
      })
    }
    if (filter !== 'todos') {
      itens = itens.filter(
        value => value.tags.map(item => item).toString() === filter.toString()
      )
    }
    if (sort === 'asc') return itens.slice(first, last).reverse()
    return itens.slice(first, last)
  }
  return (
    <StyledPage>
      <div className="header-blog">
        <h1>Notícias</h1>
        <h3>Veja as últimas notícias da Escola de Teatro da UFBA</h3>
      </div>
      <StyledFilterButton filter={filter}>
        <div className="fil-button">
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
        </div>
      </StyledFilterButton>
      <StyledFilterSort>
        <div className="fil-button">
          <button onClick={() => setSort('desc')}> Mais antigas </button>
          <button onClick={() => setSort('asc')}> Mais recentes </button>
          <button onClick={() => setSort('a-z')}> De A -Z </button>
        </div>
        <div className="fil-input">
          <span>
            <p>Filtrar por data</p>
            <input
              type="date"
              placeholder="Data de inicio"
              id="idate"
              onChange={e => setIDate(e.target.value)}
              value={idate}
            />
          </span>
          <input
            type="date"
            placeholder="Data final"
            id="fdate"
            onChange={e => setFDate(e.target.value)}
            value={fdate}
          />
          <button type="button" onClick={() => setSort('date')}>
            Filtrar
          </button>
        </div>
      </StyledFilterSort>
      <StyledContentPage>
        <div className="posts-flex">
          {filtered(post, 9, currentPage).map(value => (
            <PostCard
              uid={value.uid}
              title={value.title}
              subtitle={value.subtitle}
              imageUrl={value.imageUrl}
              imageAlt={value.imageAlt}
            />
          ))}
        </div>
        <div className="pagination-btn">
          <button
            type="button"
            onClick={() => {
              if (currentPage > paginationBtn) setCurrentPage(currentPage - 1)
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
      </StyledContentPage>
    </StyledPage>
  )
}
