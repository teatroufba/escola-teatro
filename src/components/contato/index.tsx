import styled from 'styled-components'

const ContatoStyled = styled.div`
  display: flex;
  margin: 100px 0;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 60px;

  h1 {
    color: #282b62;
    text-decoration: underline;
    font-size: 3rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 25px;

    iframe {
      border: none;
      max-width: 605px;
      width: 40vw;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    form {
      width: 40vw;
      max-width: 605px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 17px;

      @media screen and (max-width: 768px) {
        width: 86.667vw;
      }

      input,
      textarea {
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        font-family: 'Arial';
        font-size: 1rem;

        &::-webkit-input-placeholder {
          /* Edge */
          color: #958fa0;
          font-family: 'Arial';
          font-size: 1rem;
        }

        &:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #958fa0;
          font-family: 'Arial';
          font-size: 1rem;
        }

        &::placeholder {
          color: #958fa0;
          font-family: 'Arial';
          font-size: 1rem;
        }
      }

      textarea {
        resize: none;
        height: 145px;
      }

      button {
        color: #f7f6f5;
        padding: 12px 0;
        background-color: #2d2b78;
        text-align: center;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`

function Contato() {
  return (
    <ContatoStyled>
      <h1>Contato</h1>
      <div>
        <iframe
          title="Escola de Teatro da UFBA"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.720594717637!2d-38.52164!3d-12.992298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14a62291b236efbf!2sEscola%20de%20Teatro%20da%20UFBA!5e0!3m2!1spt-BR!2sbr!4v1657715808611!5m2!1spt-BR!2sbr"
          width="605"
          height="336"
          loading="lazy"
        />
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <textarea name="" id="" placeholder="Mensagem" />
          <button>Enviar</button>
        </form>
      </div>
    </ContatoStyled>
  )
}

export default Contato
