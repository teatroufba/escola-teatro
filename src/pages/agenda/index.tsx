import AgendaMain from "@/components/Agenda/AgendaMain";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";

interface IAgenda {
  date: string;
  imageAlt: string;
  imageUrl: string;
  miniaturaUrl: string;
  miniaturaAlt: string;
  local: string;
  tipo: string;
  title: string;
  uid: string;
  subtitulo: string;
}

function Agenda({ agenda }: { agenda: IAgenda[] }) {
  return (
    <>
      <AgendaMain agenda={agenda} />
    </>
  );
}

export default Agenda;

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData;
}) {
  const client = createClient({ previewData });
  const items = await client.getAllByType("agenda");

  const agenda = items.map((item) => ({
    uid: item.uid || "",
    title: item.data.titulo,
    imageUrl: item.data.imagem.url ? item.data.imagem.url : '/',
    imageAlt: item.data.imagem.alt ? item.data.imagem.alt : '/',
    miniaturaUrl: item.data.miniatura.url ? item.data.miniatura.url : '',
    miniaturaAlt: item.data.miniatura.url ? item.data.miniatura.alt : '',
    date: item.data.data,
    tipo: item.data.tipos.map((tipos: { tipo: any; }) => (tipos.tipo)),
    local: item.data.local,
    subtitulo: item.data.subtitulo,
  }));

  return {
    props: { agenda },
  };
}
