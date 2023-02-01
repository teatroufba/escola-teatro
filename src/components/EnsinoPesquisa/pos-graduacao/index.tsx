import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Button from "../../basics/button";

const Container = styled.div`
	padding-top: 3rem;
	color: #2d2b78;
	background-color: white;
	font-family: "Merriweather", serif;
	display: flex;
	gap: 5rem;

	@media (max-width: 1024px) {
		flex-direction: column;
		gap: 0;
	}

	.img {
		position: relative;
		width: 45%;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 1500px) {
			width: 50%;
		}

		@media (max-width: 1024px) {
			width: 100vw;
			height: 100vw;
		}
	}

	.graduation {
		text-align: left;
		width: 55%;
		padding: 24px 0;

		@media (max-width: 1500px) {
			width: 50%;
		}

		@media (max-width: 1024px) {
			width: 86.67%;
			margin: auto;
		}

		.content {
			width: 70%;
			display: flex;
			flex-direction: column;
			gap: 3.25rem;

			@media (max-width: 1024px) {
				width: 100%;
				justify-content: center;
			}

			.courseInfo {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				.description {
					color: #2b2b2b;

					button {
						margin-top: 0.5rem;
						background-color: transparent;
						cursor: pointer;
						border: none;
						text-decoration: underline;
						font-weight: 700;
						font-size: 20px;
					}
				}
			}

			.info {
				display: flex;
				gap: 1.5rem;

				a {
					text-decoration: none;
					background-color: #2d2b78;
					font-size: 1.125rem;
					font-weight: 400;
					padding: 10px 20px;
					color: white;
					border: none;
					border-radius: 5px;
					font-family: 'Merriweather';
					cursor: pointer;

					&:hover {
						background-color: #9a1a4b;
					}
				}
			}
		}
	}

	h1 {
		border-bottom: 5px solid #282b62;
		display: inline-block;
		margin-bottom: 3rem;
		font-size: 3rem;
	}
`;

interface IPosGraduacao {
	imageUrl: string,
	imageAlt: string,
	conteudo: [],
	link: string,
}

function PosGraduacao({ imageUrl, imageAlt, conteudo, link }: IPosGraduacao) {
	return (
		<Container id="pos-graduacao">
			<div className="img">
				<Image src={imageUrl} alt={imageAlt} layout='fill' objectFit='contain' objectPosition='center' />
			</div>
			<div className="graduation">
				<h1>Pós-Graduação</h1>
				<div className="content">
					<div className="courseInfo">
						<div className="description">
							<div>
							<PrismicRichText
								field={conteudo}
								components={{
								paragraph: ({ children }) => <p>{children}</p>,
								}}
							/>
							</div>
						</div>
					</div>
					<div className="info">
						<Link href={link ?? ''}>Saiba mais</Link>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default PosGraduacao;
