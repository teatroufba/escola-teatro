import ReadMore from "@/components/basics/read-more/ReadMore";
import Image from "next/image";
import { useState } from "react";

import Pagination from "./Pagination";
import { StyledPresentationContainer } from "./styles";

interface IApresentacaoItem {
	uid: string;
	conteudo: string;
	imageAlt: string;
	imageUrl: string;
	titulo: string;
}

interface IApresentacao {
	conteudos: IApresentacaoItem[];
}

export default function Apresentacao({ conteudos }: IApresentacao) {
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
			const mainContainer = document.getElementById("main-container");

			if (text && mainContainer) {
				setIsShowingText(false);
				text.classList.add("hidden-text");
				mainContainer.style.height = window.innerWidth < 768 ? "100%" : "800px";
				text.style.height = window.innerWidth < 768 ? "100%" : "330px";

				window.scrollTo({
					top: document.getElementById("title")?.offsetTop,
					behavior: "smooth",
				});
			}
		}
	}

	return (
		<StyledPresentationContainer id="main-container">
			{currentContent.map((item) => (
				<div className="presentation-content" key={item.uid}>
					<div className="left-column" id="content">
						<div className="image-container" id="image-container">
							<Image
								alt={item.imageAlt}
								className="image"
								layout="fill"
								objectFit="cover"
								src={item.imageUrl}
							/>
						</div>
					</div>
					<div className="content-column-wrapper">
						<div className="content-column">
							<h1 id="title">Apresentação</h1>
							<h2>{item.titulo}</h2>
							<div className="text-content">
								<p id="text-content" className="hidden-text">
									{item.conteudo}
								</p>
								<ReadMore
									textID="text-content"
									mainContainerID="main-container"
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
								/>
							</div>
						</div>
						<Pagination
							currentPage={currentPage}
							pages={pages}
							paginationFunction={setCurrentPage}
							hideTextFunction={hideText}
						/>
					</div>
				</div>
			))}
		</StyledPresentationContainer>
	);
}
