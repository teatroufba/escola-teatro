/* eslint-disable no-multi-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatDistance } from 'date-fns'
import { ptBR} from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PrismicRichText } from "@prismicio/react"

import { StyledPost } from './styles';

interface IPostagem {
  author: string
  first_publication_date?: string
  imageAlt?: string
  imageHeight: string
  imageUrl: string
  imageWidth: string
  last_publication_date: Date
  subtitle: string
  text: []
  title: string
}
export default function Postagem({
  title,
  subtitle,
  text,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  author,
  last_publication_date,
  first_publication_date,
}: IPostagem) {
  const oneMinute = 1000 * 60

  const calculateLastAtt = () =>
    formatDistance(last_publication_date, new Date(), {
      addSuffix: true,
      locale: ptBR,
    })

  const [lastAtt, setLastAtt] = useState(calculateLastAtt())

  useEffect(() => {
    const interval = setInterval(() => {
      setLastAtt(calculateLastAtt())
    }, oneMinute)
    return () => clearInterval(interval)
  }, [])

  return (
    <StyledPost>
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
    </StyledPost>
  );
}
