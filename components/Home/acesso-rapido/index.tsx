import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

import { ConcursoIcon, GaleriaIcon, SolicitacoesIcon } from './icons'

const AcessoRapidoStyled = styled.div`
  background-color: #282b62;
  display: flex;
  padding: 100px 0;
  justify-content: center;
  gap: 17.55%;

  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: 'Merriweather';
      color: white;
    }
  }

  div:hover h3 {
    color: #9a1a4b;
  }
`

function AcessoRapido() {
  const [hover, setHover] = useState([false, false, false])

  const handleMouseEnterS = () => {
    setHover([true, false, false])
  }

  const handleMouseEnterC = () => {
    setHover([false, true, false])
  }

  const handleMouseEnterG = () => {
    setHover([false, false, true])
  }

  const handleMouseLeave = () => {
    setHover([false, false, false])
  }

  return (
    <AcessoRapidoStyled>
      <Link href="/" passHref>
        <div onMouseEnter={handleMouseEnterS} onMouseLeave={handleMouseLeave}>
          <SolicitacoesIcon size={100} hover={hover[0]} />
          <h3>Solicitações</h3>
        </div>
      </Link>
      <Link href="/" passHref>
        <div onMouseEnter={handleMouseEnterC} onMouseLeave={handleMouseLeave}>
          <ConcursoIcon size={100} hover={hover[1]} />
          <h3>Seleções e Concursos</h3>
        </div>
      </Link>
      <Link href="/" passHref>
        <div onMouseEnter={handleMouseEnterG} onMouseLeave={handleMouseLeave}>
          <GaleriaIcon size={100} hover={hover[2]} />
          <h3>Galeria Virtual</h3>
        </div>
      </Link>
    </AcessoRapidoStyled>
  )
}

export default AcessoRapido
