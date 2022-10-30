import BannerGaleria from "@/components/Galeria/banner";
import ConteudoGaleria from "@/components/Galeria/conteudo-galeria";

interface IConteudoFoto {
	imageURL: string;
	alt: string;
	titulo: string;
	conteudo: string;
	link: string;
}

export default function Page() {
	const conteudo =
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere ad, delectus autem deserunt quibusdam ea dolorum impedit accusantium dolor nihil explicabo est eveniet consectetur eligendi veritatis provident facilis. Natus atque iste et! Nostrum minus, asperiores deleniti cum mollitia assumenda, aspernatur id possimus itaque beatae eligendi quis. Tempora, voluptate beatae!";
	const conteudomenor =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque doloribus aliquid. Nostrum accusamus fuga hic tenetur excepturi porro dignissimos!";

	const conteudoFoto: IConteudoFoto = {
		imageURL: "/background.png",
		alt: "imagem da escola de teatro",
		titulo: "Título da imagem",
		conteudo: conteudomenor,
		link: "www.google.com.br",
	};

	return (
		<>
			<div>
				<BannerGaleria
					imageURL="/background.png"
					alt="imagem da escola de teatro"
				/>
				<ConteudoGaleria
					titulo="Título do Conteúdo"
					conteudo={conteudo}
					linkGaleria="https://www.google.com.br"
					conteudoFotos={[conteudoFoto, conteudoFoto, conteudoFoto]}
				/>
			</div>
		</>
	);
}
