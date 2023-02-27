import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { LineIcon } from './icons'

const BannerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 750px;
  height: 39.06vw;
  .mobileAbsolute{
    display: none;
  }
  a{
    all: unset;
    cursor: pointer !important
  }
  @media screen and (max-width: 1300px) {
    height: calc(39.06vw + 40px);
  }

  .carousel {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    overflow-x: scroll;
    display: flex;
    scroll-behavior: smooth;
    align-items: center;
    z-index: 0;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    .imagem-banner {
      min-width: 100%;
      height: 39.06vw;
      position: relative;
    }
  }

  .layer {
    position: absolute;
    display: none;
    width: 100%;
    max-height: 750px;
    height: 39.06vw;
    background-color: #9a1a4b;
    opacity: 0.7;
    left: 0;
    right: 0;
    bottom: 0;

    @media (max-width: 1300px) {
      margin-bottom: 40px;
    }
  }

  .contentMobile {
    display: none;
  }

  @media (max-width: 1300px) {
    .pagination{
      display: flex;
      justify-content: space-between;
      width:100%;
      align-items: center;
      display: none;
      padding-bottom: 23%;
    }
    .pagination-control{
      display: none !important;
    }
  }

  @media (max-width: 650px) {
    button {
      display: flex;
      align-items: center;
      justify-content:center;
      background-color: #9a1a4b;
      width: 25px !important;
      height: 25px !important;
      border: none;
      cursor: pointer;
    }
    .pagination{
      display: flex;
      justify-content: space-between;
      width:100%;
      align-items: center;
      display: none;
      padding-bottom: 28%;
    }
  }

  &:hover {
    .layer {
      display: unset;
    }

    @media (max-width: 1300px) {
      .contentMobile{
        display: none !important;
      }
      .layer {
        display: none;
      }
    }
    @media (max-width: 550px) {
      .contentMobile h1{
        font-size: 1.2rem !important;
      }
    }
    @media (max-width: 768px) {
      .contentMobile small{
        height:2rem !important;
        font-size: .5rem !important;
        display: flex;
        flex-wrap: nowrap;
        align-items: center !important;
        text-decoration: none !important;
      }
      .contentMobile{
        .content-button {
          display: none;

          #linkBanner {
            background-color: #9a1a4b;
            width: 1.5rem !important;
            height: 1.5rem !important;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            text-decoration: none !important;
          }

          small {
            background-color: #282b62;
            display: flex;
            justify-content: center;
            height: 1.5rem !important;
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 0.875rem;
            text-decoration: none !important;
          }
        }
      }
    }

    .contentMobile {
      color: white;
      height: calc(100% - 40px);
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 25px;
      padding: 0 12vw 15px 12vw;

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

          #linkBanner {
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
            text-decoration: none !important;

            @media (max-width: 768px) {
              padding: 0 10px;
            }
          }
        }

      @media (max-width: 1300px) {
        position: absolute;
        display: flex;
        margin: 0 auto;

        .content-button {
          display: flex;
        }
      }

      @media screen and (max-width: 600px) {

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

  .banner-control {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 75vw;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    gap: 10px;
    height: 100%;
    padding-bottom: 80px;

    .content {
      max-width: 40vw;
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

        #linkBanner {
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
          text-decoration: none !important;
        }
      }
    }

    .mobileAbsoluteLink{
      display: none;
    }

    @media screen and (max-width: 1300px) {
      justify-content: right;
      position: absolute;
      width: 100vw;
      margin: 0 auto;
      justify-content: center;
      padding: 0;

      .mobileAbsoluteLink{
        width: 80%;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        bottom: 3.5rem;
        position: absolute;
        color: #fff;
        
      }
      .mobileAbsoluteLink small{
        width: 100px;
        background-color: #282b62;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem !important;
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        text-decoration: none !important;
      }
      .imageLinkMobile{
        width: 40px;
        display: flex;
        justify-content: center;
        height: 2rem !important;
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        text-decoration: none !important;
        background-color: #9a1a4b;
      }
      .mobileAbsolute{
        width: 100% !important;
        display: flex;
        margin: 0 auto;
        text-align: center;
        flex-direction: column;
        bottom: 2.5rem;
        position: absolute;
        color: #fff;
      }

      .mobileAbsoluteTitle {
        width: 100% !important;
        font-family: "Merriweather";
        font-weight: 400;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 1.2rem;
      }

      .mobileAbsoluteParagraph{
        background-color: #282b62;
        width: 100% !important;
        overflow: hidden;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        align-items:flex-start;
      }
      .internDivParagraph{
        width: 80% !important;
        box-align: start;
        -webkit-box-align: start;
        margin: 0 auto;
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

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
      .mobileAbsoluteTitle {
        font-size: 1rem;
      }

      .mobileAbsoluteParagraph{
        font-size: 1rem;
      }

      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }

      .pagination {

        .pagination-control {
          max-width: 300px;
        }
      }
    }
    @media screen and (max-width: 650px) {

      .mobileAbsoluteTitle {
        font-size: .7rem;
      }
      .mobileAbsoluteLink small{
        width: 90px;
        font-size: 0.8rem;
        height: 1.5rem !important;
      }
      .imageLinkMobile{
        width: 30px;
        height: 1.5rem !important;
        
      }

      .mobileAbsoluteParagraph{
        background-color: #282b62;
        width: 100% !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: .8rem;
      }
    }
    @media screen and (max-width: 400px) {

      .mobileAbsoluteTitle {
        font-size: .7rem;
        font-weight: 400;
      }

      .mobileAbsoluteParagraph{
        font-weight: 400;
        font-size: .7rem;
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
      setPagina(Math.round((carousel.current.scrollLeft) / carousel.current.clientWidth) + 1)
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

  const scrollBack = () => {
    if (carousel.current != null) {
      setScrolling(true)
      if (pagina > 1) {
        setCarouselScrollLeft(
          Number(carousel.current.scrollLeft - carousel.current.clientWidth)
        )
        carousel.current.scrollLeft -= carousel.current.clientWidth
      } else {
        setCarouselScrollLeft(banner.length)
        carousel.current.scrollLeft = carousel.current.clientWidth * banner.length
      }
      setTimeout(() => {
        setScrolling(false)
      }, carousel.current.clientWidth*0.5);
    }
  }

  const scrollBackMobile = () => {
    if (carousel.current != null) {
      setScrolling(true)
      if (pagina > 1) {
        setCarouselScrollLeft(
          Number(carousel.current.scrollLeft - carousel.current.clientWidth)
        )
        carousel.current.scrollLeft -= carousel.current.clientWidth
      } else {
        setCarouselScrollLeft(banner.length)
        carousel.current.scrollLeft = carousel.current.clientWidth * banner.length
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
            {banner[pagina-1].title &&
              <Image
              src={item.imageUrl ? item.imageUrl : '/'}
              alt={item.imageAlt ? item.imageAlt : '/'}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className='imageBannerHome'
            />
            }
            {!banner[pagina-1].title &&
              <a href={banner[pagina-1].link ? 
                  `//${banner[pagina-1].link}/` : "/"}>
              <Image
              src={item.imageUrl ? item.imageUrl : '/'}
              alt={item.imageAlt ? item.imageAlt : '/'}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className='imageBannerHome'
              />
              </a>
            }
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
              className='desktop' id='linkBanner'>
              <Image
                alt="ícone de seta para esquerda"
                height={14}
                src="/arrow-right.svg"
                width={7}
              />
            </a>
            <a href={banner[pagina-1].link ? 
                `//${banner[pagina-1].link}/` : "/"}>
              <small>Ver mais</small>
            </a>
          </div>
        </div>
            {!banner[pagina-1].title && !banner[pagina-1].descricao &&
            <div className='mobileAbsoluteLink'>
              <a 
              href={banner[pagina-1].link ? 
                `//${banner[pagina-1].link}/` : "/"}
              className='imageLinkMobile'>
              <Image
                alt="ícone de seta para esquerda"
                height={14}
                src="/arrow-right.svg"
                width={7}
              />
              </a>
              <a href={banner[pagina-1].link ? 
                  `//${banner[pagina-1].link}/` : "/"}>
                <small>Ver mais</small>
              </a>
            </div>
            }
          <div className='mobileAbsolute'>
          <a href={banner[pagina-1].link ? 
                `//${banner[pagina-1].link}/` : "/"}>
            <div className='mobileAbsoluteTitle'>
              <div className='internDivParagraph'>
                <h1>{banner[pagina-1].title}</h1>
              </div>
            </div>
            <div className='mobileAbsoluteParagraph'>
              <div className='internDivParagraph'>
                <p>{banner[pagina-1].descricao}</p>
              </div>
            </div>
            </a>
          </div>
        <div className="pagination">
          <button
            className={
              carouselScrollLeft >= carouselTotalScroll
                ? 'desktop desactive'
                : 'desktop'
            }
            onClick={scrollBack}
            disabled={scrolling}
          >
            <Image
              alt="ícone de seta para esquerda"
              height={14}
              src="/arrow-right.svg"
              width={7}
              style={{transform: 'scaleX(-1)'}}
            />
          </button>
          <button className="mobile" onClick={scrollBackMobile} disabled={scrolling}>
            <Image
              alt="ícone de seta para esquerda"
              height={14}
              src="/arrow-right.svg"
              width={7}
              style={{transform: 'scaleX(-1)'}}
            />
          </button>
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
          <a href={banner[pagina-1].link ? 
                `//${banner[pagina-1].link}/` : "/"}
                 className='desktop' id='linkBanner'>
            <Image
              alt="ícone de seta para esquerda"
              height={14}
              src="/arrow-right.svg"
              width={7}
            />
          </a>
        </div>
      </div>
    </BannerStyled>
  )
}

export default Banner
