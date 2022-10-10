import Image from "next/image";
import React, { useState } from "react";

import image from "@/public/brasao.png";

import {
	HeaderContainer,
	HeaderInferior,
	HeaderSuperior,
	Submenu,
} from "./styles";

interface SubmenuOption {
	id: string;
	option: string;
}

interface SubmenuOptions {
	options: SubmenuOption[];
}

function Header() {
	const [options, setOptions] = useState<SubmenuOption[]>([]);
	const [section, setSection] = useState<string>("");
	const [isShowing, setIsShowing] = useState(false);

	function showSubmenu(section: string) {
		switch (section) {
			case "escola":
				if (typeof document != "undefined") {
					document.getElementById("escola")?.classList.add("hover-state");
				}
				setIsShowing(true);
				setSection("escola");
				setOptions([
					{ id: "", option: "Apresentação" },
					{ id: "", option: "Ingresso" },
					{ id: "", option: "Setores e Instâncias" },
					{ id: "", option: "Corpo Docente" },
					{ id: "", option: "Corpo Técnico" },
					{ id: "", option: "Contato" },
				]);
				break;

			case "ensino":
				if (typeof document != "undefined") {
					document.getElementById("ensino")?.classList.add("hover-state");
				}
				setIsShowing(true);
				setSection("ensino");
				setOptions([
					{ id: "", option: "Graduação" },
					{ id: "", option: "Pós Graduação" },
					{ id: "", option: "Grupos de Pesquisa" },
					{ id: "", option: "Produção Acadêmica" },
				]);
				break;

			case "extensao":
				if (typeof document != "undefined") {
					document.getElementById("extensao")?.classList.add("hover-state");
				}
				setIsShowing(true);
				setSection("extensao");
				setOptions([
					{ id: "", option: "Cia de Teatro" },
					{ id: "", option: "Curso Livre" },
					{ id: "", option: "Ato de 4" },
					{ id: "", option: "Outros Projetos" },
				]);
				break;

			case "espacos":
				if (typeof document != "undefined") {
					document.getElementById("espacos")?.classList.add("hover-state");
				}
				setIsShowing(true);
				setSection("espacos");
				setOptions([
					{ id: "", option: "Teatro Martin Gonçalves" },
					{ id: "", option: "Pavilhão de Aulas" },
					{ id: "", option: "Casarão" },
					{ id: "", option: "Sala 05" },
					{ id: "", option: "Galeria Nilda Spencer" },
					{ id: "", option: "Carpintaria" },
					{ id: "", option: "Rouparia" },
					{ id: "", option: "Biblioteca" },
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
					<div id="ham-btn">
						<div className="ham-btn-bar" />
						<div className="ham-btn-bar" />
						<div className="ham-btn-bar" />
					</div>

					<ul className="social">
						<a href="http://www.facebook.com.br">
							<input
								alt="facebook"
								className="facebook"
								height={50}
								src="./icon-facebook.svg"
								type="image"
								width={50}
							/>
						</a>
						<a href="http://www.instagram.com.br">
							<input
								alt="instagram"
								className="instagram"
								height={50}
								src="./icon-instagram.svg"
								type="image"
								width={50}
							/>
						</a>
						<a href="http://www.youtube.com.br">
							<input
								alt="youtube"
								className="youtube"
								height={50}
								src="./icon-youtube.svg"
								type="image"
								width={50}
							/>
						</a>
						<a href="http://www.flickr.com.br">
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
				<Submenu>
					<ul
						className="submenu"
						onMouseEnter={() => showSubmenu(section)}
						onMouseLeave={() => hideSubmenu(section)}
					>
						{options.map((item) => (
							<li>
								<a href="/">{item.option}</a>
							</li>
						))}
					</ul>
				</Submenu>
			) : null}
		</HeaderContainer>
	);
}
export default Header;
