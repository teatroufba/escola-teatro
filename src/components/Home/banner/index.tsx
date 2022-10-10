import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { LineIcon } from './icons'

const BannerStyled = styled.div`
  display: block;
  max-height: 750px;
  height: 39.06vw;
  min-height: 200px;
  background-color: #282b62;

  @media screen and (max-width: 1300px) {
    height: calc(39.06vw + 40px);
  }

  @media screen and (max-width: 768px) {
    height: calc(100vw + 40px);
    max-height: 1008px;
  }

  .carousel {
    width: 100%;
    margin: 0 auto;
    max-width: 1920px;
    overflow-x: scroll;
    display: flex;
    scroll-behavior: smooth;
    align-items: stretch;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    img {
      width: 100vw;
      max-height: 750px;

      @media screen and (max-width: 768px) {
        height: 100vw;
        max-height: 1008px;
      }
    }

    @media screen and (max-width: 768px) {
      height: 100vw;
      max-height: 1008px;
    }
  }

  .layer {
    display: none;
    width: 100%;
    max-height: 750px;
    height: 39.06vw;
    min-height: 200px;
    background-color: #9a1a4b;
    opacity: 0.7;
    position: relative;
    left: 0;
    right: 0;
    top: -750px;
    bottom: 0;
  }

  .contentMobile {
    display: none;
  }

  &:hover {
    .layer {
      display: block;
    }

    @media (min-width: 1300px) {
      .banner-control {
        top: max(calc(-39.06vw - 261px), -1011px);
      }
    }

    @media (min-width: 768px) and (max-width: 1300px) {
      .banner-control {
        top: -39.06vw;
        justify-content: right;
        position: relative;
        background-color: #282b62;
        width: 100vw;
        height: 40px;
        padding: 0 25px;
        justify-content: center;

        .content {
          display: none;
        }
      }
    }

    @media (max-width: 768px) {
      .banner-control {
        top: calc(-100vw);
        justify-content: right;
        position: relative;
        background-color: #282b62;
        width: 100vw;
        height: 40px;
        padding: 0 25px;
        justify-content: center;

        .content {
          display: none;
        }
      }
    }

    .contentMobile {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 25px;

        h1 {
          font-family: 'Merriweather';
          font-style: normal;
          font-weight: 400;
          font-size: 3rem;
        }

        p {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          max-width: 500px;
        }

        .content-button {
          display: none;
          justify-content: right;

          a {
            background-color: #9a1a4b;
            width: 40px;
            height: 40px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
          }

          small {
            background-color: #282b62;
            display: flex;
            justify-content: center;
            padding: 10px 20px;
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 0.875rem;
          }
        }

      @media (min-width: 768px) and (max-width: 1300px) {
        position: relative;
        top: calc(-39.06vw - 266px);
        display: flex;
        width: 86.667vw;
        max-width: 500px;
        margin: 0 auto;

        .content-button {
          display: flex;
        }
      }

      @media screen and (max-width: 768px) {
        position: relative;
        top: calc(-100vw - 266px);
        display: flex;
        width: 86.667vw;
        max-width: 500px;
        margin: 0 auto;

        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 0.875rem;
        }

        .content-button {
          display: flex;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1920px) {
    .layer {
      top: max(-39.06vw, -750px);
    }
  }

  @media screen and (max-width: 768px) {
    .layer {
      top: -100vw;
      height: 100vw;
      max-height: 790px;
    }
  }

  .banner-control {
    max-width: 1600px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 75vw;
    left: 0;
    right: 0;
    top: -261px;
    bottom: 0;
    margin: auto;
    gap: 10px;

    .content {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 25px;

      h1 {
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 400;
        font-size: 3rem;
      }

      p {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        max-width: 500px;
      }

      .content-button {
        display: flex;

        a {
          background-color: #9a1a4b;
          width: 40px;
          height: 40px;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
        }

        small {
          background-color: #282b62;
          display: flex;
          justify-content: center;
          padding: 10px 20px;
          font-family: 'Merriweather';
          font-style: normal;
          font-weight: 700;
          font-size: 0.875rem;
        }
      }
    }

    @media screen and (max-width: 1300px) {
      justify-content: right;
      position: static;
      width: 100vw;
      padding: 0 25px;
      justify-content: center;
      top: -90px;

      .content {
        display: none;
      }
    }

    .pagination {
      display: flex;

      .pagination-control {
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
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }

    @media screen and (max-width: 1000px) {
      height: auto;

      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }

      .pagination {

        .pagination-control {
          width: 300px;
          padding: 0 20px;
        }
      }
    }

    @media screen and (max-width: 374px) {
      .pagination {
        .pagination-control {
          gap: 10px;
          width: 280px;
          padding: 0 10px;
        }
      }
    }

    button {
      background-color: #9a1a4b;
      width: 40px;
      height: 40px;
      border: none;
      cursor: pointer;
    }
  }

  .img {
    width: 100vw;
  }
`

function Banner() {
  const carousel = useRef<HTMLInputElement>(null)
  const [scrolling, setScrolling] = useState(false)
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
      setScrolling(true)
      if (carousel.current.scrollLeft < 12*carousel.current.clientWidth) {
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
      setTimeout(() => {
        setScrolling(false)
      }, carousel.current.clientWidth*0.5);
    }
  }

  const scrollMobile = () => {
    if (carousel.current != null) {
      setScrolling(true)
      if (carousel.current.scrollLeft < 6*carousel.current.clientWidth) {
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
      setTimeout(() => {
        setScrolling(false)
      }, carousel.current.clientWidth + 400);
    }
  }

  return (
    <BannerStyled>
      <div ref={carousel} className="carousel">
        <img alt="" src="/background.png" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
        <img alt="" src="/banner-1.jpg" />
      </div>
      <div className='layer' />
      <div className="banner-control">
        <div className='content'>
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie elit vitae odio blandit mauris ac aenean pellentesque.</p>
          <div className='content-button'>
            <a className='desktop'>
              <Image
                alt="ícone de seta para esquerda"
                height={14}
                src="/arrow-right.svg"
                width={7}
              />
            </a>
            <small>Ver mais</small>
          </div>
        </div>
        <div className="pagination">
          <div className="pagination-control">
            <p>01</p>
            {carouselPagination.map((page: boolean, index: number) => (
              <div key={Number(index)} className={index > 6 ? 'desktop' : ''}>
                <LineIcon hover={page} size={20} />
              </div>
            ))}
            <p className="desktop">13</p>
            <p className="mobile">07</p>
          </div>
          <button
            className={
              carouselScrollLeft >= carouselTotalScroll
                ? 'desktop desactive'
                : 'desktop'
            }
            onClick={scroll}
            disabled={scrolling}
          >
            <Image
              alt="ícone de seta para esquerda"
              height={14}
              src="/arrow-right.svg"
              width={7}
            />
          </button>
          <button className="mobile" onClick={scrollMobile} disabled={scrolling}>
            <Image
              alt="ícone de seta para esquerda"
              height={14}
              src="/arrow-right.svg"
              width={7}
            />
          </button>
        </div>
      </div>
      <div className='contentMobile'>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie elit vitae odio blandit mauris ac aenean pellentesque.</p>
        <div className='content-button'>
          <a className='desktop'>
            <Image
              alt="ícone de seta para esquerda"
              height={14}
              src="/arrow-right.svg"
              width={7}
            />
          </a>
          <small>Ver mais</small>
        </div>
      </div>
    </BannerStyled>
  )
}

export default Banner
