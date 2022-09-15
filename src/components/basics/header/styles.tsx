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

  @media (max-width: 1200px) {
    padding: 35px 64px;
    padding: 0;
    justify-content: start;
    flex-direction: column-reverse;
    gap: 25px;
  }

  .social-navbar {

    @media (max-width: 1200px) {
    background-color: #282b62;
    align-items: center;
    justify-content: space-between;
    display: flex;
  
    margin: 0px;
    padding: 18px 25px;

    
    width: 100%;
    }
    
  }

  .social {
    gap: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

 

    @media (max-width: 1200px) {
      a input {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(345deg) brightness(101%) contrast(102%);
        
      }
    }

    @media (max-width: 600px) {
      a input {
        width: 20px;
        height: 20px;
      }
      
    }

    
  }

  #ham-btn {
    display: flex;
    flex-direction: column;
    gap: 5px;

    display: none;
    .ham-btn-bar {
      width: 30px;
      height: 3px;
      background-color: #fff;
      transition: 0.4s;
    }

    @media (max-width: 1200px) {
      display: flex;
    }
  }


  .header {
    gap: 34px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;


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

  

  @media (max-width: 1200px) {
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