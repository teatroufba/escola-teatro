/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismicDocument } from "@prismicio/types";
import Noticias from "@/components/Noticias/Noticias";
import { PreviewData } from "next";

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
    imageAlt: items.data.image.alt,
    imageUrl: items.data.image.url,
    miniaturaAlt: items.data.miniatura.alt,
    miniaturaUrl: items.data.miniatura.url,
    subtitle: items.data.subtitle,
    tags: items.tags,
    title: items.data.title,
    uid: items.uid || "",
  }));
  return (
    <>
      <Noticias post={posts} />;
    </>
  );
}
