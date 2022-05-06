import styled from 'styled-components'

export const HeaderSuperior = styled.div`
  .social {
    display: flex;
    float: right;
    margin-right: 16%;
    margin-top: -5.5%;
    width: 20%;
    justify-content: space-between;
  }

  .header {
    display: flex;
    align-items: center;
    margin-top: 3%;
    margin-left: 5%;
    width: 50%;
    justify-content: space-evenly;
  }

  p {
    color: #282b62;
    font-size: 36px;
    line-height: 48px;
    font-family: 'Arial';
  }
`

export const HeaderInferior = styled.div`
  .menu {
    font-size: 24px;
    line-height: 30px;
    font-family: 'Merriweather';
    background-color: #2d2b78;
    padding: 0;
    list-style: none;
    text-align: center;

    @media (max-width: 640px) {
    }
  }
  .btn-mobile {
    display: none;
  }
  .menu li {
    display: inline;
  }

  .menu li a {
    color: #ffffff;
    padding: 20px;
    display: inline-block;
    text-decoration: none;
    transition-duration: 0.3s;
  }

  .menu li a:hover {
    background-color: #9a1a4b;
  }
`
