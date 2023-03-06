/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SetStateAction, useState } from 'react'
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
  .checkboxSpan{
    font-size: 18px;
    font-family: 'Arial';
    font-size: 1rem;
  }

  .checkboxDiv{
    display: flex;
    gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

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

    @media screen and (max-width:452px){
      .checkboxSpan{
        font-size: 13px !important;
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
        &:hover {
          background-color: #9a1a4b;
        }
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
  const [nameForm, setNameForm] = useState('')
  const [nameEmpty, setNameEmpty] = useState(true)
  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setNameForm(event.target.value);
  }
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
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Nome"
            onChange={handleChange}
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
          {nameForm.length > 0 && 
          <div className='checkboxDiv'>
            <input required type="checkbox"></input>
            <p className='checkboxSpan'>Eu autorizo o uso desses dados como meios de contato.</p>
          </div>
          }
          <button type="submit">Enviar</button>
        </form>
      </div>
    </ContatoStyled>
  )
}

export default Contato
