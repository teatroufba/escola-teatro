/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismicDocument } from "@prismicio/types";
import Noticias from "@/components/Noticias/Noticias";
import { PreviewData } from "next";
import image from "@/public/novoBrasaoHandler.png";
import { createClient } from "../../../prismic";

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
  };
}

export default function Page({
  noticias,
}: {
  noticias: PrismicDocument<Record<string, any>, string, string>[];
}) {
  const posts = noticias.map((items) => ({
    date: items.data.data,
    imageAlt: items.data.image.alt ? items.data.image.alt : image,
    imageUrl: items.data.image.url ? items.data.image.url : image,
    miniaturaAlt: items.data.miniatura.alt ? items.data.miniatura.alt : image,
    miniaturaUrl: items.data.miniatura.url ? items.data.miniatura.url : image,
    subtitle: items.data.subtitle ? items.data.subtitle : '',
    tags: items.data?.categorias?.map((categorias: { categoria: any; }) => (categorias.categoria)) == '' ? '' : items.data?.categorias?.map((categorias: { categoria: any; }) => (categorias.categoria.toLowerCase())),
    title: items.data.title ? items.data.title : '',
    uid: items.uid || "",
  }));
  return (
    <>
      <Noticias post={posts} />;
    </>
  );
}