import styled from "styled-components";

export const BackToTopContainer = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  .displayDesktop {
    display: inherit;
  }
  .displayMobile {
    display: none;
  }

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

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    .back-to-top-wrapper {
      gap: 2px;
    }
    .displayDesktop {
      display: none;
    }
    .displayMobile {
      display: inherit;
    }
    span {
      display: none;
    }
    // span {
    // 	font-family: "Merriweather";
    // 	font-weight: 800;
    // 	background-color: #9a1a4b;
    // 	padding: 6px;
    // 	color: #fff;
    // 	border-radius: 8px;
    // 	font-size: 12px;
    // }
  }
`;
