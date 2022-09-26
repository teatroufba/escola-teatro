import styled from "styled-components";

export const StyledEntryFormsContainer = styled.div`
	font-family: "Merriweather", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	margin-bottom: 80px;
	margin-top: 80px;

	h1 {
		box-sizing: border-box;
		width: fit-content;
		font-weight: 400;
		font-size: 48px;
		color: #282b62;
		margin: 0 3rem 3rem 3rem;
		margin-bottom: 64px;
		border-bottom: 5px solid #282b62;
		text-align: center;
	}

	.entry-content {
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

	.entry-form {
		background-color: #9a1a4b;
	}

	.entry-form a {
		cursor: pointer;
		border: none;
		background-color: transparent;
		color: #fff;
		text-decoration: none;
	}

	.entry-form h3 {
		font-size: 24px;
		font-weight: 400;
		margin-bottom: 1px solid #fff;
		text-decoration: underline;
		text-align: left;
		margin-bottom: 10px;
		padding: 24px;
	}

	.right-column {
		max-width: 65%;
	}

	.entry-form-info-content {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.entry-form-info {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.entry-form-info h3 {
		color: #2d2b78;
		font-size: 32px;
		font-weight: 700;
	}

	.entry-form-info p {
		font-family: Arial;
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
		letter-spacing: 0em;
		text-align: left;
		color: #2d2b78;
		height: 300px;
	}

	#entry-form-show-text-btn,
	#show-text-btn {
		font-family: "Merriweather";
		font-size: 16px;
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: #e3598e;
		width: fit-content;
		margin: 24px 0;
	}

	.hidden-text {
		display: -webkit-box;
		line-clamp: 10;
		-webkit-line-clamp: 10;
		-webkit-box-orient: vertical;
		overflow: hidden;
		-webkit-box-pack: end;
	}

	@media screen and (max-width: 768px) {
		h1 {
			text-align: left;
			width: 80%;
			font-size: 36px;
		}
		.entry-content {
			flex-direction: column-reverse;
			justify-content: center;
			align-items: center;
		}
		.entry-form-info {
			align-items: center;
		}
		.entry-form-info h3 {
			width: 100%;
		}
		.entry-form-info p {
			margin: 28px 0 0px 0;
		}
		.right-column {
			max-width: 100%;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.right-column {
			max-width: 90%;
		}
		.entry-content {
			gap: 40px;
		}
	}
`;

export const StyledPagination = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-between;
	font-family: "Merriweather";
	margin-top: 40px;

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

	@media screen and (min-width: 768px) and (max-width: 1440px) {
		width: 90%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		.pagination-container {
			gap: 10px;
			padding: 7px 16px;
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
