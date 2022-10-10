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
							<button onClick={() => showSubmenu("escola")}>
								<span>A Escola</span>
								<ArrowIcon />
							</button>
						</div>
						<div id="escola-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a>Apresentação</a>
								</li>
								<li>
									<a>Ingresso</a>
								</li>
								<li>
									<a>Setores e Instâncias</a>
								</li>
								<li>
									<a href="#staff-title">Corpo Docente</a>
								</li>
								<li>
									<a>Corpo Técnico</a>
								</li>
								<li>
									<a>Contato</a>
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
									<a>Graduação</a>
								</li>
								<li>
									<a>Pós-Graduação</a>
								</li>
								<li>
									<a>Grupos de Pesquisa</a>
								</li>
								<li>
									<a>Produção Acadêmica</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="menu-main-option">
						<div className="menu-option">
							<button onClick={() => showSubmenu("extensao")}>
								<span>Extensão</span>
								<ArrowIcon />
							</button>
						</div>
						<div id="extensao-submenu" className="submenu-mobile hidden">
							<ul>
								<li>
									<a>Cia de Teatro</a>
								</li>
								<li>
									<a>Curso Livre</a>
								</li>
								<li>
									<a>Ato de 4</a>
								</li>
								<li>
									<a>Outros Projetos</a>
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
									<a>Teatro Martin Gonçalves</a>
								</li>
								<li>
									<a>Pavilhão de Aulas</a>
								</li>
								<li>
									<a>Casarão</a>
								</li>
								<li>
									<a>Sala 05</a>
								</li>
								<li>
									<a>Galeria Nilda Spencer</a>
								</li>
								<li>
									<a>Carpintaria</a>
								</li>
								<li>
									<a>Rouparia</a>
								</li>
								<li>
									<a>Biblioteca</a>
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
									<a href="/">Galeria Virtual</a>
								</span>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</MenuMobileContainer>
	);
}
