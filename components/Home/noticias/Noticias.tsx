import NoticiaCard from './NoticiaCard'
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
      <div className="noticias-flex">
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
      </div>
      <a href="/noticias">
        <button>Notícias anteriores</button>
      </a>
    </StyledNoticias>
  )
}
