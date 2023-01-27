import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Button from "@/components/basics/button";

const Container = styled.div`
  height: calc(100vh - 370px);
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h1 {
    font-family: "Merriweather", serif;
    font-weight: 400;
    font-size: 3rem;
    color: black;
  }

  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 1rem;
  }
`;

function ErrorPage404() {
  return (
    <Container>
      <Link passHref href="/">
        <a href="replace" id='brasao' > 
          <Image
            alt="Brasão da Escola de Teatro"
            height={105}
            src="/brasao.png"
            width={120}
          />
        </a>
      </Link>
      <h1>Erro 404</h1>
      <p>
        A página solicitada não existe ou não se encontra mais em nossa base.
      </p>
      <Link passHref href="/">
        <a href="replace">
          <Button>Voltar para o início</Button>
        </a>
      </Link>
    </Container>
  );
}

export default ErrorPage404;
