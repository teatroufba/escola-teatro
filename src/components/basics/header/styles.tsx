import styled from 'styled-components'

// TODO - Ajustar responsividade



export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  gap: 35px;
`
export const HeaderSuperior = styled.div`
  

  background-color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 3%;
  height: 100%;
  width: 100%;

  border: 1px solid green;
  @media (max-width: 1200px) {
    padding: 35px 64px;
    justify-content: start;
  }


  .social {
    gap: 25px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1200px) {
     display: none;
    }
  }

  .header {
    gap: 34px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid red;

    @media (max-width: 1200px) {
      justify-content: start;
      align-items: center;
      gap: 16px;
    
      p {
        max-width: 152px;
        max-height: 44px;
        font-size: 18px;
        font-weight: 400;
        font-size: 18px;
        line-height: 120%;

        
      }

      .img-logo {
        height: 80px;
        width: 71px;
      }
      
    }
  }

  p {
    color: #282b62;
    font-size: 36px;
    line-height: 48px;
    font-family: 'Arial';
  }
`

export const HeaderInferior = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;

  

  @media (max-width: 700px) {
    display: none;
    
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 30px;
    font-family: 'Merriweather';
    background-color: #2d2b78;
    padding: 0;
    list-style: none;
    padding: 0px;
  margin: 0px;
    width: 100%;
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


export const MobileNavbar = styled.nav`
  display : flex;
`