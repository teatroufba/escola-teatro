/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image'

import { StyledPage, StyledPosts } from './styles'

interface INoticias {
  post: IPosts[]
}

interface IPosts {
  uid: string
  image: any
  title: string
  subtitle: string
}
export default function Noticias({ post }: INoticias) {
  return (
    <StyledPage>
      {post.map(value => (
        <StyledPosts>
          <Image
            src={value.image.url}
            alt={value.image.alt}
            width={150}
            height={100}
          />
          <h1>{value.title}</h1>
          <p>{value.subtitle}</p>
          <a href={`/${value.uid}`}> saiba mais </a>
        </StyledPosts>
      ))}
    </StyledPage>
  )
}
