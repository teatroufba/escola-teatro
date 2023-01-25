/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Postagem from "@/components/Noticias/Post/Post";
import { createClient } from "prismic";

interface IPostagem {
  author: string;
  first_publication_date: string;
  id: string;
  imageAlt: string;
  imageHeight: string;
  imageUrl: string;
  imageWidth: string;
  last_publication_date: Date;
  subtitle: string;
  text: [];
  title: string;
  uid: string;
}
export default function Post({ postagem }: { postagem: IPostagem }) {
  const d = new Date(postagem.first_publication_date);
  const publication = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  const lastPublication = new Date(postagem.last_publication_date);

  return (
    <>
      <Postagem
        author={postagem.author}
        first_publication_date={publication}
        imageAlt={postagem.imageAlt}
        imageHeight={postagem.imageHeight}
        imageUrl={postagem.imageUrl}
        imageWidth={postagem.imageWidth}
        last_publication_date={lastPublication}
        subtitle={postagem.subtitle}
        text={postagem.text}
        title={postagem.title}
      />
    </>
  );
}

export async function getStaticProps({ params }: { params: { uid: string } }) {
  const client = createClient();
  const posts = await client.getByUID("post-de-noticias", params.uid);

  const postagem = {
    author: posts.data.author,
    first_publication_date: posts.first_publication_date,
    id: posts.id,
    imageAlt: posts.data.image.alt ? posts.data.image.alt : "/",
    imageHeight: posts.data.image?.dimensions?.height ? posts.data.image?.dimensions?.height : "",
    imageUrl: posts.data.image.url ? posts.data.image.url : "/",
    imageWidth: posts.data.image?.dimensions?.width ? posts.data.image?.dimensions.widht : "",
    last_publication_date: posts.last_publication_date,
    subtitle: posts.data.subtitle,
    text: posts.data.text,
    title: posts.data.title,
    uid: posts.uid,
  };
  return {
    props: { postagem },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const posts = await client.getAllByType("post-de-noticias");
  const paths = posts.map((post) => ({ params: { uid: post.uid } }));

  return {
    fallback: false,
    paths,
  };
}
