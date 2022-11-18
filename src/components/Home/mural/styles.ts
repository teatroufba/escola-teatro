import styled from 'styled-components'

export const StyledMural = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');
  text-align: center;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #282b62;
    display: inline-block;
    border-bottom: 5px solid #282b62;
    margin-bottom: 5%;
    font-size: 48px;
    font-family: 'Merriweather';
    font-weight: 400;
  }

  .mural-posts {
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3%;
    text-align: center;
    justify-content: center;
  }

  .mural-card {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 395px;
    max-width: 306px;
    width: 100%;
    margin: 0;
    padding: 0;
    
    border: 1px solid red;

    a {
      display: flex;
      align-items: center;
      justify-content: center ;
      flex-direction: column;
      width: 100%;
      
    }

    .textover {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      
    }

    .img-container {
      display: flex;
      align-items: center;
      height: 210px;
      width: 100%;

      border: 1px solid green;
   
    }

    .text-area {
      background-color: #282B62 ;
      width: 100%;
    }
  }

  .mural-card:hover {
    .textover figcaption {
      background-color: #24233a;
      color: #9a1a4b;
    }
  }
`
