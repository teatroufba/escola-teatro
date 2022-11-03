import styled from 'styled-components'

export const StyledNoticias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  padding: 5%;
  text-align: center;

  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');

  h1 {
    font-family: 'Merriweather';
    color: #282b62;
    font-size: 48px;
    font-weight: 400;
    display: inline-block;
    border-bottom: 5px solid #282b62;
  }

  .noticias-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    gap: 3%;
    margin: 4%;

    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 25px;

      .mobile{
        display: none;
      }
    }
  }

  .noticias-btn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: #2d2b78;
    font-style: 'Merriweather';
    font-weight: 400;
    border: none;
    border-radius: 5%;
    padding: 0.5% 4%;
    font-size: 18px;
    cursor: pointer;
    color: white;
    float: right;
  }
`

export const StyledNoticiaCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 325px;

  -webkit-box-shadow: 0px 4px 15px -7px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 4px 15px -7px rgba(0,0,0,0.49);
box-shadow: 0px 4px 15px -7px rgba(0,0,0,0.49);
  transform: scale(0.95);
  &:hover{
    transform: scale(1);
    transition:transform 0.25s ease-in-out;
  }
  .noticias-post-img {
    position: relative;
    width: 100%;
    height: 250px;
    margin-bottom: 25px;
  }

  .noticias-post-text {
    display: flex;
    flex-direction: column;
    height: 224px;
    margin-bottom: 25px;
    overflow: hidden;
    text-align: left;
    padding: 0 8px;

    h3 {
      font-family: "Merriweather";
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 8px;
      max-height: 100%;
    }

    p {
      font-family: arial;
      font-weight: 400;
      font-size: 16px;
      max-height: 100%;
    }
  }

  a {
    text-decoration: none;
    font-family: "Merriweather";
    color: black;
    font-weight: 400;
    font-size: 18px;
    margin-top: 5%;
    text-align: left;
    padding: 10px 8px;
    color: rgba(40, 43, 98, 1);

  }

  @media (min-width: 1081px) {
    width: 395px;

    .noticias-post-text {
      height: 172px;
    }
  }
`
