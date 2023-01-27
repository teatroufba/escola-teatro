import Image from "next/image";
import Link from "next/link";

import {
	StyledStaffCard,
	StyledStaffDescription,
	StyledStaffDescriptionContainer,
} from "./styles";

interface ICard {
	altImage: string;
	email: string;
	imageUrl: string;
	interests: string;
	link: string;
	name: string;
}

export default function StaffCard({
	name,
	email,
	link,
	interests,
	imageUrl,
	altImage,
}: ICard) {
	return (
		<StyledStaffCard>
			<Image
				alt={altImage ? altImage : "Imagem"}
				height={200}
				src={imageUrl ? imageUrl : "Imagem não informada"}
				width={290}
			/>
			<StyledStaffDescriptionContainer>
				<StyledStaffDescription>
					<h2> {name ? name : "Nome não informado"} </h2>
					<div>
						<Image src='/email.svg' width={18} height={18}></Image>
						<p>{email ? email : "Email não informado"}</p>
					</div>
					<div>
						<Image src='/head-icon.svg' width={18} height={18}></Image>
						<p>
							{" "}
							{interests ? interests : "Interesses não informados"}{" "}
						</p>
					</div>
				</StyledStaffDescription>
				<Link passHref href={link ? link : ""}>
					<a href={link ? link : ""} rel="noopener noreferrer" target="_blank">
						<button>Currículo Lattes</button>
					</a>
				</Link>
			</StyledStaffDescriptionContainer>
		</StyledStaffCard>
	);
}
