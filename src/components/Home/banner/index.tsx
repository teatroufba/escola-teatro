import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { LineIcon } from './icons'

const BannerStyled = styled.div`
  display: block;
  background-color: #282b62;

  .carousel {
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .banner-control {
    position: absolute;
    display: flex;
    width: 64.375vw;
    justify-content: right;
    left: 0;
    right: 0;
    top: min(calc(100vw / 3), 698px);
    bottom: 0;
    margin: auto;

    @media screen and (max-width: 768px) {
      position: static;
      background-color: #282b62;
      width: 100vw;
      padding: 0 25px;
      justify-content: center;
    }

    .pagination {
      background-color: #282b62;
      display: flex;
      justify-content: center;
      width: 484px;
      height: 40px;
      color: white;
      padding: 0 15px;
      align-items: center;
      gap: 10px;

      

      p {
        font-family: 'Merriweather';
        font-weight: 700;
      }
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }

    @media screen and (max-width: 768px) {
      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }
    }

    button {
      background-color: #9a1a4b;
      width: 40px;
      height: 40px;
      border: none;
    }
  }

  .img {
    width: 100vw;
  }
`

function Banner() {
  const carousel = useRef<HTMLInputElement>(null)
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
  const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)
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

  const pagination = (page: number) => {
    const carouselPaginationReplace = carouselPagination
    const fromIndex = carouselPaginationReplace.indexOf(true)
    const element = carouselPaginationReplace.splice(fromIndex, 1)[0]

    carouselPaginationReplace.splice(fromIndex + page, 0, element)
    setCarouselPagination(carouselPaginationReplace)
  }

  useEffect(() => {
    if (carousel.current != null) {
      setCarouselTotalScroll(
        Number(carousel.current.scrollWidth - carousel.current.clientWidth)
      )
    }
  }, [carouselScrollLeft])

  const scroll = () => {
    if (carousel.current != null) {
      if (carousel.current.scrollLeft < 12 * carousel.current.clientWidth) {
        setCarouselScrollLeft(
          Number(carousel.current.scrollLeft + carousel.current.clientWidth)
        )
        carousel.current.scrollLeft += carousel.current.clientWidth
        pagination(1)
      } else {
        setCarouselScrollLeft(0)
        carousel.current.scrollLeft = 0
        pagination(-12)
      }
    }
  }

  const scrollMobile = () => {
    if (carousel.current != null) {
      if (carousel.current.scrollLeft < 6 * carousel.current.clientWidth) {
        setCarouselScrollLeft(
          Number(carousel.current.scrollLeft + carousel.current.clientWidth)
        )
        carousel.current.scrollLeft += carousel.current.clientWidth
        pagination(1)
      } else {
        setCarouselScrollLeft(0)
        carousel.current.scrollLeft = 0
        pagination(-6)
      }
    }
  }

  return (
    <BannerStyled>
      <div ref={carousel} className="carousel">
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
        <img src="/banner-1.jpg" alt="" />
      </div>
      <div className="banner-control">
        <div className="pagination">

        
          <p>01</p>
          {carouselPagination.map((page: boolean, index: number) => (
            <div key={Number(index)} className={index > 6 ? 'desktop' : ''}>
              <LineIcon size={20} hover={page} />
            </div>
          ))}
          <p className="desktop">13</p>
          <p className="mobile">07</p>
        </div>
        <button
          onClick={scroll}
          className={
            carouselScrollLeft >= carouselTotalScroll
              ? 'desktop desactive'
              : 'desktop'
          }
        >
          <Image
            src="/arrow-right.svg"
            alt="ícone de seta para esquerda"
            width={7}
            height={14}
          />
        </button>
        <button onClick={scrollMobile} className="mobile">
          <Image
            src="/arrow-right.svg"
            alt="ícone de seta para esquerda"
            width={7}
            height={14}
          />
        </button>
      </div>
    </BannerStyled>
  )
}

export default Banner
