import styled from "styled-components";

export const BackToTopContainer = styled.button`
	position: fixed;
	bottom: 30px;
	right: 30px;
	cursor: pointer;
	background-color: transparent;
	border: none;

	span {
		font-family: "Merriweather";
		font-weight: 800;
		background-color: #9a1a4b;
		padding: 8px;
		color: #fff;
		border-radius: 8px;
	}

	.back-to-top-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 8px;
	}

	.hidden {
		display: none;
	}
`;
