/* eslint-disable react/destructuring-assignment */
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import CardAgenda from '../cardagenda'

const AgendaStyled = styled.div`
  background-color: #2d2b78;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 6.25rem 0;

  .header {
    width: 1069px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: center;

    @media screen and (max-width: 1400px) {
      width: 791px;
    }

    @media screen and (max-width: 1000px) {
      width: 513px;
    }

    @media screen and (max-width: 768px) {
      width: calc(100vw - 50px);
      margin: 0 auto;
    }

    h1 {
      color: white;
      font-family: 'Merriweather';
      text-decoration: underline;
      text-underline-position: under;
      text-align: center;
    }

    .filtro {
      display: flex;
      gap: 10px;
      justify-content: right;

      button {
        background-color: #24233a;
        color: #958fa0;
        border: 1px solid #958fa0;
        border-radius: 5px;
        font-size: 0.875rem;
        cursor: pointer;

        &.active {
          color: #9a1a4b;
          border: 1px solid #9a1a4b;
        }

        &:hover {
          color: #9a1a4b;
          border: 1px solid #9a1a4b;
        }
      }
    }
  }

  .eventos {
    display: flex;
    gap: 43px;
    align-items: center;

    button {
      width: 40px;
      height: 40px;
      background-color: #9a1a4b;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &.desactive {
        background-color: #958fa0;
      }
    }

    @media screen and (max-width: 768px) {
      gap: 25px;

      button {
        display: none;
      }
    }

    .list {
      width: 1069px;
      display: flex;
      gap: 43px;
      overflow-x: scroll;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      @media screen and (max-width: 1400px) {
        width: 791px;
      }

      @media screen and (max-width: 1000px) {
        width: 513px;
      }

      @media screen and (max-width: 768px) {
        width: 100vw;
        padding: 0 25px;
        overflow-x: scroll;
        gap: 25px;
      }
    }
  }
`

interface IMural {
  uid: string
  title: string
  imageUrl: string
  imageAlt: string
  date: string
  tipo: string
  local: string
}

function Agenda({ mural }: { mural: IMural[] }) {
  const carousel = useRef<HTMLInputElement>(null)
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
  const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)

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
          <button className="active">TUDO</button>
          <button>EVENTOS</button>
          <button>ESPETÁCULOS</button>
          <button>DEFESAS</button>
          <button>FORMAÇÕES</button>
          <button>OUTROS</button>
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
          {mural.map(value => (
            <CardAgenda
              key={value.uid}
              date={value.date}
              description={value.title}
              time="14:00"
              eventType={value.tipo}
            />
          ))}
          <CardAgenda
            date="08/06"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Presencial"
          />
          <CardAgenda
            date="20/06"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Online"
          />
          <CardAgenda
            date="25/06"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Presencial"
          />
          <CardAgenda
            date="30/06"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Online"
          />
          <CardAgenda
            date="02/07"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Presencial"
          />
          <CardAgenda
            date="10/07"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Presencial"
          />
          <CardAgenda
            date="14/07"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Presencial"
          />
          <CardAgenda
            date="25/07"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sit."
            time="14:00"
            eventType="Presencial"
          />
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

export default Agenda
