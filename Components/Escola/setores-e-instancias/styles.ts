import styled from "styled-components";

export const StyledSetoresContainer = styled.div`
	font-family: "Merriweather", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	background-color: #f7f6f5;
	padding-bottom: 80px;
	padding-top: 80px;

	h1 {
		box-sizing: border-box;
		width: fit-content;
		font-weight: 400;
		font-size: 48px;
		color: #282b62;
		margin: 0 3rem 3rem 3rem;
		border-bottom: 5px solid #282b62;
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 36px;
			text-align: left;
			width: 80%;
		}
	}
`;

export const StyledAccordionContainer = styled.div`
	width: min(1236px, 80%);
	display: flex;
	flex-direction: column;

	.accordion-content {
		width: 100%;
		border: 2px solid #e6e6ef;
		padding: 24px 8px 24px 24px;
	}

	.accordion-header h2 {
		text-align: left;
		font-size: 36px;
		font-weight: 700;
		color: #2d2b78;
	}

	.accordion-header button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		cursor: pointer;
		border: none;
		background-color: transparent;
	}

	.accordion-members-container {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.hidden {
		display: none;
	}

	.accordion-member {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 24px;
		border-bottom: 1px solid #000000;
	}

	.accordion-member h3 {
		font-size: 28px;
		font-weight: 700;
		color: #9a1a4b;
	}

	.accordion-member p {
		font-size: 18px;
		font-weight: 400;
		color: #2d2b78;
	}

	.accordion-member p:last-child {
		margin-bottom: 12px;
	}

	@media screen and (max-width: 768px) {
		width: 80%;

		.accordion-content {
			padding: 12px;
		}

		.accordion-header h2 {
			width: 80%;
			font-size: 20px;
			text-overflow: ellipsis;
			text-align: left;
		}

		.accordion-header button svg {
			width: 32px;
			height: 32px;
		}

		.accordion-member h3 {
			font-size: 20px;
		}

		.accordion-member p {
			font-size: 16px;
		}
	}
`;
