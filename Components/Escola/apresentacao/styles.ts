import styled from "styled-components";

export const StyledApresentacaoContainer = styled.section`
	font-family: "Merriweather";
	display: flex;
	width: 100%;
	background-color: #2d2b78;

	.presentation-content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 80px;
		width: 100%;
		/* width: min(1236px, 100%); */
	}

	.left-column {
		display: flex;
		height: 100%;
		width: fit-content;
	}

	#image-container {
		position: relative;
		/* width: 868px; */
		width: 868px;
		height: 100%;
	}

	.image-container .image {
		position: absolute;
		top: 0;
		left: 0;
	}

	.content-column-wrapper {
		width: min(1800px, 80%);
		display: flex;
		justify-content: center;
		flex-direction: column;
		color: #ffffff;
		padding-bottom: 80px;
		padding-top: 100px;
	}

	.content-column {
		width: min(1236px, 80%);
	}

	.content-column h1 {
		box-sizing: border-box;
		width: fit-content;
		font-weight: 400;
		font-size: 48px;
		color: #ffffff;
		margin-bottom: 64px;
		border-bottom: 5px solid #ffffff;
		text-align: center;
	}

	.content-column h2 {
		font-weight: 700;
		font-size: 32px;
	}

	.content-column p {
		margin-top: 24px;
		margin-bottom: 48px;
		line-height: 33.1px;
		font-size: 20px;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		.presentation-content {
			flex-direction: column;
			gap: 0;
		}
		#image-container {
			width: 100vw;
			height: 400px;
		}
		.image-container img {
			height: 100% !important;
		}
		.content-column-wrapper {
			padding: 52px 0 0 0;
		}
		.content-column {
			width: 100%;
		}
		.content-column h1 {
			font-size: 36px;
		}
		.content-column h2 {
			font-size: 24px;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1024px) {
		#image-container {
			position: relative;
			/* width: 868px; */
			width: 300px;
			height: 100%;
		}
	}

	@media screen and (min-width: 1025px) and (max-width: 1440px) {
		#image-container {
			position: relative;
			/* width: 868px; */
			width: 400px;
			height: 100%;
		}
	}
`;

export const StyledPagination = styled.div`
	width: 400px;
	display: flex;
	gap: 10px;
	justify-content: space-between;
	font-family: "Merriweather";

	.pagination-container {
		width: 124px;
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 1rem;
	}

	.pagination-btn {
		border: none;
		background-color: rgba(36, 35, 58, 0.3);
		color: #ffffff;
		padding: 15px 30px;
		border-radius: 5px;
	}

	.active {
		cursor: pointer;
		background-color: #24233a;
	}

	@media screen and (max-width: 768px) {
		width: 80%;
		margin-bottom: 80px;

		.pagination-container {
			display: none;
		}
		.pagination-btn {
			font-size: 14px;
			padding: 7px 16px;
		}
	}

	@media screen and (max-width: 425px) {
		.pagination-container {
			display: none;
		}
	}
`;
