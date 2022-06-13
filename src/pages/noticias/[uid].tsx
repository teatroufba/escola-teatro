import { createClient } from 'prismic'

export default function Postgem() {
  return null
}

export async function getStaticProps() {
  const client = createClient()
  const noticias = await client.getSingle('pagina-de-noticias')
  const posts = await client.getAllByType('post-de-noticias')

  return {
    props: { noticias, posts },
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
