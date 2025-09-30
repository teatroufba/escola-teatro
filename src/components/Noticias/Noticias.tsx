/* eslint-disable no-param-reassign */
import Image from "next/image";
import { useEffect, useState } from "react";

import PostCard from "./PostCard";
import { StyledFilter, StyledNoticias } from "./styles";

interface INoticias {
  post: IPosts[];
}

interface IPosts {
  date: string;
  imageAlt: string;
  imageUrl: string;
  miniaturaAlt: string;
  miniaturaUrl: string;
  subtitle: string;
  tags: string[];
  title: string;
  uid: string;
}

export default function Noticias({ post }: INoticias) {
  const [Width, setWidth] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("desc");
  const [TopicoActive, setTopicoActive] = useState<boolean>(false);
  const [filter, setFilter] = useState("todos");
  const [idate, setIDate] = useState("");
  const [fdate, setFDate] = useState("");
  console.log(post);

  const orderedPost = [...post].sort((a, b) => {
    const timestamp = (date: string) => {
      if (!date) return 0;
      const parsedDate = new Date(date);
      return isNaN(parsedDate.getTime()) ? 0 : parsedDate.getTime();
    };
    return timestamp(b.date) - timestamp(a.date);
  });

  function scrollToTop() {
    if (typeof window != "undefined") {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }
  }

  function paginationPlus() {
    scrollToTop();
    setCurrentPage(currentPage + 1);
  }

  function paginationSet() {
    scrollToTop();
    setCurrentPage(paginationBtn);
  }

  function paginationDecr() {
    scrollToTop();
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    function resize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function setPaginationBtn(posts: number, maxPage: number) {
    return Math.ceil(posts / maxPage);
  }
  const paginationBtn = setPaginationBtn(post.length, 9);

  function filtered(itens: IPosts[], maxPost: number, current: number) {
    current -= 1;
    const first = maxPost * current;
    const last = first + maxPost;
    let posts = itens.map((item) => item);

    if (idate !== "" && fdate !== "") {
      const iInput = new Date(idate);
      const fInput = new Date(fdate);

      iInput.setHours(0, 0, 0); 
      fInput.setHours(23, 59, 59);

      posts = posts.filter((value) => {
        if (!value.date) return false;
        
        try {
          const date = new Date(value.date);
          if (isNaN(date.getTime())) return false;
          return date >= iInput && date <= fInput;
        } catch (e) {
          return false;
        }
      });
    }

    if (sort === "a-z") {
      posts.sort((a, b) => {
        let tituloA = a.title.toUpperCase();
        let tituloB = b.title.toUpperCase();

        if (tituloA < tituloB) return -1;

        if (tituloA > tituloB) return 1;

        return 0;
      });
    }

    if (sort === "z-a") {
      posts.sort((a, b) => {
        let tituloA = a.title.toUpperCase();
        let tituloB = b.title.toUpperCase();

        if (tituloB < tituloA) return -1;

        if (tituloB > tituloA) return 1;

        return 0;
      });
    }

    if (filter !== "todos") {
      posts = posts.filter((value) => value?.tags?.includes(filter));
    }

    if (sort === "asc") return posts.slice(first, last).reverse();

    return posts.slice(first, last);
  }
  return (
    <StyledNoticias>
      <div className="container-title">
        <h1>Notícias</h1>
        <h3>Veja as últimas notícias da Escola de Teatro da UFBA</h3>
      </div>

      <StyledFilter filter={filter} sort={sort}>
        {Width <= 1080 ? (
          <>
            <div className="categoria-container-inputs">
              <span>
                <p>Filtrar por categoria</p>
              </span>
            </div>
            <div id="topico-select-container">
              <button
                type="button"
                className={`${TopicoActive ? "active" : ""} ${
                  filter !== "todos" ? "selected" : ""
                }`}
                onClick={() => {
                  setTopicoActive(!TopicoActive);
                }}
              >
                {filter[0].toUpperCase() + filter.substring(1)}
                <div className="seta-select" />
              </button>
              <div className={`select-window ${TopicoActive ? "active" : ""}`}>
                <label htmlFor="topico0">
                  <input
                    id="topico0"
                    name="topico"
                    type="radio"
                    value="todos"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Todos
                </label>
                <label htmlFor="topico1">
                  <input
                    id="topico1"
                    name="topico"
                    type="radio"
                    value="acadêmico"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Acadêmico
                </label>
                <label htmlFor="topico2">
                  <input
                    id="topico2"
                    name="topico"
                    type="radio"
                    value="avisos"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Avisos
                </label>
                <label htmlFor="topico3">
                  <input
                    id="topico3"
                    name="topico"
                    type="radio"
                    value="concursos"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Concursos
                </label>
                <label htmlFor="topico4">
                  <input
                    id="topico4"
                    name="topico"
                    type="radio"
                    value="eventos"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Eventos
                </label>
                <label htmlFor="topico5">
                  <input
                    id="topico5"
                    name="topico"
                    type="radio"
                    value="notas"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Notas
                </label>
                <label htmlFor="topico6">
                  <input
                    id="topico6"
                    name="topico"
                    type="radio"
                    value="parcerias"
                    onClick={(event) => {
                      setFilter(event.currentTarget.value);
                      setTopicoActive(false);
                    }}
                  />
                  Parcerias
                </label>
              </div>
            </div>

            <div className="sort-container">
              <div className="sort-container-inputs">
                <span>
                  <p>Filtrar por data</p>
                </span>
                <input
                  id="idate"
                  placeholder="Data de inicio"
                  type="date"
                  value={idate}
                  onChange={(e) => setIDate(e.target.value)}
                />
                <input
                  id="fdate"
                  placeholder="Data final"
                  type="date"
                  value={fdate}
                  onChange={(e) => setFDate(e.target.value)}
                />
                <button id="button-date" type="button">
                  Filtrar
                </button>
              </div>

              <div className="sort-container-buttons">
                <button
                  id="asc"
                  className="btn-cima"
                  onClick={() => setSort("asc")}
                >
                  Mais antigas
                </button>
                <button
                  id="desc"
                  className="btn-cima"
                  onClick={() => setSort("desc")}
                >
                  Mais recentes
                </button>
                <button id="a-z" onClick={() => setSort("a-z")}>
                  De A -Z
                </button>
                <button id="z-a" onClick={() => setSort("z-a")}>
                  De Z -A
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="containter-filter-button">
              <button id="todos" onClick={() => setFilter("todos")}>
                Todos
              </button>
              <button id="academico" onClick={() => setFilter("academico")}>
                Acadêmico
              </button>
              <button id="avisos" onClick={() => setFilter("avisos")}>
                Avisos
              </button>
              <button id="concursos" onClick={() => setFilter("concursos")}>
                Concursos
              </button>
              <button id="eventos" onClick={() => setFilter("eventos")}>
                Eventos
              </button>
              <button id="notas" onClick={() => setFilter("notas")}>
                Notas
              </button>
              <button id="parcerias" onClick={() => setFilter("parcerias")}>
                Parcerias
              </button>
            </div>

            <div className="sort-container">
              <div className="sort-container-buttons">
                <button id="desc" onClick={() => setSort("desc")}>
                  Mais recentes
                </button>
                <button id="asc" onClick={() => setSort("asc")}>
                  Mais antigas
                </button>
                <button id="a-z" onClick={() => setSort("a-z")}>
                  De A -Z
                </button>
                <button id="z-a" onClick={() => setSort("z-a")}>
                  De Z -A
                </button>
              </div>

              <div className="sort-container-inputs">
                <span>
                  <p>Filtrar por data</p>
                  <input
                    id="idate"
                    placeholder="Data de inicio"
                    type="date"
                    value={idate}
                    onChange={(e) => setIDate(e.target.value)}
                  />
                </span>
                <input
                  id="fdate"
                  placeholder="Data final"
                  type="date"
                  value={fdate}
                  onChange={(e) => setFDate(e.target.value)}
                />
                <button id="button-date" type="button">
                  Filtrar
                </button>
              </div>
            </div>
          </>
        )}
      </StyledFilter>

      <div className="posts-flex">
        {filtered(orderedPost, 9, currentPage).map((value, index) => (
          <PostCard
            date={value.date}
            imageAlt={value.miniaturaUrl ? value.miniaturaAlt : value.imageAlt}
            imageUrl={value.miniaturaUrl ? value.miniaturaUrl : value.imageUrl}
            subtitle={value.subtitle}
            title={value.title}
            uid={value.uid}
            key={`postNoticia-${index}`}
          />
        ))}
      </div>

      <div className="container-pag-btn">
        <button
          type="button"
          onClick={() => {
            if (currentPage > 1) paginationDecr();
          }}
        >
          <Image
            alt="página anterior"
            height={9}
            src="/icon-left.png"
            width={5}
          />
        </button>

        <div className="pages-btn">
          <button type="button">{currentPage} </button>
          <span>de</span>
          <button type="button" onClick={paginationSet}>
            {paginationBtn}
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            if (currentPage < paginationBtn) paginationPlus();
          }}
        >
          <Image
            alt="próxima página"
            height={9}
            src="/icon-right.png"
            width={5}
          />
        </button>
      </div>
    </StyledNoticias>
  );
}
