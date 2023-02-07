/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import Link from "next/link";
import styled from "styled-components";

import CarouselRevistaLivro from "@/components/EnsinoPesquisa/carousel-revista-livro";

const Container = styled.div`
	width: 100vw;
	text-align: center;
	padding: 0px 0 50px 0;
	background-color: white;

	@media (max-width: 1024px) {
		padding: 40px 0;
		width: calc(100vw - 40px);
	}

	.groups {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	h1 {
		font-family: "Merriweather";
		color: #2d2b78;
		border-bottom: 5px solid #282b62;
		display: inline-block;
		margin-bottom: 3rem;
		font-size: 3rem;

		@media (max-width: 1024px) {
			text-align: left;
		}
	}

	.groups .tcc {
		width: 1235px;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		@media screen and (max-width: 1400px) {
			max-width: 815px;
			width: 100%;
		}

		h2 {
			font-family: "Merriweather";
			font-style: normal;
			font-weight: 700;
			font-size: 2rem;
			color: #2d2b78;
			text-align: left;
		}

		.links {
			display: flex;
			gap: 25px;

			@media (max-width: 1400px) {
				flex-direction: column;
			}

			.link {
				width: calc((100% - 75px) / 4);
				height: 290px;
				background-color: #2d2b78;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				@media (max-width: 1400px) {
					width: 100%;
					padding: 1rem;
					height: auto;
				}

				&:hover {
					background-color: #9a1a4b;
				}

				a {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					text-decoration: none;

					@media (max-width: 1400px) {
						justify-content: left;
					}

					p {
						color: #f7f6f5;
						font-family: "Merriweather";
						font-style: normal;
						font-size: 2rem;

						@media (max-width: 1024px) {
							font-size: 1.25rem;
						}
					}
				}
			}
		}
	}
`;

interface IRevista {
	descricao: string,
	titulo: string,
	imageUrl: string,
	imageAlt: string,
	link: string,
}

interface IProducaoAcademica {
	monografias: string,
	espetaculosFormatura: string,
	dissertacoes: string,
	teses: string,
	revistas: IRevista[],
  	livros: IRevista[],
}

function ProducaoAcademica({ monografias, espetaculosFormatura, dissertacoes, teses, revistas, livros }: IProducaoAcademica) {
	return (
		<Container>
			<h1 id="producao-academica">Produção Acadêmica</h1>
			<div className="groups">
				<div className="tcc">
					<h2>Trabalhos de Conclusão de Curso - TCC</h2>
					<div className="links">
						<div className="link">
							<a target="_blank" href={monografias ?? ''}>
									<p>Monografias</p>
							</a>
						</div>
						<div className="link">
							<a target="_blank" href={espetaculosFormatura ?? ''}>
									<p>Espetáculos de Formatura</p>
							</a>
						</div>
						<div className="link">
							<a target="_blank" href={dissertacoes ?? ''}>
									<p>Dissertações</p>
							</a>
						</div>
						<div className="link">
							<a target="_blank" href={teses ?? ''}>
									<p>Teses</p>
							</a>
						</div>
					</div>
				</div>
				<CarouselRevistaLivro titulo="Revistas e Publicações" itens={revistas} />
				<CarouselRevistaLivro titulo="Livros" itens={livros} />
			</div>
		</Container>
	);
}

export default ProducaoAcademica;
