import { StyledPosts } from './styles'

interface IPosts {
  uid: string
  title: string
  subtitle: string
}

export default function Posts({ uid, title, subtitle }: IPosts) {
  return (
    <StyledPosts>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a className="saiba mais" href={`/${uid}`}>
        Saiba mais
      </a>
    </StyledPosts>
  )
}
