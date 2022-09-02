import styled from "styled-components";

export const StyledIngressoContainer = styled.div`
	font-family: "Merriweather", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	margin-bottom: 80px;

	h1 {
		box-sizing: border-box;
		width: fit-content;
		font-weight: 400;
		font-size: 48px;
		color: #282b62;
		margin: 3rem;
		margin-bottom: 64px;
		border-bottom: 5px solid #282b62;
		text-align: center;
	}

	.ingresso-content {
		width: min(1236px, 80%);
		display: flex;
		gap: 80px;
		margin-bottom: 80px;
	}

	.left-column {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 100%;
	}

	.ingresso {
		background-color: #9a1a4b;
	}

	.ingresso button {
		border: none;
		background-color: transparent;
		color: #fff;
		padding: 24px;
	}

	.ingresso h3 {
		font-size: 24px;
		font-weight: 400;
		margin-bottom: 1px solid #fff;
		text-decoration: underline;
		text-align: left;
		margin-bottom: 10px;
	}

	.right-column {
		max-width: 65%;
	}

	.ingresso-info-content {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.ingresso-info {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.ingresso-info h3 {
		color: #2d2b78;
		font-size: 32px;
		font-weight: 700;
	}

	.ingresso-info p {
		font-family: Arial;
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
		letter-spacing: 0em;
		text-align: left;
		color: #2d2b78;
	}

	@media screen and (max-width: 768px) {
		h1 {
			text-align: left;
			width: 80%;
			font-size: 36px;
		}
		.ingresso-content {
			flex-direction: column-reverse;
			justify-content: center;
			align-items: center;
		}
		.ingresso-info {
			align-items: center;
		}
		.ingresso-info h3 {
			width: 100%;
		}
		.ingresso-info p {
			margin: 28px 0 48px 0;
		}
		.right-column {
			max-width: 90%;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.right-column {
			max-width: 90%;
		}
		.ingresso-content {
			gap: 40px;
		}
	}
`;

export const StyledPagination = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-family: "Merriweather";

	.pagination-container {
		display: flex;
		align-items: center;
		gap: 1.6rem;
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
		background-color: #2d2b78;
	}

	.width {
		display: flex;
		justify-content: space-between;
		width: 920px;
	}

	@media screen and (max-width: 768px) {
		.pagination-container {
			gap: 10px;
			padding: 24px;
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
