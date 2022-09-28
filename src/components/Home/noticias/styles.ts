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
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 290px;

  h3 {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 24px;
    height: 87px;
  }

  .noticia-img {
    width: 100%;
  }

  .text-post {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
    font-family: arial;
    height: 274px;

    p {
      font-size: 16px;
    }

    .titles {
      gap: 15px;
      height: 204px;
    }

    a {
      text-decoration: none;
      font-family: 'Merriweather';
      color: #282b62;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2%;
    }

    a:hover {
      color: #9a1a4b;
    }
    .data {
      font-size: 14px;
    }
  }
`
