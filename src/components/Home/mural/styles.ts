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
    gap: 1.5625rem;
    text-align: center;
    justify-content: center;
  }

  .mural-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 395px;
    height: 290px;

    max-width: 395px;
    max-height: 290px;
    min-width: 325px;
    min-height: 290px;
    margin: 0;
    padding: 0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px 10px 10px 10px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      text-decoration: none;
    }

    .img-container {
      display: flex;
      align-items: center;
      height: 210px;
      width: 100%;
      border-radius: 10px 10px 0px 0px;
    }

    .text-area {
      background-color: #282B62 ;
      width: 100%;
      height: 80px;
      max-height: 96px;
      padding: 15px 15px;
      border-radius: 0px 0px 10px 10px;
      color: #FFFFFF;
      text-decoration: none;
      font-family: 'Merriweather';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }

  .mural-card:hover {
    .textover figcaption {
      background-color: #24233a;
      color: #9a1a4b;
    }
  }

  @media (max-width: 768px) {
    .mural-card {
      width: 325px;
      max-height: 232px;
      min-height: 232px;

      .img-container {
        height: 172px;
        width: 100%;
      }

      .text-area {
        font-size: 12px;
        height: 64px;
      }
    }
	}

`
