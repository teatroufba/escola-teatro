import Link from 'next/link'
import styled from 'styled-components'

const FooterStyled = styled.div`
  background-color: #282b62;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    color: white;
    padding: 50px 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 49px;
      padding: 0;

      h1 {
        font-size: 1.5rem;
        font-family: 'Merriweather';
        font-weight: 400;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 0;

        li {
          font-size: 1rem;
          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
`

function FooterDown() {
  return (
    <FooterStyled>
      <div>
        <div>
          <h1>A Escola</h1>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">Apresentação</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Organograma/Contatos</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Corpo Docente</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Corpo Técnico-Administrativo</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Ingresso</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Como Chegar</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Ensino e Pesquisa</h1>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">Graduação</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Pós-Graduação</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Grupos de Pesquisa</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Produção Acadêmica</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Extensão</h1>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">Cia de Teatro</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Curso Livre</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Ato de 4</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Outros projetos</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Espaços</h1>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">Casarão</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Pavilhão de Aulas</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Teatro Martim Gonçalves</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Sala 05</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Galeria Nilda Spencer</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Carpintaria</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Rouparia</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Agenda</h1>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">Eventos</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Espetáculos</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a href="replace">Seminários</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Galeria Virtual</h1>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace">Galeria Virtual</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  )
}

export default FooterDown
