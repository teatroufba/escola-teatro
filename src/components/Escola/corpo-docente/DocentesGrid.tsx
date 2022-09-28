import { useEffect, useState } from "react";

import StaffCard from "./DocenteCard";
import Pagination from "./Pagination";
import { StyledStaff } from "./styles";

interface IDocente {
	imagemAlt: string;
	email: string;
	imagemUrl: string;
	interesses: string;
	link: string;
	nome: string;
	uid: string;
}
interface DocentesProps {
	docentes: IDocente[];
	largura: number;
	tituloID: string;
}

export default function DocentesGrid({
	docentes,
	largura,
	tituloID,
}: DocentesProps) {
	const [width, setWidth] = useState(0);

	const [currentPage, setCurrentPage] = useState(1);
	const [cardsPerPage, setCardsPerPage] = useState(6);

	const lastCard = currentPage * cardsPerPage;
	const firstCard = lastCard - cardsPerPage;
	const currentCards = docentes.slice(firstCard, lastCard);

	const pages = [...Array(Math.ceil(docentes.length / cardsPerPage)).keys()];

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

	useEffect(() => {
		const element = document.getElementById("staff-container");

		if (largura > 1560) {
			if (element != null) {
				element.style.gap = "24px";
			}
			setCardsPerPage(8);
		}

		if (largura < 1560 && largura > 1190) {
			if (element != null) {
				element.style.gap = "40px";
			}
			setCardsPerPage(6);
		}

		if (largura < 1190) {
			if (element != null) {
				element.style.gap = "40px";
			}
			setCardsPerPage(4);
		}
	}, [width]);

	return (
		<div>
			<StyledStaff id="staff-container">
				{currentCards.map((docente) => (
					<StaffCard
						key={docente.uid}
						altImage={docente.imagemAlt}
						email={docente.email}
						imageUrl={docente.imagemUrl}
						interests={docente.interesses}
						link={docente.link}
						name={docente.nome}
						uid={docente.uid}
					/>
				))}
			</StyledStaff>
			<Pagination
				currentPage={currentPage}
				pages={pages}
				sectionTitleID={tituloID}
				paginationFunction={setCurrentPage}
			/>
		</div>
	);
}
