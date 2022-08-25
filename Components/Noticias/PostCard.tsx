import Image from 'next/image'

import { StyledPosts } from './styles'

interface IPostCard {
  uid: string
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
}

export default function PostCard({
  uid,
  imageAlt,
  imageUrl,
  title,
  subtitle,
}: IPostCard) {
  return (
    <StyledPosts>
      {imageUrl ? (
        <Image src={imageUrl} alt={imageAlt} width={390} height={250} />
      ) : null}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a href={`/noticias/${uid}`}>
        Saiba mais{'  '}
        <Image src="/arrow.png" alt={imageAlt} width={10} height={10} />
      </a>
    </StyledPosts>
  )
}
