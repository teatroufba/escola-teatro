import styled from "styled-components";

export const MenuMobileContainer = styled.nav`
	height: 100vh;
	width: 100vw;
	position: fixed;
	overscroll-behavior-y: contain;
	overscroll-behavior-x: hidden;
	overflow-y: scroll;
	overflow-x: hidden;
	top: 150px;
	z-index: 20;
	background-color: #2d2b78;
	padding-bottom: 200px;

	.submenu-wrapper {
		position: relative;
		overflow: hidden;
	}

	@media (max-width: 625px) {
		top: 120px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	ul > li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 20px 25px;
		color: #fff;
		//height: 120px;
	}

	ul > li.menu-main-option:nth-child(even) {
		background-color: #282b62;
	}

	.menu-option {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 95%;
	}
	#selected_menu{
		background-color: #9a1a4b;
	}

	.menu-option span {
		font-family: "Merriweather";
		font-weight: 700;
		font-size: 32px;
		text-align: left;
	}

	.menu-option button {
		color: #fff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		border: none;
	}

	.submenu-mobile {
		display: flex;
		width: 95%;
	}

	.submenu-mobile ul {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.submenu-mobile ul > li {
		display: flex;
		align-items: flex-start;
		font-family: "Arial";
		font-weight: 400;
		font-size: 16px;
	}
	.selected_menu{
		background-color: #9a1a4b;
	}

	.submenu-mobile a,
	a {
		text-decoration: none;
		color: #fff;
		padding: 10px 0;
	}

	.hidden {
		display: none;
	}
`;
