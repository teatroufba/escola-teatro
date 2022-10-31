import styled from "styled-components";

export const ConteudoStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	.conteudo-wrapper {
		width: min(75%, 1500px);
	}

	h1 {
		font-family: "Merriweather";
		font-size: 28px;
		font-weight: 700;
		color: #2d2b78;
	}

	p {
		font-family: "Arial", sans-serif;
		font-weight: 400;
		font-size: 20px;
	}

	.galeria-fotos {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 90px;
		margin-bottom: 180px;
	}

	#galeria-link {
		cursor: pointer;
		text-align: center;
		padding: 22px 36px;
		background-color: #9a1a4b;
		width: fit-content;
		border-radius: 5px;
		transition: background-color ease 0.3s;
	}

	#galeria-link:hover {
		background-color: #82153f;
	}

	.galeria-fotos a {
		text-decoration: none;
		font-family: "Merriweather";
		font-weight: 400;
		font-size: 18px;
		color: #fff;
	}

	.conteudo {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin: 90px 0;
	}

	.fotos-container {
		max-width: 100%;
		display: flex;
		justify-content: center;
		gap: 24px;
	}

	.fotos-container img {
		width: min(24vw, 397px);
		height: 520px;
		object-fit: cover;
		object-position: center;
	}

	.fotos {
		position: relative;
		cursor: pointer;
	}

	.layer {
		background-color: #9a1a4bb2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.hidden {
		display: none;
	}

	.flex {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.content {
		position: absolute;
		padding: 0 36px 56px 36px;
		bottom: 0;
	}

	.content h3 {
		font-family: "Merriweather";
		font-size: 24px;
		font-weight: 400;
		color: #fff;
	}

	.content p {
		font-family: "Arial", sans-serif;
		font-size: 14px;
		font-weight: 400;
		color: #fff;
	}

	@media screen and (max-width: 769px) {
		.fotos-container {
			flex-direction: column;
		}

		.fotos-container img {
			width: 100%;
			height: 430px;
		}

		.conteudo {
			margin: 90px 0 45px 0;
		}

		.galeria-fotos {
			gap: 45px;
		}

		#galeria-link {
			font-size: 14px;
			padding: 22px 9px;
		}
	}
`;
