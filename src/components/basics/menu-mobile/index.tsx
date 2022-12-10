import { useRouter } from "next/router";
import { MenuMobileContainer } from "./styles";

function ArrowIcon() {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.8335 8.33337L10.0002 12.5L14.1668 8.33337H5.8335Z"
				fill="white"
			/>
		</svg>
	);
}

export default function MenuMobile() {
	function showSubmenu(section: string) {
		if (typeof document != "undefined") {
			const submenu = document.getElementById(`${section}-submenu`);

			if (submenu) {
				submenu.classList.contains("hidden")
					? submenu.classList.remove("hidden")
					: submenu.classList.add("hidden");
			}
		}
	}

	return (
		<MenuMobileContainer>
			<div className="submenu-wrapper">
				<ul>
				<li className="menu-main-option">
						<div className="menu-option">
							<button>
								<span>
								<a href="/">Início</a>
								</span>
	
							</button>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button onClick={() => showSubmenu("escola")}>
								<span>A Escola</span>
								<ArrowIcon />
							</button>
						</div>
						<div id="escola-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a href="/escola/#apresentacao">Apresentação</a>
								</li>
								<li>
									<a href="/escola/#formas-de-ingresso">Ingresso</a>
								</li>
								<li>
									<a href="/escola/#setores-e-instancias">
										Setores e Instâncias
									</a>
								</li>
								<li>
									<a href="/escola/#corpo-docente">Corpo Docente</a>
								</li>
								<li>
									<a href="/escola/#corpo-tecnico">Corpo Técnico</a>
								</li>
								<li>
									<a href="/escola/#como-chegar">Contato</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button onClick={() => showSubmenu("ensino")}>
								<span>Ensino e Pesquisa</span>
								<ArrowIcon />
							</button>
						</div>
						<div id="ensino-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a href="/ensino/#graduacao">Graduação</a>
								</li>
								<li>
									<a href="/ensino/#pos-graduacao">Pós-Graduação</a>
								</li>
								<li>
									<a href="/ensino/#grupos-de-pesquisa">Grupos de Pesquisa</a>
								</li>
								<li>
									<a href="/ensino/#producao-academica">Produção Acadêmica</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button>
								<span>
									
									<a href="/extensao">Extensão</a>
									
								</span>
								
							</button>
						</div>

						<div id="extensao-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a href="/extensos" >Cia de Teatro</a>
								</li>
								<li>
									<a href="/extensos">Curso Livre</a>
								</li>
								<li>
									<a href="/extensos">Ato de 4</a>
								</li>
								<li>
									<a href="/extensos">Outros Projetos</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button onClick={() => showSubmenu("espacos")}>
								<span>Espaços</span>
								<ArrowIcon />
							</button>
						</div>
						<div id="espacos-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a href="/espacos/#main">Teatro Martim Gonçalves</a>
								</li>
								<li>
									<a href="/espacos/#outros">Outros Espaços</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button>
								<span>
									<a href="/agenda">Agenda</a>
								</span>
							</button>
						</div>
					</li>

					<li className="menu-main-option">
						<div className="menu-option">
							<button>
								<span>
									<a href="/noticias">Notícias</a>
								</span>
							</button>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button>
								<span>
									<a href="/galeria">Galeria Virtual</a>
								</span>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</MenuMobileContainer>
	);
}
