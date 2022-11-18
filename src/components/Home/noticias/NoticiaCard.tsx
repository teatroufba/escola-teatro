/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image'
import { useState } from 'react'

import { StyledNoticiaCard } from './styles'

interface INoticiaCard {
  className:string
  uid: string
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  date: string
}

type Props = {
  hover: boolean
}

export default function NoticiaCard({
  className,
  uid,
  imageAlt,
  imageUrl,
  title,
  subtitle,
  date,
}: INoticiaCard) {
  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  const maxChar = (text: string, numberMaxOfChars: number) => {
    if (text.length >= numberMaxOfChars) {
      return text.slice(0, numberMaxOfChars-3) + '...'
    }
    return text
  }


  const data = new Date(date)
    let dia = data.getDate().toString()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    let mesNumero = (mes + 1).toString()

    if (dia.length === 1) {
        dia = `0${dia}`
    }

    if (mesNumero.length === 1) {
        mesNumero = `0${mes}`
    }

  return (
    <StyledNoticiaCard>
      <div className="noticias-post-img">
        {imageUrl ? (
          <Image alt={imageAlt} src={imageUrl} layout='fill' objectFit="cover" objectPosition='center' />
        ) : null}
      </div>
      <div className="noticias-post-text">
        <h3>{title? maxChar(title,128) : ""}</h3>
        <p>{subtitle? maxChar(subtitle,256) : ""}</p>
      </div>
      <a href={`/noticias/${uid}`}>
        Saiba mais{"  "}
        <Image alt={imageAlt? imageAlt : ""} height={10} src="/arrow.png" width={10} />
      </a>
    </StyledNoticiaCard>
  )
}

function ArrowIcon({ hover }: Props) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.99994H12.9722"
        stroke={hover ? '#9A1A4B' : '#282B62'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.98535 1.16669L12.9715 7.00002L6.98535 12.8334"
        stroke={hover ? '#9A1A4B' : '#282B62'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
