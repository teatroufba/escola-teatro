import Image from 'next/image'

import { StyledNoticiaCard } from './styles'

interface INoticiaCard {
  uid: string
  imageUrl: string
  imageAlt: string
  title: string
  subtitle: string
  date: string
}

export default function NoticiaCard({
  uid,
  imageAlt,
  imageUrl,
  title,
  subtitle,
  date,
}: INoticiaCard) {
  const data = new Date(date)
  const publication = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
  return (
    <StyledNoticiaCard>
      <Image src={imageUrl} alt={imageAlt} width={240} height={160} />
      <p>{publication}</p>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a href={`/noticias/${uid}`}>
        Saiba mais{'  '}
        <Image src="/arrow.png" alt={imageAlt} width={10} height={10} />
      </a>
    </StyledNoticiaCard>
  )
}
