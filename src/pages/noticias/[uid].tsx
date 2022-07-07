/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createClient } from 'prismic'

import Postagem from '../../../Components/Post/Post'

interface IPostagem {
  uid: string
  id: string
  title: string
  subtitle: string
  imageAlt: string
  imageUrl: string
  last_publication_date: Date
  imageWidth: string
  imageHeight: string
  author: string
  first_publication_date: string
  text: string
}
export default function Post({ postagem }: { postagem: IPostagem }) {
  const d = new Date(postagem.first_publication_date)
  const publication = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
  const lastPublication = new Date(postagem.last_publication_date)
  return (
    <Postagem
      title={postagem.title}
      subtitle={postagem.subtitle}
      imageAlt={postagem.imageAlt}
      imageUrl={postagem.imageUrl}
      imageWidth={postagem.imageWidth}
      author={postagem.author}
      imageHeight={postagem.imageHeight}
      last_publication_date={lastPublication}
      first_publication_date={publication}
      text={postagem.text}
    />
  )
}

export async function getStaticProps({ params }: { params: { uid: string } }) {
  const client = createClient()
  const posts = await client.getByUID('post-de-noticias', params.uid)

  const postagem = {
    uid: posts.uid,
    id: posts.id,
    title: posts.data.title,
    subtitle: posts.data.subtitle,
    imageUrl: posts.data.image.url,
    imageAlt: posts.data.image.alt,
    imageWidth: posts.data.image.dimensions.width,
    imageHeight: posts.data.image.dimensions.height,
    last_publication_date: posts.last_publication_date,
    author: posts.data.author,
    first_publication_date: posts.first_publication_date,
    text: posts.data.text,
  }
  return {
    props: { postagem },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const posts = await client.getAllByType('post-de-noticias')
  const paths = posts.map(post => ({ params: { uid: post.uid } }))

  return {
    paths,
    fallback: false,
  }
}
