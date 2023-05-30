/* eslint-disable no-multi-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PrismicRichText } from "@prismicio/react";

import { StyledPostNoticiaMain } from "./styles";

interface IPostagem {
  author: string;
  date: string;
  first_publication_date?: string;
  imageAlt?: string;
  imageUrl: string;
  last_publication_date: Date;
  subtitle: string;
  text: [];
  title: string;
  document: string;
  document2: string;
  document3: string;
  document4: string;
  document5: string;
  document6: string;
  documentName: string;
  documentName2: string;
  documentName3: string;
  documentName4: string;
  documentName5: string;
  documentName6: string;
}
export default function Postagem({
  title,
  date,
  subtitle,
  text,
  imageUrl,
  imageAlt,
  author,
  last_publication_date,
  first_publication_date,
  document,
  document2,
  document3,
  document4,
  document5,
  document6,
  documentName,
  documentName2,
  documentName3,
  documentName4,
  documentName5,
  documentName6,
}: IPostagem) {
  const oneMinute = 1000 * 60;
  const data = new Date(date);
  let dia = data.getDate().toString();
  let mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  let mesNumero = mes.toString();
  if (dia.length === 1) {
    dia = `0${dia}`;
  }
  if (mesNumero.length === 1) {
    mesNumero = `0${mes}`;
  }
  const primeiraData = first_publication_date?.replace(
    /\/(\d{1,2})/,
    (match, p1) => `/${+p1 + 1}`
  ); // substitui o numero do mes pelo numero correto
  // nao sei pq mas o first_publication_date vem sempre com o mes errado

  const calculateLastAtt = () =>
    formatDistance(last_publication_date, new Date(), {
      addSuffix: true,
      locale: ptBR,
    });

  const [lastAtt, setLastAtt] = useState(calculateLastAtt());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastAtt(calculateLastAtt());
    }, oneMinute);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <StyledPost>
      <div id='img-post'>
        {imageUrl ? (
          <Image
            alt={imageAlt}
            src={imageUrl}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        ) : null}
      </div>
      <div className="post-content">
        <div className="post-header">
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <span>
            <p>
              Por <b>{author}</b> <br />
              {first_publication_date} &nbsp;&nbsp;Atualizado {lastAtt}
            </p>
          </span>
        </div>
        <div className='post-text'>
          <PrismicRichText
            field={text}
            components={{
              paragraph: ({ children }) => <p>{children}</p>,
            }}
          />
        </div>
        <div className="btn-align-left">
          <button type="button">
            <Link passHref href="/noticias">
              Ver outras notícias
            </Link>
          </button>
        </div>
      </div>
    </StyledPost> */}

      <StyledPostNoticiaMain>
        <div id="container-img-noticia">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div id="container-baixo-noticia">
          <div id="container-info-noticia">
            <div id="container-header-noticia">
              <h1 className="title">{title}</h1>
              <p className="subtitle">{subtitle}</p>

              <span>
                <p>
                  Por <b>{author}</b> <br />
                  {`${dia}/${mesNumero}/${ano}`} &nbsp;&nbsp;Atualizado{" "}
                  {lastAtt}
                </p>
              </span>

              <span className="hr-line"></span>
            </div>
          </div>

          <div id="conteudo-post-noticia">
            <PrismicRichText
              field={text}
              components={{
                paragraph: ({ children }) => <p className="">{children}</p>,
              }}
            />
          </div>
          <div className="documentDisplay">
            {document ? (
              <Link href={document} passHref>
                <a className="button-document-div">
                  <button className="button-document">
                    <p>{documentName}</p>
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
            {document2 ? (
              <Link href={document2} passHref>
                <a className="button-document-div">
                  <button className="button-document">
                    <p>{documentName2}</p>
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
            {document3 ? (
              <Link href={document3} passHref>
                <a className="button-document-div">
                  <button className="button-document">
                    <p>{documentName3}</p>
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
            {document4 ? (
              <Link href={document4} passHref>
                <a className="button-document-div">
                  <button className="button-document">
                    <p>{documentName4}</p>
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
            {document5 ? (
              <Link href={document5} passHref>
                <a className="button-document-div">
                  <button className="button-document">
                    <p>{documentName5}</p>
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
            {document6 ? (
              <Link href={document6} passHref>
                <a className="button-document-div">
                  <button className="button-document">
                    <p>{documentName6}</p>
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="btn-align-left">
          <button type="button">
            <Link passHref href="/noticias">
              <a>Ver outras notícias</a>
            </Link>
          </button>
        </div>
      </StyledPostNoticiaMain>
    </>
  );
}
