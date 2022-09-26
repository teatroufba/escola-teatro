import PostAgendaMain from "@/components/Agenda/Post/PostAgendaMain"
import { PreviewData } from "next";
import { createClient } from "../../../prismic";

interface IAgenda {
    date: string;
    imageAlt: string;
    imageUrl: string;
    local: string;
    title: string;
}

function PostAgenda({ post }: { post: IAgenda }) {
    return (
        <>
            <PostAgendaMain date={post.date} imageAlt={post.imageAlt} imageUrl={post.imageUrl} local={post.local} title={post.title} />
        </>
    )
}

export default PostAgenda

export async function getServerSideProps({
    previewData,
    params
}: {
    previewData: PreviewData,
    params: { uid: string }
}) {
    const { uid } = params

    const client = createClient({ previewData });
    const items = await client.getAllByType("agenda");
    const item = items.find(item => item.uid === uid)

    const post = {
        title: item?.data.titulo,
        imageUrl: item?.data.imagem.url,
        imageAlt: item?.data.imagem.alt,
        date: item?.data.data,
        local: item?.data.local,
    }

    return {
        props: { post }
    }
}