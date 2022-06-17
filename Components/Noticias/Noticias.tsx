import { StyledPage, StyledPosts } from './styles'

interface INoticias {
  post: IPosts[]
  inputValue: string
}

interface IPosts {
  uid: string
  title: any
  subtitle: any
}

export default function Noticias({ post, inputValue }: INoticias) {
  console.log(post, inputValue)
  return (
    <StyledPage>
      <StyledPosts>
        <a href={`/${''}`}> saiba mais </a>
      </StyledPosts>
    </StyledPage>
  )
}
