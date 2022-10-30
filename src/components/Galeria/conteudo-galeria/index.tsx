import Link from "next/link";
import { ConteudoStyled } from "./styles";

interface IConteudoFoto {
	imageURL: string;
	alt: string;
	titulo: string;
	conteudo: string;
}

interface IConteudoGaleria {
	titulo: string;
	conteudo: string;
	linkGaleria: string;
	conteudoFotos: IConteudoFoto[];
}

export default function ConteudoGaleria({
	titulo,
	conteudo,
	linkGaleria,
	conteudoFotos,
}: IConteudoGaleria) {
	function handleEnterHover(div: string) {
		if (document) {
			const layer = document.getElementById(`${div}-layer`);
			if (layer && layer.classList.contains("hidden")) {
				layer.classList.remove("hidden");
			}

			const conteudo = document.getElementById(`${div}-conteudo`);
			if (conteudo && conteudo.classList.contains("hidden")) {
				conteudo.classList.remove("hidden");
				conteudo.classList.add("flex");
			}
		}
	}

	function handleOutHover(div: string) {
		if (document) {
			const layer = document.getElementById(`${div}-layer`);
			if (layer && !layer.classList.contains("hidden")) {
				layer.classList.add("hidden");
			}

			const conteudo = document.getElementById(`${div}-conteudo`);
			if (conteudo && !conteudo.classList.contains("hidden")) {
				conteudo.classList.add("hidden");
				conteudo.classList.remove("flex");
			}
		}
	}

	return (
		<ConteudoStyled>
			<div className="conteudo-wrapper">
				<div className="conteudo">
					<h1>{titulo}</h1>
					<p>{conteudo}</p>
				</div>
				<div className="galeria-fotos">
					<div className="fotos-container">
						{conteudoFotos.map((item, index) => (
							<div
								key={index}
								className="fotos"
								onMouseEnter={() => handleEnterHover(`${index}-foto`)}
								onMouseLeave={() => handleOutHover(`${index}-foto`)}
							>
								<img
									id={`${index}-foto`}
									alt={item.alt}
									src={item.imageURL}
									className="fotos"
								/>
								<div id={`${index}-foto-layer`} className="layer hidden"></div>
								<div id={`${index}-foto-conteudo`} className="content hidden">
									<h3>{item.titulo}</h3>
									<p>{item.conteudo}</p>
								</div>
							</div>
						))}
					</div>
					<Link passHref href={linkGaleria}>
						<a href={linkGaleria} rel="noopener noreferrer" target="_blank">
							<h3 id="galeria-link">ACESSAR A GALERIA VIRTUAL</h3>
						</a>
					</Link>
				</div>
			</div>
		</ConteudoStyled>
	);
}
