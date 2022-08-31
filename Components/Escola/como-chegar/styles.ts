import styled from "styled-components";

export const StyledComoChegarContainer = styled.section`
	@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap");
	display: flex;
	flex-direction: column;
	padding: 40px 0;
	margin-bottom: 48px;
	width: 100%;
	background-color: #f7f6f5;
`;

export const StyledComoChegarContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		box-sizing: border-box;
		width: fit-content;
		font-family: "Merriweather", sans-serif;
		font-weight: 400;
		font-size: 48px;
		color: #282b62;
		margin: 3rem;
		border-bottom: 5px solid #282b62;
		text-align: center;
	}

	.localization-content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 80px;
		width: 80%;
	}

	iframe {
		width: 525px;
		height: 438px;
	}

	@media screen and (max-width: 768px) {
		.localization-content {
			flex-direction: column;
			gap: 40px;
		}

		h1 {
			font-size: 32px;
		}

		iframe {
			width: 80%;
			height: auto;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 900px) {
		.localization-content {
			gap: 40px;
		}
	}
`;

export const LocalizationInfo = styled.div`
	font-family: "Merriweather", sans-serif;
	color: #282b62;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;

	.info-tile-title {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.info-tile-title > h2 {
		color: #282b62;
		font-size: 28px;
		font-weight: 400;
	}

	.info-tile {
		display: flex;
		gap: 8px;
		flex-direction: column;
		background-color: #fff;
		border-radius: 8px;
		width: 100%;
		padding: 24px;
	}

	.info-tile > p {
		font-size: 20px;
	}

	@media screen and (max-width: 768px) {
		.info-tile {
			width: 80%;
		}

		.info-tile-title > h2 {
			font-size: 18px;
		}

		.info-tile > p {
			font-size: 16px;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 900px) {
		.info-tile-title > h2 {
			font-size: 18px;
		}

		.info-tile > p {
			font-size: 16px;
		}

		.info-tile-title {
			gap: 8px;
		}
	}
`;
