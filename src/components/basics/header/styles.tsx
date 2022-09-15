import styled from 'styled-components'

// TODO - Ajustar responsividade
export const HeaderSuperior = styled.div`
  @media (max-width: 700px) {
    display: none;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;

  .social {
    gap: 25px;
    display: flex;
    justify-content: space-between;
  }

  .header {
    gap: 34px;
    display: flex;
    align-items: center;
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
  @media (max-width: 700px) {
    display: none;
  }
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
