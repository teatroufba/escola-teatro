/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	color: #2d2b78;
	font-family: "Merriweather", serif;
	padding: 130px 0 80px 0;
	text-align: center;

	@media (max-width: 1300px) {
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
		max-width: 1235px;
		gap: 1.5rem;

		@media (max-width: 1300px) {
			flex-direction: column;
			width: 100%;
		}

		.menu {
			width: 40%;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			justify-content: space-between;

			@media (max-width: 1300px) {
				width: 100%;
			}

			.courses {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				.card {
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

			@media (max-width: 1300px) {
				width: 100%;
			}

			.courseInfo {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				.description {
					color: #2b2b2b;

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

				@media (max-width: 1300px) {
					margin: auto;
				}

				@media (max-width: 768px) {
					flex-direction: column;
					margin: 0;
				}

				div {
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

					a {
						color: #2d2b78;
						padding: 0;
						margin: 0;
						background-color: transparent;
						cursor: pointer;
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
	descricao: string,
	ppp: string,
	matrizCurricular: string,
	ementario: string,
	guiaEstudantil: string,
  }

function Graduacao({ cursos }: { cursos: IGraduacao[] }) {
	const [cardSelect, setCardSelect] = useState(0);
	const [seeMore, setSeeMore] = useState(false);

	function textFormater (str: string, numberMax: number) {
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
								<p>{value.duracao ? `Duração: ${value.duracao} anos` : '' }</p>
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
									<p>{seeMore ? value.descricao : textFormater(value.descricao, 600)}</p>
									{value.descricao.length > 600 ? <button onClick={toggleSeeMore}>{seeMore ? 'Ver menos' : 'Ver mais'}</button> : ''}
								</div>
							</div>
							<div className={cardSelect === index ? "info" : "disable"} key={`curso-info${index}`}>
								<div>
									<p>Projeto político Pedagógico</p>
									<Link href={value.ppp}>Ver mais</Link>
								</div>
								<div>
									<p>Matriz Curricular</p>
									<Link href={value.matrizCurricular}>Ver mais</Link>
								</div>
								<div>
									<p>Ementário</p>
									<Link href={value.ementario}>Ver mais</Link>
								</div>
								<div>
									<p>Guia Estudantil</p>
									<Link href={value.guiaEstudantil}>Ver mais</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}

export default Graduacao;
