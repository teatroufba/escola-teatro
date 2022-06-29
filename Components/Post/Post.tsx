/* eslint-disable no-multi-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import { Date, Link, RichText } from 'prismic-reactjs'

import { StyledPost } from './styles'

interface IPostagem {
  title: string
  subtitle: string
  text: string
  uid: string
  imageUrl: string
  imageAlt?: string
  author?: string
  last_publication_date?: string
  first_publication_date?: string
}
export default function Potagem({
  title,
  subtitle,
  text,
  uid,
  imageUrl,
  imageAlt,
  author,
  last_publication_date,
  first_publication_date,
}: IPostagem) {
  return (
    <StyledPost>
      <Image src={imageUrl} alt={imageAlt} width={250} height={200} />
      <div className="title-post">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="info-post">
          <p>
            Por <b>Lorem Ipsum</b>
          </p>
          <p>
            {first_publication_date} Atualizado há {last_publication_date}
          </p>
        </div>
      </div>
      <p>{text}</p>
    </StyledPost>
  )
}
