/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import CardAgenda from '../cardagenda'
import { AgendaStyled } from './styles'

interface IAgenda {
  uid: string
  title: string
  imageUrl: string
  imageAlt: string
  date: string
  tipo: string
  local: string
}

export default function Agenda({ agenda }: { agenda: IAgenda[] }) {
  const carousel = useRef<HTMLInputElement>(null)
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
  const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)
  const [filter, setFilter] = useState('Tudo')

  useEffect(() => {
    if (carousel.current != null) {
      setCarouselTotalScroll(
        Number(carousel.current.scrollWidth - carousel.current.clientWidth)
      )
    }
  }, [carouselScrollLeft])

  const scrollLeft = () => {
    if (carousel.current != null && carousel.current.scrollLeft > 0) {
      setCarouselScrollLeft(Number(carousel.current.scrollLeft) - 278)
      carousel.current.scrollLeft -= 278
    }
  }

  const filterArray = (value: string) => {
    if (filter !== 'Tudo') return value === filter
    return agenda
  }
  const scrollRight = () => {
    if (
      carousel.current != null &&
      carousel.current.scrollLeft < carousel.current.scrollWidth
    ) {
      setCarouselScrollLeft(Number(carousel.current.scrollLeft) + 278)
      carousel.current.scrollLeft += 278
    }
  }

  return (
    <AgendaStyled>
      <div className="header">
        <h1>Agenda</h1>
        <div className="filtro">
          <button
            id="Tudo"
            onClick={() => {
              setFilter('Tudo')
            }}
          >
            TUDO
          </button>
          <button
            id="Eventos"
            onClick={() => {
              setFilter('Eventos')
            }}
          >
            EVENTOS
          </button>
          <button
            id="Espetáculos"
            onClick={() => {
              setFilter('Espetáculos')
            }}
          >
            ESPETÁCULOS
          </button>
          <button
            id="Defedas"
            onClick={() => {
              setFilter('Defesas')
            }}
          >
            DEFESAS
          </button>
          <button
            id="Formações"
            onClick={() => {
              setFilter('Formações')
            }}
          >
            FORMAÇÕES
          </button>
          <button
            id="Outros"
            onClick={() => {
              setFilter('Outros')
            }}
          >
            OUTROS
          </button>
        </div>
      </div>
      <div className="eventos">
        <button
          onClick={scrollLeft}
          className={carouselScrollLeft <= 0 ? 'desactive' : ''}
        >
          <Image
            src="/arrow-left.svg"
            alt="ícone de seta para esquerda"
            width={7}
            height={14}
          />
        </button>
        <div className="list" ref={carousel}>
          {agenda
            .filter(value => filterArray(value.tipo))
            .map(value => (
              <CardAgenda
                key={value.uid}
                date={value.date}
                description={value.title}
                local={value.local}
              />
            ))}
        </div>
        <button
          onClick={scrollRight}
          className={
            carouselScrollLeft >= carouselTotalScroll ? 'desactive' : ''
          }
        >
          <Image
            src="/arrow-right.svg"
            alt="ícone de seta para direita"
            width={7}
            height={14}
          />
        </button>
      </div>
    </AgendaStyled>
  )
}
