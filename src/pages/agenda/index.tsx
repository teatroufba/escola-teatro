import AgendaMain from "@/components/Agenda/AgendaMain";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";
import image from "@/public/novoBrasaoHandler.png";

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
  descricao: string;
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
    imageUrl: item.data.imagem.url ? item.data.imagem.url : image,
    imageAlt: item.data.imagem.alt ? item.data.imagem.alt : image,
    miniaturaUrl: item.data.miniatura.url ? item.data.miniatura.url : image,
    miniaturaAlt: item.data.miniatura.url ? item.data.miniatura.alt : image,
    date: item.data.data,
    tipo: item.data.tipos.map((tipos: { tipo: any }) => tipos.tipo),
    local: item.data.local ? item.data.local : "Local não informado",
    subtitulo: item.data.subtitulo,
  }));

  return {
    props: { agenda },
  };
}
