import styled from "styled-components";

export const StyledStaffTableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f7f6f5;

	h1 {
		box-sizing: border-box;
		width: fit-content;
		font-family: "Merriweather", sans-serif;
		font-weight: 400;
		font-size: 48px;
		color: #282b62;
		margin: 3rem;
		border-bottom: 5px solid #282b62;
		text-align: left;
	}

	.table-container {
		width: min(1236px, 80%);
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 36px;
			width: 80%;
		}
		.table-container {
			overflow: scroll;
		}
	}
`;

export const StyledStaffTable = styled.table`
	width: 100%;
	font-family: "Merriweather", sans-serif;
	font-size: 20px;
	text-align: left;
	vertical-align: middle;
	border-collapse: separate;
	border-spacing: 0px;
	border-left: 1px solid #958fa0;
	border-right: 1px solid #958fa0;
	margin-bottom: 80px;
	line-height: 33.1px;

	th {
		color: #9a1a4b;
		border-top: 1px solid #958fa0;
		border-bottom: 1px solid #958fa0;
		padding: 10px 10px 10px 34px;
	}

	td {
		border-bottom: 1px solid #958fa0;
		padding: 10px 10px 10px 34px;
	}

	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const StyledCardCorpoTecnico = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	.staff-wrapper-container {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 21px 30px 21px 24px;
		border-radius: 4px;
	}

	.first-line {
		display: flex;
		justify-content: space-between;
	}

	.staff-name,
	.staff-role {
		display: flex;
		flex-direction: column;
		width: 40%;
	}

	.second-line {
		display: flex;
		flex-direction: column;
	}

	.staff-subheader {
		font-family: "Merriweather";
		color: #958fa0;
		font-size: 14px;
		font-weight: 400;
	}

	.staff-info {
		font-family: "Merriweather";
		font-size: 15px;
		font-weight: 400;
	}

	.staff-contact {
		font-family: "Merriweather";
		font-size: 15px;
		font-weight: 400;
		color: #9a1a4b;
	}
`;
