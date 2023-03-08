/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Pagination from "@/components/Escola/formas-de-ingresso/Pagination";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`

	color: #2d2b78;
	font-family: "Merriweather", serif;
	padding: 130px 0 80px 0;
	text-align: center;
	

	@media (min-width: 768px) {
		.paginationEntryForm{
			display: none;
		}
	}

	@media (max-width: 1200px) {
		width: 100vw;
		padding: 36px 25px;
	}



	h2 {
		font-size: 2rem;
	}

	.graduation {
		text-align: start;
		display: flex;
		justify-content: start;
		width: 100vw;
		max-width: 1100px;
		gap: 1.5rem;

		@media (max-width: 1200px) {
			flex-direction: column;
			width: 100%;
		}

		.menu {
			width: 40%;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@media (max-width: 1200px) {
				width: 100%;
			}

			@media (max-width: 768px) {
				text-align: center;
				gap: 0rem;
			}

			.courses {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				@media (max-width: 768px) {
					display: none;
				}

				.card {
					line-height: 28px;
					background-color: #9a1a4b;
					color: white;
					padding: 1.5rem;
					cursor: auto;
				}
				.disable {
					background-color: #9a1a4b;
					color: white;
					padding: 1.5rem;
					opacity: 0.3;
					cursor: pointer;
				}
			}
		}

		.content {
			width: 57%;
			display: flex;
			flex-direction: column;

			.conteudo {
				display: flex;
				flex-direction: column;
				gap: 3.25rem;
			}

			@media (max-width: 1200px) {
				width: 100%;
			}

			.courseInfo {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				.description {
					color: #2b2b2b;
					line-height: 28px;

					button {
						margin-top: 0.5rem;
						background-color: transparent;
						cursor: pointer;
						border: none;
						text-decoration: underline;
					}
				}
			}

			.disable {
				display: none;
			}

			.info {
				display: flex;
				gap: 1.5rem;

				@media (max-width: 1200px) {
					margin: auto;
				}

				@media (max-width: 768px) {
					flex-direction: column;
					margin: 0;
				}

				div {
					cursor: pointer;
					width: calc(25% - 1.125rem);
					max-width: 160px;
					padding: 1rem;
					border: 1px solid rgba(45, 43, 120, 0.3);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;
					gap: 0.75rem;

					@media (max-width: 768px) {
						width: 100%;
						max-width: 768px;
					}

					.link {
						color: #2d2b78;
						padding: 0;
						margin: 0;
						background-color: transparent;
						border: none;
						text-decoration: underline;
					}

					p {
						font-weight: 700;
					}
				}
			}
		}
	}

	h1 {
		border-bottom: 5px solid #282b62;
		display: inline-block;
		margin-bottom: 3rem;
		font-size: 3rem;
	}
`;

interface IGraduacao {
	titulo: string,
	duracao: number,
	descricao: [],
	ppp: string,
	matrizCurricular: string,
	ementario: string,
	guiaEstudantil: string,
}

function Graduacao({ cursos }: { cursos: IGraduacao[] }) {
	const [cardSelect, setCardSelect] = useState(0);
	const [seeMore, setSeeMore] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [contentPerPage] = useState(1);

	const lastContent = currentPage * contentPerPage;
	const firstContent = lastContent - contentPerPage;

	const pages = [...Array(Math.ceil(cursos.length / contentPerPage)).keys()];

	const [isShowingText, setIsShowingText] = useState(false);
	const [isClampedText, setIsClampedText] = useState(true);
	const [isLongText, setIsLongText] = useState(true);

	useEffect(() => {
		setCardSelect(currentPage - 1);
	}, [currentPage]);


	function hideText() {
		if (isShowingText) {
			const text = document.getElementById("entry-form-text-content");
			const mainContainer = document.getElementById("formas-de-ingresso");

			if (text && mainContainer) {
				setIsShowingText(false);
				text.classList.add("hidden-text");
				mainContainer.style.height = window.innerWidth < 768 ? "100%" : "800px";
				text.style.height = window.innerWidth < 768 ? "100%" : "300px";

				window.scrollTo({
					top: document.getElementById("entry-form-title")?.offsetTop,
					behavior: "smooth",
				});
			}
		}
	}

	function textFormater(str: string, numberMax: number) {
		if (str.length > numberMax) {
			return str.slice(0, numberMax) + '...'
		}
		return str
	}

	function toggleSeeMore() {
		setSeeMore(s => !s);
	}

	return (
		<Container>
			<h1 id="graduacao">Graduação</h1>
			<div className="graduation">
				<div className="menu">
					<h2>Nossos Cursos</h2>
					<div className="courses">
						{cursos.map((value, index) => (
							<div
								key={`curso${index}`}
								className={cardSelect === index ? "card" : "disable"}
								onClick={() => setCardSelect(index)}
							>
								<h3>{value.titulo}</h3>
								<p className="displayMobile">{value.duracao ? `Duração: ${value.duracao} anos` : ''}</p>
							</div>
						))}
					</div>
					<div />
				</div>
				<div className="content">
					{cursos.map((value, index) => (
						<div key={`conteudo${index}`} className={'conteudo'}>
							<div
								key={`curso-content${index}`}
								className={cardSelect === index ? "courseInfo" : "disable"}
							>
								<h2>{value.titulo}</h2>
								<div className="description">
								<PrismicRichText
									field={value.descricao}
									// field={seeMore ? value.descricao : textFormater(value.descricao, 600)}
									components={{
									paragraph: ({ children }) => <p>{children}</p>,
									}}
									/>
									{value.descricao.length > 600 ? <button onClick={toggleSeeMore}>{seeMore ? 'Ver menos' : 'Ver mais'}</button> : ''}
								</div>
							</div>
							<div className="paginationEntryForm">
							{cardSelect === index &&
							<Pagination
								currentPage={currentPage}
								pages={pages}
								paginationFunction={setCurrentPage}
								hideTextFunction={hideText}
							/>
							}
							</div>
							<div className={cardSelect === index ? "info" : "disable"} key={`curso-info${index}`}>
								<Link href={value.ppp ? value.ppp : '/'}>
									<div>
										<p>Projeto político Pedagógico</p>
										<p className="link">Ver mais</p>
									</div>
								</Link>
								<Link href={value.matrizCurricular ? value.matrizCurricular : '/'}>
									<div>
										<p>Matriz Curricular</p>
										<p className="link">Ver mais</p>
									</div>
								</Link>
								<Link href={value.ementario ? value.ementario : '/'}>
									<div>
										<p>Ementário</p>
										<p className="link">Ver mais</p>
									</div>
								</Link>
								<Link href={value.guiaEstudantil ? value.guiaEstudantil : '/'}>
									<div>
										<p>Guia Estudantil</p>
										<p className="link">Ver mais</p>
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

export default Graduacao;
