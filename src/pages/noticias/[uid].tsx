/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Postagem from "@/components/Noticias/Post/Post";
import { createClient } from "prismic";
import image from "@/public/novoBrasaoHandler.png";

interface IPostagem {
  author: string;
  date: string;
  first_publication_date: string;
  id: string;
  imageAlt: string;
  imageUrl: string;
  last_publication_date: Date;
  subtitle: string;
  text: [];
  title: string;
  uid: string;
  document: string;
  document2: string;
  document3: string;
  document4: string;
  document5: string;
  document6: string;
  documentName: string;
  documentName2: string;
  documentName3: string;
  documentName4: string;
  documentName5: string;
  documentName6: string;
}
export default function Post({ postagem }: { postagem: IPostagem }) {
  const d = new Date(postagem.first_publication_date);
  const publication = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  const lastPublication = new Date(postagem.last_publication_date);

  return (
    <>
      <Postagem
        author={postagem.author}
        date={postagem.date}
        first_publication_date={publication}
        imageAlt={postagem.imageAlt}
        imageUrl={postagem.imageUrl}
        last_publication_date={lastPublication}
        subtitle={postagem.subtitle}
        text={postagem.text}
        title={postagem.title}
        document={postagem.document}
        document2={postagem.document2}
        document3={postagem.document3}
        document4={postagem.document4}
        document5={postagem.document5}
        document6={postagem.document6}
        documentName={postagem.documentName}
        documentName2={postagem.documentName2}
        documentName3={postagem.documentName3}
        documentName4={postagem.documentName4}
        documentName5={postagem.documentName5}
        documentName6={postagem.documentName6}
      />
    </>
  );
}

export async function getStaticProps({ params }: { params: { uid: string } }) {
  const client = createClient();
  const posts = await client.getByUID("post-de-noticias", params.uid);

  const postagem = {
    author: posts.data.author,
    date: posts.data.data,
    first_publication_date: posts.first_publication_date,
    id: posts.id,
    imageAlt: posts.data.image.alt ? posts.data.image.alt : image,
    imageUrl: posts.data.image.url ? posts.data.image.url : image,
    last_publication_date: posts.last_publication_date,
    subtitle: posts.data.subtitle,
    text: posts.data.text,
    title: posts.data.title,
    uid: posts.uid,
    document: posts.data.document?.url ? posts.data.document.url : "",
    document2: posts.data.document2?.url ? posts.data.document2.url : "",
    document3: posts.data.document3?.url ? posts.data.document3.url : "",
    document4: posts.data.document4?.url ? posts.data.document4.url : "",
    document5: posts.data.document5?.url ? posts.data.document5.url : "",
    document6: posts.data.document6?.url ? posts.data.document6.url : "",
    documentName: posts.data.document?.name ? posts.data.document.name : "",
    documentName2: posts.data.document2?.name ? posts.data.document2.name : "",
    documentName3: posts.data.document3?.name ? posts.data.document3.name : "",
    documentName4: posts.data.document4?.name ? posts.data.document4.name : "",
    documentName5: posts.data.document5?.name ? posts.data.document5.name : "",
    documentName6: posts.data.document6?.name ? posts.data.document6.name : "",
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
