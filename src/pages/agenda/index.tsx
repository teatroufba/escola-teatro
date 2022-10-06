import AgendaMain from "@/components/Agenda/AgendaMain"
import { PreviewData } from "next";
import Head from "next/head";
import { createClient } from "../../../prismic";

interface IAgenda {
    date: string;
    imageAlt: string;
    imageUrl: string;
    local: string;
    tipo: string;
    title: string;
    uid: string;
    subtitulo: string;
}

function Agenda({ agenda }: { agenda: IAgenda[] }) {
    return (
        <>
            <Head>
				<title> Agenda - Escola de Teatro da UFBA</title>
			</Head>
            
            <AgendaMain agenda={agenda} />
        </>
    )
}

export default Agenda

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
        imageUrl: item.data.imagem.url,
        imageAlt: item.data.imagem.alt,
        date: item.data.data,
        tipo: item.data.tipo,
        local: item.data.local,
        subtitulo: item.data.subtitulo,
    }))

    return {
        props: { agenda },
    }
}