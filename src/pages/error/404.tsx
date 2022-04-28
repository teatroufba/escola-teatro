import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Button from '@/components/button'

const Container = styled.div`
  height: calc(100vh - 370px);
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h1 {
    font-family: 'Merriweather', serif;
    font-weight: 400;
    font-size: 3rem;
    color: black;
  }

  p {
    font-family: 'Arial';
    font-weight: 400;
    font-size: 1rem;
  }
`

function ErrorPage() {
  return (
    <Container>
      <Image
        src="/logo-fundo-claro.png"
        width={123}
        height={110}
        alt="Brasão da Escola de teatro"
      />
      <h1>Erro 404</h1>
      <p>
        A página solicitada não existe ou não se encontra mais em nossa base.
      </p>
      <Link href="/" passHref>
        <a href="replace">
          <Button>Voltar para o início</Button>
        </a>
      </Link>
    </Container>
  )
}

export default ErrorPage
