import { useRouter } from "next/router";
import { MenuMobileContainer } from "./styles";
import Link from "next/link";

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

interface IsetActionMobile{
  setActionMobile: React.Dispatch<React.SetStateAction<boolean>>
  isShowingMobile: boolean
}

export default function MenuMobile({setActionMobile, isShowingMobile}:IsetActionMobile) {
  const router = useRouter();
  const url = router.pathname;
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

  function desativeMenuMobile(){
    setActionMobile(false)
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = !isShowingMobile ? "hidden" : "scroll";
    }
  }


  return (
    <MenuMobileContainer>
      <div className="submenu-wrapper">
        <ul>
          <li
            className="menu-main-option"
            id={url == "/" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button>
                <span onClick={desativeMenuMobile}>
                  <Link href="/" passHref>
                    <a>Início</a>
                  </Link>
                </span>
              </button>
            </div>
          </li>
          <li
            className="menu-main-option"
            id={url == "/escola" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button onClick={() => showSubmenu("escola")}>
                <span onClick={desativeMenuMobile}>
                  <Link href="/escola" passHref>
                    <a>A Escola</a>
                  </Link>
                </span>
                <ArrowIcon />
              </button>
            </div>
            <div id="escola-submenu" className="submenu-mobile hidden">
              <ul>
                <li onClick={desativeMenuMobile}>
                  <Link href="/escola/#apresentacao" passHref>
                    <a>Apresentação</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/escola/#setores-e-instancias" passHref>
                    <a>Setores e Instâncias</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/escola/#corpo-docente" passHref>
                    <a>Corpo Docente</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/escola/#corpo-tecnico" passHref>
                    <a>Corpo Técnico</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/escola/#como-chegar" passHref>
                    <a>Como Chegar</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="menu-main-option"
            id={url == "/ensino" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button onClick={() => showSubmenu("ensino")}>
                <span onClick={desativeMenuMobile}>
                  <Link href="/ensino" passHref>
                    <a>Ensino e Pesquisa</a>
                  </Link>
                </span>
                <ArrowIcon />
              </button>
            </div>
            <div id="ensino-submenu" className="submenu-mobile hidden">
              <ul>
                <li onClick={desativeMenuMobile}>
                  <Link href="/ensino/#graduacao" passHref>
                    <a>Graduação</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/ensino/#pos-graduacao" passHref>
                    <a>Pós-Graduação</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/ensino/#formas-de-ingresso" passHref>
                    <a>Ingresso</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/ensino/#producao-academica" passHref>
                    <a>Produção Acadêmica</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/ensino/#grupos-de-pesquisa" passHref>
                    <a>Grupos de Pesquisa</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="menu-main-option"
            id={url == "/extensao" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button onClick={() => showSubmenu("extensao")}>
                <span onClick={desativeMenuMobile}>
                  <Link href="/extensao" passHref>
                    <a>Extensão</a>
                  </Link>
                </span>
                <ArrowIcon />
              </button>
            </div>
            <div id="extensao-submenu" className="submenu-mobile hidden">
              <ul>
                <li onClick={desativeMenuMobile}>
                  <Link href="/extensao/#cia-de-teatro" passHref>
                    <a>Cia de Teatro</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/extensao/#curso-livre" passHref>
                    <a>Curso Livre</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/extensao/#ato-de-4" passHref>
                    <a>Ato de Quatro</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/extensao/#outros-projetos" passHref>
                    <a>Outros Projetos</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="menu-main-option"
            id={url == "/espacos" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button onClick={() => showSubmenu("espacos")}>
                <span onClick={desativeMenuMobile}>
                  <Link href="/espacos" passHref>
                    <a>Espaços</a>
                  </Link>
                </span>
                <ArrowIcon />
              </button>
            </div>
            <div id="espacos-submenu" className="submenu-mobile hidden">
              <ul>
                <li onClick={desativeMenuMobile}>
                  <Link href="/espacos/#main" passHref>
                    <a>Teatro Martim Gonçalves</a>
                  </Link>
                </li>
                <li onClick={desativeMenuMobile}>
                  <Link href="/espacos/#outros" passHref>
                    <a>Outros Espaços</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="menu-main-option"
            id={url == "/agenda" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button>
                <span onClick={desativeMenuMobile}>
                  <Link href="/agenda" passHref>
                    <a>Agenda</a>
                  </Link>
                </span>
              </button>
            </div>
          </li>

          <li
            className="menu-main-option"
            id={url == "/noticias" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button>
                <span onClick={desativeMenuMobile}>
                  <Link href="/noticias" passHref>
                    <a>Notícias</a>
                  </Link>
                </span>
              </button>
            </div>
          </li>
          <li
            className="menu-main-option"
            id={url == "/galeria" ? "selected_menu" : ""}
          >
            <div className="menu-option">
              <button>
                <span onClick={desativeMenuMobile}>
                  <Link href="/galeria" passHref>
                    <a>Galeria Virtual</a>
                  </Link>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </MenuMobileContainer>
  );
}
