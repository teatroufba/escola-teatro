import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import { ConcursoIcon, GaleriaIcon, SolicitacoesIcon } from "./icons";

const AcessoRapidoStyled = styled.div`
  background-color: #282b62;
  display: flex;
  padding: 100px 0;
  justify-content: center;
  gap: 17.55%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 64px;
    align-items: center;
    justify-content: flex-start;
  }

  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: "Merriweather";
      color: white;
    }
  }

  div:hover h3 {
    color: #9a1a4b;
  }

  @media (max-width: 1000px) {
    div {
      flex-direction: row;
      gap: 30px;
      align-items: center;
      justify-content: center;
      max-width: 270px;
      h3 {
        max-width: 141px;
      }
    }
  }
`;

function AcessoRapido() {
  const [hover, setHover] = useState([false, false, false]);

  const handleMouseEnterS = () => {
    setHover([true, false, false]);
  };

  const handleMouseEnterC = () => {
    setHover([false, true, false]);
  };

  const handleMouseEnterG = () => {
    setHover([false, false, true]);
  };

  const handleMouseLeave = () => {
    setHover([false, false, false]);
  };

  return (
    <AcessoRapidoStyled>
      <Link href="/publicacoes/solicitacoes" passHref>
        <a>
          <div onMouseEnter={handleMouseEnterS} onMouseLeave={handleMouseLeave}>
            <SolicitacoesIcon size={100} hover={hover[0]} />
            <h3>Solicitações</h3>
          </div>
        </a>
      </Link>
      <Link href="/publicacoes/selecoes-e-concursos" passHref>
        <a>
          <div onMouseEnter={handleMouseEnterC} onMouseLeave={handleMouseLeave}>
            <ConcursoIcon size={100} hover={hover[1]} />
            <h3>Seleções e Concursos</h3>
          </div>
        </a>
      </Link>
      <Link href="/galeria" passHref>
        <a>
          <div onMouseEnter={handleMouseEnterG} onMouseLeave={handleMouseLeave}>
            <GaleriaIcon size={100} hover={hover[2]} />
            <h3>Galeria Virtual</h3>
          </div>
        </a>
      </Link>
    </AcessoRapidoStyled>
  );
}

export default AcessoRapido;
