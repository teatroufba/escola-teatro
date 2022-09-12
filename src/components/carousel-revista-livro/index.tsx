/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect,useRef, useState } from 'react'
import styled from 'styled-components'

import Button from '../button'
import Card from '../card-revista-livro'
import { LineIcon } from './icons'

const Container = styled.div`
    width: 1235px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;

    @media screen and (max-width: 1400px) {
      width: 815px;
    }

    @media screen and (max-width: 1000px) {
      width: 395px;
    }

    @media screen and (max-width: 600px) {
      width: calc(100vw - 50px);
      margin: 0 auto;
    }

    h2 {
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        color: #2D2B78;
        text-align: left;
    }

    .controls {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 600px) {
          width: 100%;
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

          @media screen and (max-width: 600px) {
            display: none;
          }
        }
    }

    .carousel {
      width: 100%;
      display: flex;
      gap: 25px;
      padding-right: 25px;
      overflow-x: scroll;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;

      @media screen and (max-width: 600px) {
        width: 100vw;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
`


function CarouselRevistaLivro() {
  const carousel = useRef<HTMLInputElement>(null)
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
  const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)
  const [scrolling, setScrolling] = useState(false)
  const [carouselPagination, setCarouselPagination] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])


  useEffect(() => {
    if (carousel.current != null) {
      setCarouselTotalScroll(
        Number(carousel.current.scrollWidth - carousel.current.clientWidth)
      )
    }
  }, [carouselScrollLeft])

  const scrollLeft = () => {
    if (carousel.current != null && carousel.current.scrollLeft > 0) {
    setScrolling(true)
      setCarouselScrollLeft(Number(carousel.current.scrollLeft) - 420)
      carousel.current.scrollLeft -= 420
    }
    setTimeout(() => {
        setScrolling(false)
    }, 500);
  }

  const scrollRight = () => {
    if (
      carousel.current != null &&
      carousel.current.scrollLeft < carousel.current.scrollWidth
    ) {
      setScrolling(true)
      setCarouselScrollLeft(Number(carousel.current.scrollLeft) + 420)
      carousel.current.scrollLeft += 420
    }
    setTimeout(() => {
        setScrolling(false)
    }, 500);
  }

  return (
    <Container>
        <h2>titulo</h2>
        <div ref={carousel} className='carousel'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className='controls'>
            <Button className={carouselScrollLeft <= 0 ? 'desactive' : ''} disable={scrolling} onClick={scrollLeft}>Anterior</Button>
            <div className='pagination'>
                {carouselPagination.map((page: boolean, index: number) => (
                    <div key={Number(index)} className={index > 6 ? 'desktop' : ''}>
                        <LineIcon hover={page} size={20} />
                    </div>
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