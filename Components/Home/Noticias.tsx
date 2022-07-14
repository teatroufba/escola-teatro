import NoticiaCard from 'Components/Home/NoticiaCard'

import { StyledNoticias } from './styles'

interface INoticias {
  uid: string
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  date: string
}

export default function Noticias({ noticias }: { noticias: INoticias[] }) {
  return (
    <StyledNoticias>
      <h1>Notícias</h1>
      {noticias.slice(0, 4).map(value => (
        <NoticiaCard
          uid={value.uid}
          title={value.title}
          subtitle={value.subtitle}
          imageUrl={value.imageUrl}
          imageAlt={value.imageAlt}
          date={value.date}
        />
      ))}
      <button>Ver notícias antigas</button>
    </StyledNoticias>
  )
}
