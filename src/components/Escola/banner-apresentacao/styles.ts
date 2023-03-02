import styled from "styled-components";

export const StyledBannerApresentacaoContainer = styled.div`
	width: 100%;
	overflow-x: hidden;

	#presentation-section-title {
		box-sizing: border-box;
		width: fit-content;
		font-size: 48px;
		color: #ffffff;
		border-bottom: 5px solid #ffffff;
		text-align: center;
		font-weight: 600;
	}

	.content-wrapper {
		overflow-x: hidden;
		position: relative;
		min-height: 860px;
		height: 100%;
		//max-width: 95vw;
		display: flex;
		gap: 80px;
	}

	.left-column {
		width: 100%;
	}

	.left-column span {
		overflow-x: hidden;
		width: 60% !important;
		height: 100%;
	}

	.right-column {
		display: flex;
		justify-content: center;
		background-color: #2d2b78;
		color: #fff;
		padding: 40px 0 60px 0;
	}

	.presentation-content-wrapper {
		font-family: "Merriweather", Arial, Helvetica, sans-serif;
		display: flex;
		flex-direction: column;
		padding: 60px 70px;
		width: 40vw;
		gap: 36px;
	}

	.presentation-content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.presentation-content h2 {
		font-weight: 700;
		font-size: 32px;
	}

	.presentation-content p {
		line-height: 33px;
		font-size: 18.5px;
	}
	@media screen and (max-width: 1300px) {
		.presentation-content p {
			line-height: 32px;
			font-size: 16.5px !important;
		}
	}

	.presentation-content button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #e3598e;
		width: fit-content;
	}

	.hidden-text {
		display: -webkit-box;
	}

	@media screen and (max-width: 768px) {
		.right-column {
			padding: 0;
		}

		.presentation-content-wrapper {
			padding: 20px 30px;
			padding-bottom: 10%;
		}
	}

	@media screen and (max-width: 1200px) {
		.hidden-text {
			height:100vh;
		}
		#presentation-section-title {
			font-weight: 400;
			font-size: 36px;
			text-align: left;
		}

		.content-wrapper {
			flex-direction: column;
			gap: 0px;
		}

		.presentation-content-wrapper {
			width: 100%;
			align-items: left;
		}

		.left-column {
			position: relative;
			max-height: 370px;
			min-height: 370px;
		}

		.left-column span {
			position: absolute;
			top: 0;
			width: 100% !important;
			//height: 50% !important;
		}

		.presentation-content h2 {
			font-weight: 700;
			font-size: 24px;
		}
	}
`;

export const StyledPagination = styled.div`
	width: 70%;
	padding-top: 5rem;
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

	@media screen and (max-width: 1200px) {
		width: 100%;
		padding-top: 0rem;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-top: 12rem;
		padding-bottom: 1rem;
	}

	@media screen and (min-width: 1200px) {
		width: min(600px, 100%);
	}

	/* @media screen and (max-width: 1200px) {
		width: 100%;
		margin-bottom: 80px;

		.pagination-btn {
			font-size: 14px;
			padding: 7px 16px;
		}
	} */
	@media screen and (max-width: 425px) {
		.pagination-container {
			display: none;
		}
	}
`;
