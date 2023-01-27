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
	min-height: 55%;
	max-height: 55%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
		display: flex;
		text-decoration: none;
		align-items: center;
	}
`;

export const StyledStaffDescription = styled.div`
	max-width: 100%;
	height: 100%;

	padding-bottom: 15px;
	display: flex;
	flex-direction: column;
	gap: .5rem;
	color: #2d2b78;

	

	h2 {
		font-family: "Merriweather";
		font-weight: 700;
		font-size: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	p {
		font-family: "Merriweather";
		font-weight: 400;
		font-size: 12px;
		max-width: calc(100% - 21px);
	}

	.email {
		font-weight: bold;
	}

	div {
		display: flex;
		gap: 3px;
		align-items: flex-start;
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
		font-weight: 600;
		font-size: 48px;
		color: #fff;
		margin: 3rem;
		border-bottom: 5px solid #fff;
	}

	.wrap-staff-container {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		h1 {
			font-size: 36px;
			font-weight: 400;
			width: 100%;
			text-align: left;
		}
	}

	@media screen and (min-width: 1560px) {
		.wrap-staff-container {
			width: min(1236px, 80%);
		}
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
	width: 100%;
	display: flex;
	justify-content: center;
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
		width: min(1250px, 100%);
	}

	@media screen and (min-width: 768px) and (max-width: 1190px) {
		.width {
			width: 610px;
		}
	}

	@media screen and (min-width: 1190px) and (max-width: 1560px) {
		.width {
			width: 930px;
		}
	}
	@media screen and (min-width: 1560px) {
		.width {
			width: 1250px;
		}
	} ;
`;

export const StyledStaffCarousel = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	overflow-x: scroll;
	gap: 24px;
`;

export const StyledDocenteCardCarrossel = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Merriweather";
	width: 30rem;
	height: 30rem;
	margin-bottom: 80px;

	.image-container {
		position: relative;
		width: 100%;
		height: 140px;
	}
	.emailDivDocente{
		display: flex;
		gap: .3rem;
	}
	.headDivDocente{
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: .3rem;
	}

	.docente-description {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		padding: 12px;
		gap: 12px;
		width: 18rem;
		height: 17rem;
	}

	.docente-description h2 {
		width: 70%;
		font-size: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 4px;
		color: #2d2b78;
	}

	.docente-description p {
		font-family: "Merriweather";
		font-weight: 400;
		font-size: 14px;
		color: #2d2b78;
	}

	.interestsDiv{
		height:6.5rem;
	}

	

	.docente-description button {
		cursor: pointer;
		font-family: "Merriweather";
		font-size: 14px;
		font-weight: 400;
		width: 70%;
		color: #ffff;
		background-color: #9a1a4b;
		border: none;
		border-radius: 4px;
		padding: 8px 12px;
	}

	.docente-info {
		display: flex;
		flex-direction: column;
		gap: .5rem;
	}
`;
