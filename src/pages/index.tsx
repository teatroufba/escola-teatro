/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import AcessoRapido from "@/components/Home/acesso-rapido";
import Agenda from "@/components/Home/agenda";
import Banner from "@/components/Home/banner";
import Contato from "@/components/Home/contato";
import Mural from "@/components/Home/mural/Mural";
import Noticias from "@/components/Home/noticias/Noticias";
import { PreviewData } from "next";

import { createClient } from "../../prismic";

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData;
}) {
  const client = createClient({ previewData });
  const items = await client.getAllByType("agenda");

  const agenda = items.map((value) => ({
    uid: value.uid || "",
    title: value.data.titulo,
    imageUrl: value.data.imagem.url,
    imageAlt: value.data.imagem.alt,
    date: value.data.data,
    tipo: value.data.tipo,
    local: value.data.local,
  }));

  const itemsMural = await client.getAllByType("mural-estudantil", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  const mural = itemsMural.map((value) => ({
    uid: value.uid || "",
    title: value.data.titulo,
    imageUrl: value.data.imagem.url || "",
    imageAlt: value.data.imagem.alt,
  }));

  const posts = await client.getAllByType("post-de-noticias", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  const noticias = posts.map((value) => ({
    uid: value.uid,
    title: value.data.title,
    subtitle: value.data.subtitle,
    imageUrl: value.data.image.url,
    imageAlt: value.data.image.alt,
    date: value.first_publication_date,
  }));
  return {
    props: { mural, agenda, noticias },
  };
}

interface IMural {
  imageAlt: string;
  imageUrl: string;
  title: string;
  uid: string;
}

interface INoticias {
  date: string;
  imageAlt: string;
  imageUrl: string;
  subtitle: string;
  title: string;
  uid: string;
}

interface IAgenda {
  date: string;
  imageAlt: string;
  imageUrl: string;
  local: string;
  tipo: string;
  title: string;
  uid: string;
}

export default function Home({
  mural,
  agenda,
  noticias,
}: {
  agenda: IAgenda[];
  mural: IMural[];
  noticias: INoticias[];
}) {
  return (
    <>
      <Banner />
      <Noticias noticias={noticias} />
      <Agenda agenda={agenda} />
      <Mural mural={mural} />
      <AcessoRapido />
      <Contato />
    </>
  );
}
