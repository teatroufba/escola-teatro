import Image from "next/image";
import React, { useEffect, useState } from "react";

import image from "@/public/brasao.png";

import { HeaderContainer, HeaderInferior, HeaderSuperior } from "./styles";
import SubmenuHeader from "../submenu-header";
import StyledDropdown from "../menumobile";
import MenuMobile from "../menu-mobile";

interface SubmenuOption {
	href: string;
	option: string;
}

interface SubmenuOptions {
	options: SubmenuOption[];
}

function Header() {
	const [options, setOptions] = useState<SubmenuOption[]>([]);
	const [section, setSection] = useState<string>("");
	const [isShowing, setIsShowing] = useState(false);
	const [isShowingMobile, setIsShowingMobile] = useState(false);

	function showSubmenu(section: string) {
		setIsShowing(true);
		setSection(section);

		switch (section) {
			case "escola":
				setOptions([
					{ href: "/escola/#apresentacao", option: "Apresentação" },
					{ href: "/escola/#formas-de-ingresso", option: "Ingresso" },
					{
						href: "/escola/#setores-e-instancias",
						option: "Setores e Instâncias",
					},
					{ href: "/escola/#corpo-docente", option: "Corpo Docente" },
					{ href: "/escola/#corpo-tecnico", option: "Corpo Técnico" },
					{ href: "/escola/#como-chegar", option: "Contato" },
				]);
				break;

			case "ensino":
				setOptions([
					{ href: "/ensino/#graduacao", option: "Graduação" },
					{ href: "/ensino/#pos-graduacao", option: "Pós Graduação" },
					{ href: "/ensino/#grupos-de-pesquisa", option: "Grupos de Pesquisa" },
					{ href: "/ensino/#producao-academica", option: "Produção Acadêmica" },
				]);
				break;

			case "extensao":
				setOptions([
					{ href: "", option: "Cia de Teatro" },
					{ href: "", option: "Curso Livre" },
					{ href: "", option: "Ato de 4" },
					{ href: "", option: "Outros Projetos" },
				]);
				break;

			case "espacos":
				setOptions([
					{ href: "", option: "Teatro Martim Gonçalves" },
					{ href: "", option: "Pavilhão de Aulas" },
					{ href: "", option: "Casarão" },
					{ href: "", option: "Sala 05" },
					{ href: "", option: "Galeria Nilda Spencer" },
					{ href: "", option: "Carpintaria" },
					{ href: "", option: "Rouparia" },
					{ href: "", option: "Biblioteca" },
				]);
				break;
		}
	}

	function hideSubmenu(section: string) {
		if (typeof document != "undefined") {
			document.getElementById(section)?.classList.remove("hover-state");
		}
		setIsShowing(false);
	}

	function showSubmenuMobile() {
		const body = document.querySelector("body");
		setIsShowingMobile(isShowingMobile ? false : true);

		if (body) {
			body.style.overflow = !isShowingMobile ? "hidden" : "scroll";
		}
	}

	return (
		<HeaderContainer>
			<HeaderSuperior>
				<div className="header">
					<div className="logo-img">
						<Image alt="brasao" src={image} />
					</div>

					<p>Escola de Teatro da UFBA</p>
				</div>

				<div className="social-navbar">
					<div id="ham-btn" onClick={() => showSubmenuMobile()}>
						<div className="ham-btn-bar" />
						<div className="ham-btn-bar" />
						<div className="ham-btn-bar" />
					</div>

					<ul className="social">
						<a href="https://www.facebook.com/ufba.escoladeteatro" target="_blank">
							<input
								alt="facebook"
								className="facebook"
								height={50}
								src="./icon-facebook.svg"
								type="image"
								width={50}
							/>
						</a>
						<a href="https://instagram.com/escoladeteatro.ufba" target="_blank">
							<input
								alt="instagram"
								className="instagram"
								height={50}
								src="./icon-instagram.svg"
								type="image"
								width={50}
							/>
						</a>
						<a href="https://youtube.com/c/teatroufba" target="_blank">
							<input
								alt="youtube"
								className="youtube"
								height={50}
								src="./icon-youtube.svg"
								type="image"
								width={50}
							/>
						</a>
						<a href="https://www.flickr.com/photos/128786324@N02/" target="_blank">
							<input
								alt="flickr"
								className="flickr"
								height={50}
								src="./icon-flickr.svg"
								type="image"
								width={50}
							/>
						</a>
					</ul>
				</div>
			</HeaderSuperior>

			<HeaderInferior>
				<ul className="menu">
					<li>
						<a href="/">Início</a>
					</li>
					<li>
						<a
							id="escola"
							href="/escola"
							onMouseEnter={() => showSubmenu("escola")}
							onMouseLeave={() => hideSubmenu("escola")}
						>
							A Escola
						</a>
					</li>
					<li>
						<a
							id="ensino"
							href="/ensino"
							onMouseEnter={() => showSubmenu("ensino")}
							onMouseLeave={() => hideSubmenu("ensino")}
						>
							Ensino e Pesquisa
						</a>
					</li>
					<li>
						<a
							id="extensao"
							href="/extensao"
							onMouseEnter={() => showSubmenu("extensao")}
							onMouseLeave={() => hideSubmenu("extensao")}
						>
							Extensão
						</a>
					</li>
					<li>
						<a
							id="espacos"
							href="/espacos"
							onMouseEnter={() => showSubmenu("espacos")}
							onMouseLeave={() => hideSubmenu("espacos")}
						>
							Espaços
						</a>
					</li>
					<li>
						<a href="/agenda">Agenda</a>
					</li>
					<li>
						<a href="/galeria">Galeria Virtual</a>
					</li>
				</ul>
			</HeaderInferior>

			{isShowing ? (
				<SubmenuHeader
					options={options}
					menuSection={section}
					setIsShowingFunction={setIsShowing}
				/>
			) : null}

			{isShowingMobile ? <MenuMobile></MenuMobile> : null}
		</HeaderContainer>
	);
}
export default Header;
