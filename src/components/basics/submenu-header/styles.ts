import styled from "styled-components";

export const Submenu = styled.div`
  margin-top: -35px;
  width: 100%;

  .submenu {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 30px;
    font-family: "Merriweather";
    background-color: #24233a;
    padding: 0;
    list-style: none;
    padding: 0px;
    margin: 0px;
    width: 100%;
  }

  .submenu li a {
    color: #ffffff;
    padding: 20px;
    display: inline-block;
    text-decoration: none;
    transition-duration: 0.3s;
  }

  .submenu li a:hover {
    color: #9a1a4b;
  }
`;
