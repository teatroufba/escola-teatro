/* eslint-disable no-multi-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { StyledPost } from './styles'

interface IPostagem {
  title: string
  subtitle: string
  text: string
  imageUrl: string
  imageAlt?: string
  author: string
  last_publication_date: Date
  imageWidth: string
  imageHeight: string
  first_publication_date?: string
}
export default function Potagem({
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
  const [lastAtt, setLastAtt] = useState('')

  useEffect(() => {
    let difIn
    const currentdate = new Date()

    difIn = Math.abs(
      currentdate.getFullYear() - last_publication_date.getFullYear()
    )

    if (difIn === 0) {
      difIn = Math.abs(
        currentdate.getMonth() - last_publication_date.getMonth()
      )
      setLastAtt(`${difIn} meses`)
    }

    if (difIn < 2) {
      difIn = Math.abs(currentdate.getDate() - last_publication_date.getDate())
      setLastAtt(`${difIn} dias`)
    }

    if (difIn === 0) {
      difIn = Math.abs(
        currentdate.getHours() - last_publication_date.getHours()
      )
      setLastAtt(`${difIn} horas`)
    }

    if (difIn === 0) {
      difIn = Math.abs(
        currentdate.getMinutes() - last_publication_date.getMinutes()
      )
      setLastAtt(`${difIn} minutos`)
    }
  })
  return (
    <StyledPost>
      <div>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className="post-content">
        <div className="post-header">
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <span>
            <p>
              Por <b>{author}</b> <br />
              {first_publication_date} &nbsp;&nbsp;Atualizado há {lastAtt}
            </p>
          </span>
        </div>
        <p className="post-text">
          <pre>{text}</pre>
        </p>
        <div className="btn-align-left">
          <button type="button">
            <Link href="/noticias" passHref>
              Ver outras notícias
            </Link>
          </button>
        </div>
      </div>
    </StyledPost>
  )
}
