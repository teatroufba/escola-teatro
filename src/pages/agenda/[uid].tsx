import PostAgendaMain from "@/components/Agenda/Post/PostAgendaMain"
import { maxChar } from "@/utils/maxChar";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";

interface IAgenda {
    date: string;
    imageAlt: string;
    imageUrl: string;
    local: string;
    title: string;
    text: [];
}

function PostAgenda({ post }: { post: IAgenda }) {
    return (
        <>  
            <PostAgendaMain date={post.date} imageAlt={post.imageAlt} imageUrl={post.imageUrl} local={post.local} title={post.title} text={post.text} />
        </>
    )
}

export default PostAgenda

export async function getStaticProps({
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
        title: item ? item?.data.titulo : undefined,
        imageUrl: item ? item?.data.imagem.url : undefined,
        imageAlt: item ? item?.data.imagem.alt : undefined,
        date: item ? item?.data.data : undefined,
        local: item ? item?.data.local : undefined,
        text: item ? item?.data.text : undefined,
    }

    return {
        props: { post }
    }
}

export async function getStaticPaths() {
    const client = createClient();
  
    const posts = await client.getAllByType("agenda");
    const paths = posts.map((post) => ({ params: { uid: post.uid } }));
  
    return {
      fallback: false,
      paths,
    };
  }