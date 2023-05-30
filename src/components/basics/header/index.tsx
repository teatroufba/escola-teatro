import Image from "next/image";
import React, { useEffect, useState } from "react";

import image from "@/public/brasaoSemLetra.png";

import { HeaderContainer, HeaderInferior, HeaderSuperior } from "./styles";
import SubmenuHeader from "../submenu-header";
import StyledDropdown from "../menumobile";
import MenuMobile from "../menu-mobile";
import { useRouter } from "next/router";
import Link from "next/link";

interface SubmenuOption {
  href: string;
  option: string;
}

interface SubmenuOptions {
  options: SubmenuOption[];
}

function Header() {
  const router = useRouter();
  const url = router.pathname;
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
          {
            href: "/ensino/#producao-academica",
            option: "Produção Acadêmica",
          },
          {
            href: "/ensino/#grupos-de-pesquisa",
            option: "Grupos de Pesquisa",
          },
        ]);
        break;

      case "extensao":
        setOptions([
          {
            href: "/extensao/#cia-de-teatro",
            option: "Cia de Teatro",
          },
          { href: "/extensao/#curso-livre", option: "Curso Livre" },
          { href: "/extensao/#ato-de-4", option: "Ato de 4" },
          {
            href: "/extensao/#outros-projetos",
            option: "Outros Projetos",
          },
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
          <Link href="/" passHref>
            <a>
              <div className="logo-img">
                <Image alt="brasao" src={image} height={135} width={150} />
              </div>
            </a>
          </Link>

          <p>Escola de Teatro | UFBA</p>
        </div>

        <div className={isShowingMobile ? "social-menu-open" : "social-navbar"}>
          <div id="ham-btn" onClick={() => showSubmenuMobile()}>
            <div className="ham-btn-bar" />
            <div className="ham-btn-bar" />
            <div className="ham-btn-bar" />
          </div>

          <ul className="social">
            <a
              className="desktop"
              href="https://www.facebook.com/ufba.escoladeteatro/"
              target="_blank"
            >
              <Image
                alt="Icone do Facebook"
                height={50}
                src="/face-icon.svg"
                width={50}
              />
            </a>
            <a
              className="desktop"
              href="https://www.instagram.com/escoladeteatro.ufba/"
              target="_blank"
            >
              <Image
                alt="Icone do Instagram"
                height={50}
                src="/insta-icon.svg"
                width={50}
              />
            </a>
            <a
              className="desktop"
              href="https://www.youtube.com/user/teatroufba"
              target="_blank"
            >
              <Image
                alt="Icone do Youtube"
                height={50}
                src="/youtube-icon.svg"
                width={50}
              />
            </a>
            <a
              className="desktop"
              href="https://www.flickr.com/photos/128786324@N02/sets/"
              target="_blank"
            >
              <Image
                alt="Icone do Flickr"
                height={50}
                src="/flickr-icon.svg"
                width={50}
              />
            </a>
          </ul>

          <ul className="socialMobileIcons">
            <a
              className="desktop"
              href="https://www.facebook.com/ufba.escoladeteatro/"
              target="_blank"
            >
              <Image
                alt="Icone do Facebook"
                height={30}
                src="/facebookMobileIcon.svg"
                width={30}
              />
            </a>
            <a
              className="desktop"
              href="https://www.instagram.com/escoladeteatro.ufba/"
              target="_blank"
            >
              <Image
                alt="Icone do Instagram"
                height={30}
                src="/instagramMobileIcon.svg"
                width={30}
              />
            </a>
            <a
              className="desktop"
              href="https://www.youtube.com/user/teatroufba"
              target="_blank"
            >
              <Image
                alt="Icone do Youtube"
                height={30}
                src="/youtubeMobileIcon.svg"
                width={30}
              />
            </a>
            <a
              className="desktop"
              href="https://www.flickr.com/photos/128786324@N02/sets/"
              target="_blank"
            >
              <Image
                alt="Icone do Flickr"
                height={30}
                src="/flickrMobileIcon.svg"
                width={30}
              />
            </a>
          </ul>
        </div>
      </HeaderSuperior>

      <HeaderInferior>
        <ul className="menu">
          <li className={url == "/" ? "selected_menu" : ""}>
            <Link href="/" passHref>
              <a>Início</a>
            </Link>
          </li>
          <li className={url == "/escola" ? "selected_menu" : ""}>
            <Link passHref href="/escola">
              <a
                id="escola"
                onMouseEnter={() => showSubmenu("escola")}
                onMouseLeave={() => hideSubmenu("escola")}
              >
                A Escola
              </a>
            </Link>
          </li>
          <li className={url == "/ensino" ? "selected_menu" : ""}>
            <Link passHref href="/ensino">
              <a
                id="ensino"
                onMouseEnter={() => showSubmenu("ensino")}
                onMouseLeave={() => hideSubmenu("ensino")}
              >
                Ensino e Pesquisa
              </a>
            </Link>
          </li>
          <li className={url == "/extensao" ? "selected_menu" : ""}>
            <Link passHref href="/extensao">
              <a
                id="extensao"
                onMouseEnter={() => showSubmenu("extensao")}
                onMouseLeave={() => hideSubmenu("extensao")}
              >
                Extensão
              </a>
            </Link>
          </li>
          <li className={url == "/espacos" ? "selected_menu" : ""}>
            <Link passHref href="/espacos">
              <a
                id="espacos"
                onMouseEnter={() => showSubmenu("espacos")}
                onMouseLeave={() => hideSubmenu("espacos")}
              >
                Espaços
              </a>
            </Link>
          </li>
          <li className={url == "/agenda" ? "selected_menu" : ""}>
            <Link href="/agenda" passHref>
              <a>Agenda</a>
            </Link>
          </li>

          <li className={url == "/noticias" ? "selected_menu" : ""}>
            <Link href="/noticias" passHref>
              <a>Notícias</a>
            </Link>
          </li>
          <li className={url == "/galeria" ? "selected_menu" : ""}>
            <Link href="/galeria" passHref>
              <a>Galeria Virtual</a>
            </Link>
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
