import PostCard from '@/components/Noticias/PostCard'
import Link from 'next/link'

import NoticiaCard from './NoticiaCard'
import { StyledNoticias } from './styles'

interface INoticias {
  uid: string
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  miniaturaUrl: string
  miniaturaAlt: string
  date: string
}

export default function Noticias({ noticias }: { noticias: INoticias[] }) {
  const noticiasOrdenadas = [...noticias].sort((a, b) => {
    const timestamp = (date: string) => new Date(date).getTime();
    return timestamp(b.date) - timestamp(a.date);
  });

  return (
    <StyledNoticias>

      <h1>Notícias</h1>

      <div className="noticias-flex">
        {noticiasOrdenadas.slice(0, 3).map((value, index) => (
          <NoticiaCard
            key={value.uid}
            className={index > 1 ? 'mobile' : ''}
            uid={value.uid}
            title={value.title}
            subtitle={value.subtitle}
            imageUrl={value.miniaturaUrl}
            imageAlt={value.miniaturaAlt}
            date={value.date}
          />
        ))}
      </div>
      <div className='noticias-btn'>
          <Link href="/noticias" passHref>
            <button>Notícias anteriores</button>
          </Link>
      </div>

    </StyledNoticias>
  )
}
