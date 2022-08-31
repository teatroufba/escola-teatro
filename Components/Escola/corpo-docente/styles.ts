import styled from "styled-components";

export const StyledStaffCard = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap");
	display: flex;
	flex-direction: column;
	margin-bottom: 48px;
	max-width: 290px;
	height: 400px;
	background-color: #fff;

	span > img {
		height: auto !important;
		max-height: none !important;
	}
`;

export const StyledStaffDescriptionContainer = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 15.5px 15px 15.5px 24px;

	button {
		cursor: pointer;
		font-family: "Merriweather";
		font-size: 16px;
		width: 100%;
		color: #ffff;
		background-color: #9a1a4b;
		border: none;
		border-radius: 4px;
		padding: 8px 22px;
	}

	a {
		max-width: 175px;
		display: flex;
		text-decoration: none;
		align-items: center;
	}
`;

export const StyledStaffDescription = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: #2d2b78;

	h2 {
		font-family: "Merriweather";
		font-weight: 700;
		font-size: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	p {
		font-family: "Merriweather";
		font-weight: 400;
		font-size: 14px;
	}
`;

export const StyledStaffContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 30px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #2d2b78;

	h1 {
		font-family: "Merriweather";
		font-weight: 400;
		font-size: 48px;
		color: #fff;
		margin: 3rem;
		border-bottom: 5px solid #fff;
	}

	.wrap-staff-container {
		width: min(1200px, 80%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const StyledStaff = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	flex-wrap: wrap;
	gap: 24px;
`;

export const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: "Merriweather";
	margin-bottom: 80px;

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
		background-color: #24233a;
	}

	.width {
		display: flex;
		justify-content: space-between;
		width: 920px;
	}
`;
