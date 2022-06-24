/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image'
import Link from 'next/link'

import { StyledPage, StyledPosts } from './styles'

interface INoticias {
  post: IPosts[]
  pagebtn: () => void
  paginationBtn: number
}

interface IPosts {
  uid: string
  image: any
  title: string
  subtitle: string
}
export default function Noticias({ post, pagebtn, paginationBtn }: INoticias) {
  return (
    <StyledPage>
      <div className="posts-flex">
        {post.map(value => (
          <StyledPosts>
            <Image
              src={value.image.url}
              alt={value.image.alt}
              width={240}
              height={160}
            />
            <h3>{value.title}</h3>
            <p>{value.subtitle}</p>
            <Link href={`/${value.uid}`} passHref>
              Saiba mais
            </Link>
          </StyledPosts>
        ))}
      </div>
      <div className="pagination-btn">
        {[...Array(paginationBtn).keys()].map(value => (
          <button>{value + 1}</button>
        ))}
        <button type="button" onClick={pagebtn}>
          {' '}
          Próxima{' '}
        </button>
      </div>
    </StyledPage>
  )
}
