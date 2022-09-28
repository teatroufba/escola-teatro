/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image'
import { useState } from 'react'

import { StyledNoticiaCard } from './styles'

interface INoticiaCard {
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
  const publication = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
  return (
    <StyledNoticiaCard>
      <div className="noticia-img">
      <Image src={imageUrl} alt={imageAlt} width={290} height={250} layout={'responsive'}/>
      </div>
      
      <div className="text-post">
      <p className="data">{publication}</p>
        <div className='titles'>
          <h3>{maxChar(title, 30)}</h3>
          <p>{maxChar(subtitle, 95)}</p>
        </div>
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={`/noticias/${uid}`}
        >
          Saiba mais{'  '}
          <ArrowIcon hover={hover} />
        </a>
      </div>
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
