/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

const ContatoStyled = styled.div`
  display: flex;
  margin: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 60px;

  .title {
    font-family: 'Merriweather';
    color: #282b62;
    font-size: 48px;
    font-weight: 400;
    display: inline-block;
    border-bottom: 5px solid #282b62;
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

      .inputError {
        border: 1px solid red;

        &::-webkit-input-placeholder {
          /* Edge */
          color: red;
        }

        &:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: red;
        }

        &::placeholder {
          color: red;
        }
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

type FormData = {
  name: string
  email: string
  message: string
}

function Contato() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = data => {
    fetch('/api/mail', { method: 'post', body: JSON.stringify(data) }).then(
      res => {
        if (res.status === 200) {
          reset()
          alert('Email enviado!')
        } else {
          alert(
            'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
          )
        }
      }
    )
  }

  return (
    <ContatoStyled>
      <h1 className='title'>Contato</h1>
      <div>
        <iframe
          title="Escola de Teatro da UFBA"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.720594717637!2d-38.52164!3d-12.992298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14a62291b236efbf!2sEscola%20de%20Teatro%20da%20UFBA!5e0!3m2!1spt-BR!2sbr!4v1657715808611!5m2!1spt-BR!2sbr"
          width="605"
          height="336"
          loading="lazy"
        />
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Nome"
          />
          <input
            type="text"
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i,
            })}
            placeholder="Email"
          />
          <textarea
            {...register('message', {
              required: true,
            })}
            placeholder="Mensagem"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </ContatoStyled>
  )
}

export default Contato
