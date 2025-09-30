/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismicDocument } from "@prismicio/types";
import Noticias from "@/components/Noticias/Noticias";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";

const DEFAULT_IMAGE = "/brasaoSemLetra.png"; 

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData;
}) {
  const client = createClient({ previewData });
  const noticias = await client.getAllByType("post-de-noticias", {
    orderings: {
      direction: "desc",
      field: "document.first_publication_date",
    },
  });


  return {
    props: { noticias },
    revalidate: 3600,
  };
}

export default function Page({
  noticias,
}: {
  noticias: PrismicDocument<Record<string, any>, string, string>[];
}) {
  const posts = noticias.map((items) => {
    const postDate = items.data.data || null;
    
    return {
      date: postDate,
      imageAlt: items.data?.image?.alt || "image",
      imageUrl: items.data?.image?.url || DEFAULT_IMAGE,
      miniaturaAlt: items.data?.miniatura?.alt || 'image',
      miniaturaUrl: items.data?.miniatura?.url || DEFAULT_IMAGE,
      subtitle: items.data?.subtitle || "",
      tags: Array.isArray(items.data?.categorias) 
        ? items.data.categorias
            .filter((cat: any) => cat?.categoria)
            .map((cat: { categoria: string }) => cat.categoria.toLowerCase())
        : [],
      title: items.data.title || "",
      uid: items.uid || "",
    };
  });
  
  return (
    <>
      <Noticias post={posts} />
    </>
  );
}
