import styled from 'styled-components'

const FooterStyled = styled.div`
  background-color: #282b62;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    color: white;
    padding: 50px 0;

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
            <li>Apresentação</li>
            <li>Organograma/Contatos</li>
            <li>Corpo Docente</li>
            <li>Corpo Técnico-Administrativo</li>
            <li>Ingresso</li>
            <li>Como Chegar</li>
          </ul>
        </div>
        <div>
          <h1>Ensino e Pesquisa</h1>
          <ul>
            <li>Graduação</li>
            <li>Pós-Graduação</li>
            <li>Grupos de Pesquisa</li>
            <li>Produção Acadêmica</li>
          </ul>
        </div>
        <div>
          <h1>Extensão</h1>
          <ul>
            <li>Cia de Teatro</li>
            <li>Curso Livre</li>
            <li>Ato de 4</li>
            <li>Outros projetos</li>
          </ul>
        </div>
        <div>
          <h1>Espaços</h1>
          <ul>
            <li>Casarão</li>
            <li>Pavilhão de Aulas</li>
            <li>Teatro Martim Gonçalves</li>
            <li>Sala 05</li>
            <li>Galeria Nilda Spencer</li>
            <li>Carpintaria</li>
            <li>Rouparia</li>
          </ul>
        </div>
        <div>
          <h1>Agenda</h1>
          <ul>
            <li>Eventos</li>
            <li>Espetáculos</li>
            <li>Seminários</li>
          </ul>
        </div>
        <div>
          <h1>Galeria Virtual</h1>
          <ul>
            <li>Galeria Virtual</li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  )
}

export default FooterDown
