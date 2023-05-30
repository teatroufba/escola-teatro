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
  const itemsBanner = await client.getAllByType("post_do_banner");

  const banner = itemsBanner.map((value) => ({
    imageUrl: value.data.image.url ? value.data.image.url : "/",
    imageAlt: value.data.image.alt ? value.data.image.alt : "/",
    title: value.data.titulo,
    descricao: value.data.descricao,
    link: value.data.link,
  }));

  const items = await client.getAllByType("agenda");

  const agendaFiltered = items
    .map(
      (value: any) =>
        ({
          uid: value.uid || "",
          title: value.data.titulo,
          imageUrl: value.data.imagem.url ? value.data.imagem.url : "/",
          imageAlt: value.data.imagem.alt ? value.data.imagem.alt : "/",
          miniaturaUrl: value.data.miniatura.url
            ? value.data.miniatura.url
            : "/",
          miniaturaAlt: value.data.miniatura.url
            ? value.data.miniatura.alt
            : "/",
          date: value.data.data,
          tipo: value.data.tipos.map((tipos: { tipo: any }) => tipos.tipo),
          local: value.data.local,
          descricao: value.data.subtitulo,
        } as unknown as IAgenda)
    )
    .sort((a: IAgenda, b: IAgenda) => {
      const timestamp = (date: string) => new Date(date).getTime();
      return timestamp(a.date) - timestamp(b.date);
    });
  const agenda = agendaFiltered.filter((agend) => {
    const todayMidnight = new Date();
    todayMidnight.setUTCHours(0, 0, 0, 0);
    const today = new Date().getTime() - todayMidnight.getTime();
    const data = new Date(agend.date).getTime() - todayMidnight.getTime();
    return data >= today;
  });

  const itemsMural = await client.getAllByType("mural-estudantil", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  const mural = itemsMural.map((value: any) => ({
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

  const noticias = posts.map((value: any) => ({
    uid: value.uid,
    title: value.data.title,
    subtitle: value.data.subtitle,
    imageUrl: value.data.image.url ? value.data.image.url : null,
    imageAlt: value.data.image.alt ? value.data.image.alt : null,
    miniaturaUrl: value.data.miniatura.url ? value.data.miniatura.url : "/",
    miniaturaAlt: value.data.miniatura.url ? value.data.miniatura.alt : "/",
    date: value.data.data,
  }));
  return {
    props: { banner, mural, agenda, noticias },
  };
}

interface IBanner {
  imageAlt: string;
  imageUrl: string;
  title: string;
  descricao: string;
  link: string;
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
  miniaturaUrl: string;
  miniaturaAlt: string;
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
  subtitulo: string;
  descricao: string;
  miniaturaUrl: string;
  miniaturaAlt: string;
}

export default function Home({
  banner,
  mural,
  agenda,
  noticias,
}: {
  banner: IBanner[];
  agenda: IAgenda[];
  mural: IMural[];
  noticias: INoticias[];
}) {
  return (
    <>
      <Banner banner={banner} />
      <Noticias noticias={noticias} />
      <Agenda agenda={agenda} />
      <Mural mural={mural} />
      <AcessoRapido />
      <Contato />
    </>
  );
}
