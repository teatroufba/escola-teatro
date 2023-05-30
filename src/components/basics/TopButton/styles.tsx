import styled from "styled-components";

export const Container = styled.div`
  .goToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    cursor: pointer;
    background-color: #9a1a4b;
    border-radius: 50px 50px;
    border: inherit;
    display: inline-block;
    padding: 10px;
  }

  .goToTop:hover {
    padding-right: 120px;
    transition: 0.7s;
  }

  .goToTop:hover:after {
    font-family: "Merriweather";
    bottom: 5px;
    position: absolute;
    width: 120px;
    content: "Voltar ao topo";
    color: white;
  }
`;
