import ReadMore from "@/components/basics/read-more/ReadMore";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { StyledBannerApresentacaoContainer } from "./styles";

interface IApresentacaoItem {
  conteudo: [];
  imageAlt: string;
  imageUrl: string;
  titulo: string;
}

interface IApresentacao {
  conteudos: IApresentacaoItem[];
}

export default function BannerApresentacao({ conteudos }: IApresentacao) {
  const [isShowingText, setIsShowingText] = useState(false);
  const [isClampedText, setIsClampedText] = useState(false);
  const [isLongText, setIsLongText] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(1);

  const lastContent = currentPage * contentPerPage;
  const firstContent = lastContent - contentPerPage;
  const currentContent = conteudos.slice(firstContent, lastContent);

  const pages = [...Array(Math.ceil(conteudos.length / contentPerPage)).keys()];

  function hideText() {
    if (isShowingText) {
      const text = document.getElementById("text-content");
      const mainContainer = document.getElementById("apresentacao");

      if (text && mainContainer) {
        setIsShowingText(false);
        text.classList.add("hidden-text");
        //mainContainer.style.height = window.innerWidth < 768 ? "100%" : "900px";
        text.style.height = window.innerWidth < 768 ? "100%" : "330px";

        window.scrollTo({
          top: document.getElementById("title")?.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }

  useEffect(() => {
    if (document != undefined) {
      const text = document.getElementById("text-content");
      if (text) {
        text.style.height = text.style.height <= "330" ? "300px" : "100%";
      }
    }
  }, [currentContent]);

  return (
    <StyledBannerApresentacaoContainer>
      {currentContent.map((item, index) => (
        <div
          className="content-wrapper"
          id="apresentacao"
          key={`apresentacao${index}`}
        >
          <div className="left-column">
            <Image
              alt={item.imageAlt}
              className="image"
              layout="fill"
              objectFit="cover"
              src={item.imageUrl}
            />
          </div>
          <div className="right-column">
            <div className="presentation-content-wrapper">
              <h1 id="presentation-section-title">Apresentação</h1>
              <div className="presentation-content">
                <h2>{item.titulo ? item.titulo : "Sobre a escola"}</h2>
                <div id="text-content" className="hidden-text">
                  <PrismicRichText
                    field={item.conteudo}
                    components={{
                      paragraph: ({ children }) => <p>{children}</p>,
                    }}
                  />
                </div>
                {/* <ReadMore
									textID="text-content"
									mainContainerID="apresentacao"
									buttonID="show-text-btn"
									titleID="title"
									textHeight={330}
									isShowingText={isShowingText}
									isClampedText={isClampedText}
									isLongText={isLongText}
									currentPage={currentPage}
									maxCharacters={490}
									setIsShowingText={setIsShowingText}
									setIsClampedText={setIsClampedText}
									setIsLongText={setIsLongText}
								/> */}
              </div>
              <Pagination
                currentPage={currentPage}
                pages={pages}
                paginationFunction={setCurrentPage}
                hideTextFunction={hideText}
              />
            </div>
          </div>
        </div>
      ))}
    </StyledBannerApresentacaoContainer>
  );
}
