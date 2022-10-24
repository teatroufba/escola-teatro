import Link from "next/link";
import styled from "styled-components";

const FooterStyled = styled.div`
	background-color: #282b62;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		display: none;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 50px;
		color: white;
		padding: 50px 20px;

		div {
			display: flex;
			flex-direction: column;
			gap: 49px;
			padding: 0;

			h1 {
				font-size: 1.5rem;
				font-family: "Merriweather";
				font-weight: 400;
			}
			ul {
				list-style: none;
				display: flex;
				flex-direction: column;
				gap: 25px;
				padding: 0;

				li {
					font-size: 1rem;
					a {
						font-family: "Arial";
						font-weight: 400;
						font-size: 16px;
						text-decoration: none;
						color: inherit;
						&:hover {
							color: #9a1a4b;
						}
					}
				}
			}
		}
	}
`;

function FooterDown() {
	return (
		<FooterStyled>
			<div>
				<div>
					<h1>A Escola</h1>
					<ul>
						<li>
							<Link passHref href="/escola/#apresentacao">
								<a href="/escola/#apresentacao">Apresentação</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/escola/#formas-de-ingresso">
								<a href="/escola/#formas-de-ingresso">Formas de Ingresso</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/escola/#setores-e-instancias">
								<a href="/escola/#setores-e-instancias">Setores e Instâncias</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/escola/#corpo-docente">
								<a href="/escola/#corpo-docente">Corpo Docente</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/escola/#corpo-tecnico">
								<a href="/escola/#corpo-tecnico">Corpo Técnico</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/escola/#como-chegar">
								<a href="/escola/#como-chegar">Como Chegar</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h1>Ensino e Pesquisa</h1>
					<ul>
						<li>
							<Link passHref href="/ensino/#graduacao">
								<a href="/ensino/#graduacao">Graduação</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/ensino/#pos-graduacao">
								<a href="/ensino/#pos-graduacao">Pós-Graduação</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/ensino/#grupos-de-pesquisa">
								<a href="/ensino/#grupos-de-pesquisa">Grupos de Pesquisa</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/ensino/#producao-academica">
								<a href="/ensino/#producao-academica">Produção Acadêmica</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h1>Extensão</h1>
					<ul>
						<li>
							<Link passHref href="/">
								<a href="replace">Cia de Teatro</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Curso Livre</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Ato de 4</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Outros projetos</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h1>Espaços</h1>
					<ul>
						<li>
							<Link passHref href="/">
								<a href="replace">Teatro Martim Gonçalves</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Pavilhão de Aulas</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Casarão</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Sala 05</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Galeria Nilda Spencer</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Carpintaria</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Rouparia</a>
							</Link>
						</li>
						<li>
							<Link passHref href="/">
								<a href="replace">Biblioteca</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h1>Agenda</h1>
					<ul>
						<li>
							<Link passHref href="/agenda">
								<a href="replace">Agenda</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h1>Galeria Virtual</h1>
					<ul>
						<li>
							<Link passHref href="/">
								<a href="replace">Galeria Virtual</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</FooterStyled>
	);
}

export default FooterDown;
