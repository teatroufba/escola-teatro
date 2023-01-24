import BannerGaleria from "@/components/Galeria/banner";
import ConteudoGaleria from "@/components/Galeria/conteudo-galeria";

import { PreviewData } from "next";
import { createClient } from "../../../prismic";

interface IConteudoFoto {
	imageURL: string;
	alt: string;
	titulo: string;
	conteudo: string;
	
	link: string;
}

export default function Page({ galeria }: any) {

	const conteudoFoto: IConteudoFoto = {
		imageURL: galeria.imagem1.url,
		alt: galeria.imagem1.alt,
		titulo: galeria.titulo1,
		conteudo: galeria.descricao1,
		link: galeria.link1 ? galeria.link1 : '',
	};

	const conteudoFoto2: IConteudoFoto = {
		imageURL: galeria.imagem2.url,
		alt: galeria.imagem2.alt,
		titulo: galeria.titulo2,
		conteudo: galeria.descricao2,
		link: galeria.link2 ? galeria.link2 : '',
	};

	const conteudoFoto3: IConteudoFoto = {
		imageURL: galeria.imagem3.url,
		alt: galeria.imagem3.alt,
		titulo: galeria.titulo3,
		conteudo: galeria.descricao3,
		link: galeria.link3 ? galeria.link3 : '',
	};

	return (
		<>
			<div>
				<BannerGaleria
					imageURL={galeria.imagemMain.url}
					alt={galeria.imagemMain.alt}
				/>
				<ConteudoGaleria
					titulo={galeria.tituloMain}
					conteudo={galeria.descricaoMain}
					linkGaleria={galeria.linkMain ? galeria.linkMain : ''}
					conteudoFotos={[conteudoFoto, conteudoFoto2, conteudoFoto3]}
				/>
			</div>
		</>
	);
}

export async function getStaticProps({
    previewData,
  }: {
    previewData: PreviewData;
  }) {
    const client = createClient({ previewData });
    const item = await client.getSingle('galeria')

    const galeria = item.data
  
    return {
      props: { galeria },
    };
  }
