import React from "react";
import styled from "styled-components";
import Image from "next/image";
import image from "@/public/brasao.png";
import Head from "next/head";
export default function Error() {
  return (
    <>
      <Head>
        <title>Error 404 - Escola de Teatro da UFBA</title>
      </Head>

      <ErrorContainer>
        <div className="content">
          <Image alt="brasao" src={image} />
          <h1>Error 404</h1>

          <p>
            A página solicitada não existe ou não se encontra mais em nossa
            base.
          </p>
          <button>
            <a href="/">Voltar para o início</a>
          </button>
        </div>
      </ErrorContainer>
    </>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 26px 0;

  width: 100%;
  height: 50vh;
  max-height: 1000px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    gap: 24px;

    h1,
    p {
      font-family: "Merriweather";
      font-size: 48px;
    }

    p {
      font-size: 20px;
      text-align: center;
    }

    button {
      font-size: 16px;
      color: #fff;
      font-weight: 700;
      background-color: #2d2b78;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      line-height: 20px;
      a {
        color: #fff;
        text-decoration: none;
      }
      &:hover {
        cursor: pointer;
        filter: brightness(0.85);
      }
    }
  }
`;
