/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import Link from 'next/link'
import styled from 'styled-components'

import CarouselRevistaLivro from '@/components/carousel-revista-livro'

const Container = styled.div`
  width: 100vw;
  text-align: center;
  padding: 130px 0 200px 0;
  background-color: white;

  .groups {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  h1 {
    font-family: 'Merriweather';
    color: #2D2B78;
    border-bottom: 5px solid #282b62;
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 3rem;
  }

  .groups .tcc {
    width: 1235px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

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

    .links {
      display: flex;
      gap: 25px;

      .link {
        width: calc((100% - 75px)/4);
        height: 290px;
        background-color: #2D2B78;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        &:hover {
          background-color: #9A1A4B;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          text-decoration: none;
          p {
            color: #F7F6F5;
            font-family: 'Merriweather';
            font-style: normal;
            font-size: 2rem;
          }
        }
      }
    }
  }

`

function ProducaoAcademica() {
  return (
    <Container>
        <h1>Produção Acadêmica</h1>
        <div className='groups'>
            <div className='tcc'>
              <h2>Trabalhos de Conclusão de Curso - TCC</h2>
              <div className='links'>
                <div className='link'>
                  <Link passHref href="/">
                    <a href="replace"><p>Monografias</p></a>
                  </Link>
                </div>
                <div className='link'>
                  <Link passHref href="/">
                    <a href="replace"><p>Espetáculos de Formatura</p></a>
                  </Link>
                </div>
                <div className='link'>
                  <Link passHref href="/">
                    <a href="replace"><p>Dissertações</p></a>
                  </Link>
                </div>
                <div className='link'>
                  <Link passHref href="/">
                    <a href="replace"><p>Teses</p></a>
                  </Link>
                </div>
              </div>
            </div>
            <CarouselRevistaLivro/>
            <CarouselRevistaLivro/>
        </div>
    </Container>
  )
}

export default ProducaoAcademica
