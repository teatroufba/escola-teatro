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
    margin-top: 2%;

    a {
      text-decoration: none;
      color: black;
    }

    img {
      border-radius: 5%;
      -moz-border-radius: 5%;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    }
    .img-container {
      border: 1px solid red;
      width: 395px;
      height: 306px;
    }
    .textover {
      position: relative;
    }

    .textover figcaption {
      width: 100%;
      height: 80px;
      position: absolute;
      font-size: 24px;
      color: white;
      bottom: 0;
      padding: 2%;
      left: 0;
      background-color: #282b62;
      border-radius: 0% 0% 10px 10px;
    }
  }

  .mural-card:hover {
    .textover figcaption {
      background-color: #24233a;
      color: #9a1a4b;
    }
  }
`
