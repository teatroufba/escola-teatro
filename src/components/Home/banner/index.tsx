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

    .imagem-banner {
      min-width: 100vw;
      height: 39.06vw;
      position: relative;
    }
  }

  .layer {
    display: none;
    width: 100%;
    max-height: 750px;
    height: 39.06vw;
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

    @media (max-width: 1300px) {
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
    @media (max-width: 550px) {
      .contentMobile h1{
        font-size: 1.2rem !important;
      }
    }
    @media (max-width: 768px) {
      .contentMobile small{
        width:2rem !important;
        height:2rem !important;
        font-size: .5rem !important;
        display: flex;
        align-items: center !important;
      }
      .contentMobile{
        .content-button {
          display: none;
          justify-content: right;

          a {
            background-color: #9a1a4b;
            width: 1.5rem !important;
            height: 1.5rem !important;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
          }

          small {
            background-color: #282b62;
            display: flex;
            justify-content: center;
            width: 1.5rem !important;
            height: 1.5rem !important;
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 0.875rem;
          }
        }
      }
    }

    .contentMobile {
      width: 80%;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 25px;

        h1 {
          font-family: 'Merriweather';
          font-style: normal;
          font-weight: 400;
          font-size: 2rem;
        }

        p {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 400;
          font-size: .8rem;
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

      @media (max-width: 1300px) {
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

      @media screen and (max-width: 600px) {
        top: calc(-35.06vw - 176px);

        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 0.875rem;
          display: none;
        }

        .content-button {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 1920px) {
    .layer {
      top: -39.06vw;
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
      gap: 20px;

      h1 {
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 400;
        font-size: 2.5rem;
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
      margin: 0 auto;
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
        max-width: 484px;
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

interface IBanner {
  imageAlt: string;
  imageUrl: string;
  title: string;
  descricao: string;
  link: string
}

function Banner({ banner }: { banner: IBanner[] }) {
  const carousel = useRef<HTMLInputElement>(null)
  const [scrolling, setScrolling] = useState(false)
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
  const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    if (carousel.current != null) {
      setCarouselTotalScroll(
        Number(carousel.current.scrollWidth - carousel.current.clientWidth)
      )

      carousel.current.addEventListener('scroll', mudaPagina)
    }
  }, [carouselScrollLeft])

  const mudaPagina = () => {
    if (carousel.current != null) {
      setPagina(Math.round(carousel.current.scrollWidth / (carousel.current.scrollWidth - carousel.current.scrollLeft)))
    }
  }

  const scroll = () => {
    if (carousel.current != null) {
      setScrolling(true)
      if (pagina < banner.length) {
        setCarouselScrollLeft(
          Number(carousel.current.scrollLeft + carousel.current.clientWidth)
        )
        carousel.current.scrollLeft += carousel.current.clientWidth
      } else {
        setCarouselScrollLeft(0)
        carousel.current.scrollLeft = 0
      }
      setTimeout(() => {
        setScrolling(false)
      }, carousel.current.clientWidth*0.5);
    }
  }

  const scrollMobile = () => {
    if (carousel.current != null) {
      setScrolling(true)
      if (pagina < banner.length) {
        setCarouselScrollLeft(
          Number(carousel.current.scrollLeft + carousel.current.clientWidth)
        )
        carousel.current.scrollLeft += carousel.current.clientWidth
      } else {
        setCarouselScrollLeft(0)
        carousel.current.scrollLeft = 0
      }
      setTimeout(() => {
        setScrolling(false)
      }, carousel.current.clientWidth + 400);
    }
  }

  return (
    <BannerStyled>
      <div ref={carousel} className="carousel">
        {banner.map((item, index) => (
          <div className='imagem-banner' key={`banner${index}`}>
            <Image
              src={item.imageUrl ? item.imageUrl : '/'}
              alt={item.imageAlt ? item.imageAlt : '/'}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ))}
      </div>
      <div className='layer' />
      <div className="banner-control">
        <div className='content'>
          <h1>{banner[pagina-1].title}</h1>
          <p>{banner[pagina-1].descricao}</p>
          <div className='content-button'>
            <a 
              href={banner[pagina-1].link ? 
                `//${banner[pagina-1].link}/` : "/"}
              className='desktop'>
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
            <p>1</p>
            {banner.map((item, index) => (
              <div key={`paginacao-banner${index}`} className={index > 6 ? 'desktop' : ''}>
                <LineIcon hover={pagina == index + 1} size={20} />
              </div>
            ))}
            <p className="desktop">{banner.length}</p>
            <p className="mobile">{banner.length}</p>
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
          <h1>{banner[pagina-1].title}</h1>
          <p>{banner[pagina-1].descricao}</p>
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
