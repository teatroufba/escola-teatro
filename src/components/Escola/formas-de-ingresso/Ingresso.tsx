import ReadMore from "@/components/basics/read-more/ReadMore";
import Link from "next/link";
import { useEffect, useState } from "react";

import Pagination from "./Pagination";
import { StyledEntryFormsContainer } from "./styles";

interface IFormaIngresso {
	uid: string;
	link: string;
	titulo: string;
}
interface IConteudo {
	uid: string;
	conteudo: string;
	titulo: string;
}
interface FormasDeIngressoProps {
	conteudos: IConteudo[];
	formas: IFormaIngresso[];
}

export default function FormasDeIngresso({
	conteudos,
	formas,
}: FormasDeIngressoProps) {
	const [isShowingText, setIsShowingText] = useState(false);
	const [isClampedText, setIsClampedText] = useState(true);
	const [isLongText, setIsLongText] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [contentPerPage] = useState(1);

	const lastContent = currentPage * contentPerPage;
	const firstContent = lastContent - contentPerPage;
	const currentContent = conteudos.slice(firstContent, lastContent);

	const pages = [...Array(Math.ceil(conteudos.length / contentPerPage)).keys()];

	function hideText() {
		if (isShowingText) {
			const text = document.getElementById("entry-form-text-content");
			const mainContainer = document.getElementById("formas-de-ingresso");

			if (text && mainContainer) {
				setIsShowingText(false);
				text.classList.add("hidden-text");
				mainContainer.style.height = window.innerWidth < 768 ? "100%" : "800px";
				text.style.height = window.innerWidth < 768 ? "100%" : "300px";

				window.scrollTo({
					top: document.getElementById("entry-form-title")?.offsetTop,
					behavior: "smooth",
				});
			}
		}
	}

	return (
		<StyledEntryFormsContainer id="formas-de-ingresso">
			<h1 id="entry-form-title">Formas de Ingresso</h1>
			<div className="entry-content">
				<div className="left-column">
					{formas.map((forma) => (
						<div className="entry-form" key={forma.uid}>
							<Link passHref href={forma.link}>
								<a href={forma.link} rel="noopener noreferrer" target="_blank">
									<h3>{forma.titulo}</h3>
								</a>
							</Link>
						</div>
					))}
				</div>

				<div className="right-column">
					{currentContent.map((forma) => (
						<div className="entry-form-info" key={forma.uid}>
							<div className="entry-form-info-content">
								<h3>{forma.titulo}</h3>
								<div className="text-content">
									<p id="entry-form-text-content" className="hidden-text">
										{forma.conteudo}
									</p>
									<ReadMore
										textID="entry-form-text-content"
										mainContainerID="formas-de-ingresso"
										buttonID="entry-form-show-text-btn"
										titleID="entry-form-title"
										textHeight={300}
										isShowingText={isShowingText}
										isClampedText={isClampedText}
										isLongText={isLongText}
										currentPage={currentPage}
										maxCharacters={815}
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
					))}
				</div>
			</div>
		</StyledEntryFormsContainer>
	);
}
