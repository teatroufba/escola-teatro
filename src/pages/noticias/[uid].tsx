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
  last_publication_date: string
  first_publication_date: string
  text: string
}
export default function Post({ postagem }: { postagem: IPostagem }) {
  return (
    <Postagem
      uid={postagem.uid}
      title={postagem.title}
      subtitle={postagem.subtitle}
      imageAlt={postagem.imageAlt}
      imageUrl={postagem.imageUrl}
      last_publication_date={postagem.last_publication_date}
      first_publication_date={postagem.first_publication_date}
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
    last_publication_date: posts.last_publication_date || '',
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
