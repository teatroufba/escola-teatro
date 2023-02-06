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
	const router = useRouter()
	const url = router.pathname
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
				<li className="menu-main-option" id={url == "/" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button>
								<span>
								<a href="/">Início</a>
								</span>
	
							</button>
						</div>
					</li>
					<li className="menu-main-option" id={url == "/escola" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button onClick={() => showSubmenu("escola")}>
								<span><a href="/escola">A Escola</a></span>
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
					<li className="menu-main-option" id={url == "/ensino" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button onClick={() => showSubmenu("ensino")}>
								<span><a href="/ensino">Ensino e Pesquisa</a></span>
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
					<li className="menu-main-option" id={url == "/extensao" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button onClick={() => showSubmenu("extensao")}>
								<span><a href="/extensao">Extensão</a></span>
								<ArrowIcon />
							</button>
						</div>
						<div id="extensao-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a href="/extensao/#cia-de-teatro">Cia de Teatro</a>
								</li>
								<li>
									<a href="/extensao/#curso-livre">Curso Livre</a>
								</li>
								<li>
									<a href="/extensao/#ato-de-4">Ato de Quatro</a>
								</li>
								<li>
									<a href="/extensao/#outros-projetos">Outros Projetos</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="menu-main-option" id={url == "/espacos" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button onClick={() => showSubmenu("espacos")}>
								<span><a href="/espacos">Espaços</a></span>
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
					<li className="menu-main-option" id={url == "/agenda" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button>
								<span>
									<a href="/agenda">Agenda</a>
								</span>
							</button>
						</div>
					</li>

					<li className="menu-main-option" id={url == "/noticias" ? "selected_menu" : ''}>
						<div className="menu-option">
							<button>
								<span>
									<a href="/noticias">Notícias</a>
								</span>
							</button>
						</div>
					</li>
					<li className="menu-main-option" id={url == "/galeria" ? "selected_menu" : ''}>
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
