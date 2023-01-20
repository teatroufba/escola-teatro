/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect,useRef, useState } from 'react'
import styled from 'styled-components'

import Button from '../../basics/button'
import Card from '../../basics/card-revista-livro'
import { LineIcon } from './icons'

const Container = styled.div`
    width: 1235px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    overflow-x: hidden;

    @media screen and (max-width: 1400px) {
      width: 815px;
    }

    @media screen and (max-width: 868px) {
      width: calc(100vw - 20px);
      padding: 0 20px;
    }

    h2 {
      font-family: 'Merriweather';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      color: #2D2B78;
      text-align: left;
      width: 100%;
    }

    .controls {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 868px) {
          display: none;
        }

        .desactive {
            opacity: 0.3;

            &:hover {
                background-color: #2D2B78;
            }
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          @media screen and (max-width: 1400px) {
            display: none;
          }
        }
    }

    .carousel {
      width: 100%;
      display: flex;
      gap: 10px;
      overflow-x: scroll;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;

      @media screen and (max-width: 868px) {
        width: 100vw;
        padding-right: 50px;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
`

interface IRevista {
	descricao: string,
	titulo: string,
	imageUrl: string,
	imageAlt: string,
	link: string,
}

interface ICarouselProps {
  titulo: string
  itens: IRevista[]
}

function CarouselRevistaLivro({ titulo, itens }: ICarouselProps) {
  const carousel = useRef<HTMLInputElement>(null)
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
  const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)
  const [scrolling, setScrolling] = useState(false)
  const [carouselPagination, setCarouselPagination] = useState(0)

  useEffect(() => {
    if (carousel.current != null) {
      setCarouselTotalScroll(
        Number(carousel.current.scrollWidth - carousel.current.clientWidth)
      )
    }
  }, [carouselScrollLeft])

  const scrollLeft = () => {
    if (carousel.current != null && carousel.current.scrollLeft > 0) {
      let numberOfElements = Math.floor(carousel.current.clientWidth/395);
      setScrolling(true)
      setCarouselScrollLeft(Number(carousel.current.scrollLeft) - (numberOfElements*420))
      carousel.current.scrollLeft -= (numberOfElements*420)
      if (carouselPagination > 0) {
        setCarouselPagination( carouselPagination - 1 )
      }

      setTimeout(() => {
        setScrolling(false)
      }, numberOfElements*240);
    }
  }

  const scrollRight = () => {
    if (
      carousel.current != null &&
      carousel.current.scrollLeft < carousel.current.scrollWidth
    ) {
      let numberOfElements = Math.floor(carousel.current.clientWidth/395);
      setScrolling(true)
      setCarouselScrollLeft(Number(carousel.current.scrollLeft) + (numberOfElements*420))
      carousel.current.scrollLeft += (numberOfElements*420)
      if (carouselPagination < Math.floor(itens.length/3)) {
        setCarouselPagination( carouselPagination + 1 )
      }

      setTimeout(() => {
        setScrolling(false)
      }, numberOfElements*240);
    }
  }

  return (
    <Container>
        <h2>{titulo}</h2>
        <div ref={carousel} className='carousel'>
            {itens.map((value, index) => (
              <Card key={`card${titulo}${index}`} desc={value.descricao} img={value.imageUrl} imgAlt={value.imageAlt} link={value.link} title={value.titulo}/>
            ))}
        </div>
        <div className='controls'>
            <Button className={carouselScrollLeft <= 0 ? 'desactive' : ''} disable={scrolling} onClick={scrollLeft}>Anterior</Button>
            <div className='pagination'>
                {itens.map((value, index, array) => (
                  index%3 == 0
                    ? <div key={Number(index)}>
                        <LineIcon hover={Math.floor(index/3) == carouselPagination} size={20} />
                      </div>
                    : null
                ))}
            </div>
            <Button disable={scrolling} className={
            carouselScrollLeft >= carouselTotalScroll ? 'desactive' : ''
            } onClick={scrollRight}>Próximo</Button>
        </div>
    </Container>
  )
}

export default CarouselRevistaLivro