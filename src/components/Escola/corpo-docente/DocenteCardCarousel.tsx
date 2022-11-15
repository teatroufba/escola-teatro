import Image from "next/image";
import Link from "next/link";

import { StyledDocenteCardCarrossel } from "./styles";

interface ICard {
	altImage: string;
	email: string;
	imageUrl: string;
	interests: string;
	link: string;
	name: string;
}

export default function StaffCardCarousel({
	name,
	email,
	link,
	interests,
	imageUrl,
	altImage,
}: ICard) {
	return (
		<StyledDocenteCardCarrossel>
			<div className="image-container">
				<Image
					alt={altImage ? altImage : "Imagem"}
					className="image"
					layout="fill"
					objectFit="cover"
					src={imageUrl ? imageUrl : "Imagem não informada"}
				/>
			</div>
			<div className="docente-description">
				<div className="docente-info">
					<h2> {name ? name : "Nome não informado"} </h2>
					<p> Email: {email ? email : "Email não informado"} </p>
					<p>
						{" "}
						Áreas de Interesse:{" "}
						{interests ? interests : "Interesses não informados"}{" "}
					</p>
				</div>
				<Link passHref href={link ? link : ""}>
					<a href={link ? link : ""} rel="noopener noreferrer" target="_blank">
						<button>Currículo Lattes</button>
					</a>
				</Link>
			</div>
		</StyledDocenteCardCarrossel>
	);
}
