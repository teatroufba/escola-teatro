import styled from "styled-components";

export const BannerStyled = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-height: 750px;
	height: 39.06vw;
	min-height: 200px;
	background-color: #282b62;

	img {
		object-fit: cover;
	}

	@media screen and (max-width: 1300px) {
		height: calc(39.06vw + 40px);
	}

	@media screen and (max-width: 768px) {
		height: calc(100vw + 40px);
		max-height: 1008px;
	}

	.layer {
		display: none;
		width: 100%;
		max-height: 750px;
		height: 39.06vw;
		min-height: 200px;
		background-color: #9a1a4b;
		opacity: 0.7;
		position: relative;
		left: 0;
		right: 0;
		top: -750px;
		bottom: 0;
	}

	@media (min-width: 768px) and (max-width: 1920px) {
		.layer {
			top: max(-39.06vw, -750px);
		}
	}

	@media screen and (max-width: 768px) {
		.layer {
			top: -100vw;
			height: 100vw;
			max-height: 790px;
		}
	}

	.img {
		width: 100%;
	}
`;
