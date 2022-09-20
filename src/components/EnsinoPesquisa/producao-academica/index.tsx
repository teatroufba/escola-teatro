/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import Link from 'next/link'
import styled from 'styled-components'

import CarouselRevistaLivro from '@/components/EnsinoPesquisa/carousel-revista-livro'

const Container = styled.div`
  width: 100vw;
  text-align: center;
  padding: 130px 0 200px 0;
  background-color: white;

  @media (max-width: 1024px) {
    padding: 40px 0;
    width: calc(100vw - 40px);
  }

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

    @media (max-width: 1024px) {
      text-align: left;
    }
  }

  .groups .tcc {
    width: 1235px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (max-width: 1400px) {
      max-width: 815px;
      width: 100%;
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

      @media (max-width: 1400px) {
        flex-direction: column;
      }

      .link {
        width: calc((100% - 75px)/4);
        height: 290px;
        background-color: #2D2B78;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        @media (max-width: 1400px) {
          width: 100%;
          padding: 1rem;
          height: auto;
        }
        
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

          @media (max-width: 1400px) {
            justify-content: left;
          }

          p {
            color: #F7F6F5;
            font-family: 'Merriweather';
            font-style: normal;
            font-size: 2rem;

            @media (max-width: 1024px) {
              font-size: 1.25rem;
            }
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
