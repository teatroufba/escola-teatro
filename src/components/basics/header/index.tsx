import Image from "next/image";
import React, { useEffect, useState } from "react";

import image from "@/public/brasaoSemLetra.png";

import { HeaderContainer, HeaderInferior, HeaderSuperior } from "./styles";
import SubmenuHeader from "../submenu-header";
import StyledDropdown from "../menumobile";
import MenuMobile from "../menu-mobile";
import { useRouter } from 'next/router'
import Link from "next/link";

interface SubmenuOption {
	href: string;
	option: string;
}

interface SubmenuOptions {
	options: SubmenuOption[];
}

function Header() {
	const router = useRouter()
	const url = router.pathname
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
					{
						href: "/escola/#setores-e-instancias",
						option: "Setores e Instâncias",
					},
					{ href: "/escola/#corpo-docente", option: "Corpo Docente" },
					{ href: "/escola/#corpo-tecnico", option: "Corpo Técnico" },
					{ href: "/escola/#como-chegar", option: "Como Chegar" },
				]);
				break;

			case "ensino":
				setOptions([
					{ href: "/ensino/#graduacao", option: "Graduação" },
					{ href: "/ensino/#pos-graduacao", option: "Pós Graduação" },
					{ href: "/ensino/#formas-de-ingresso", option: "Ingresso" },
					{ href: "/ensino/#producao-academica", option: "Produção Acadêmica" },
					{ href: "/ensino/#grupos-de-pesquisa", option: "Grupos de Pesquisa" },
				]);
				break;

			case "extensao":
				setOptions([
					{ href: "/extensao/#cia-de-teatro", option: "Cia de Teatro" },
					{ href: "/extensao/#curso-livre", option: "Curso Livre" },
					{ href: "/extensao/#ato-de-4", option: "Ato de 4" },
					{ href: "/extensao/#outros-projetos", option: "Outros Projetos" },
				]);
				break;

			case "espacos":
				setOptions([
					{ href: "/espacos", option: "Teatro Martim Gonçalves" },
					{ href: "/espacos/#outros", option: "Outros Espaços" },
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
					<Link href="/">
						<div className="logo-img">
							<Image alt="brasao" src={image} height={135} width={150}/>
						</div>
					</Link>
					

					<p>Escola de Teatro | UFBA</p>
				</div>

				<div className="social-navbar">
					<div id="ham-btn" onClick={() => showSubmenuMobile()}>
						<div className="ham-btn-bar" />
						<div className="ham-btn-bar" />
						<div className="ham-btn-bar" />
					</div>

					<ul className="social">
						<Link passHref href="https://www.facebook.com/ufba.escoladeteatro/" >
							<a className="desktop" href="replace" target="_blank">
							<Image
								alt="Icone do Facebook"
								height={50}
								src="/face-icon.svg"
								width={50}
							/>
							</a>
						</Link>
						<Link passHref href="https://www.instagram.com/escoladeteatro.ufba/" >
							<a className="desktop" href="replace" target="_blank">
							<Image
								alt="Icone do Instagram"
								height={50}
								src="/insta-icon.svg"
								width={50}
							/>
							</a>
						</Link>
						<Link passHref href="https://www.youtube.com/user/teatroufba" >
							<a className="desktop" href="replace" target="_blank" >
							<Image
								alt="Icone do Youtube"
								height={50}
								src="/youtube-icon.svg"
								width={50}
							/>
							</a>
						</Link>
						<Link passHref href="https://www.flickr.com/photos/128786324@N02/sets/" >
							<a className="desktop" href="replace" target="_blank">
							<Image
								alt="Icone do Flickr"
								height={50}
								src="/flickr-icon.svg"
								width={50}
							/>
							</a>
						</Link>
					</ul>
				</div>
			</HeaderSuperior>

			<HeaderInferior>
				<ul className="menu">
					<li className={url == "/" ? "selected_menu" : ''}>
						<a href="/">Início</a>
					</li>
					<li className={url == "/escola" ? "selected_menu" : ''}>
						<a
							id="escola"
							href="/escola"
							onMouseEnter={() => showSubmenu("escola")}
							onMouseLeave={() => hideSubmenu("escola")}
						>
							A Escola
						</a>
					</li>
					<li className={url == "/ensino" ? "selected_menu" : ''}>
						<a
							id="ensino"
							href="/ensino"
							onMouseEnter={() => showSubmenu("ensino")}
							onMouseLeave={() => hideSubmenu("ensino")}
						>
							Ensino e Pesquisa
						</a>
					</li>
					<li className={url == "/extensao" ? "selected_menu" : ''}>
						<a
							id="extensao"
							href="/extensao"
							onMouseEnter={() => showSubmenu("extensao")}
							onMouseLeave={() => hideSubmenu("extensao")}
						>
							Extensão
						</a>
					</li>
					<li className={url == "/espacos" ? "selected_menu" : ''}>
						<a
							id="espacos"
							href="/espacos"
							onMouseEnter={() => showSubmenu("espacos")}
							onMouseLeave={() => hideSubmenu("espacos")}
						>
							Espaços
						</a>
					</li>
					<li className={url == "/agenda" ? "selected_menu" : ''}>
						<a href="/agenda">Agenda</a>
					</li>

					<li className={url == "/noticias" ? "selected_menu" : ''}>
						<a href="/noticias">Notícias</a>
					</li>
					<li className={url == "/galeria" ? "selected_menu" : ''}>
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
