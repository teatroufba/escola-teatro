import Image from 'next/image'
import Link from 'next/link'

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
      <Image src={imageUrl} alt={imageAlt} width={240} height={160} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Link href={`/noticias/${uid}`} passHref>
        Saiba mais
      </Link>
    </StyledPosts>
  )
}
