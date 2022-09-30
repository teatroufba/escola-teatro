import styled from 'styled-components'

export const StyledPost = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  #img-post {
    position: relative;
    width: 100%;
    height: 68.53vw;
  }

  h1 {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 11px;
  }

  button {
    background-color: #2d2b78;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 3px;
    font-size: 16x;
    width: 100%;
    cursor: pointer;
    font-family: 'Merriweather';
  }

  a {
    text-decoration: none;
    font-family: 'Merriweather';
    color: #ffffff;
    font-family: arial;
    font-weight: 400;
    font-size: 16px;
  }

  .post-header {
    border-bottom: 2px solid #757575;
    width: 100%;

    font-family: arial;
    font-size: 18px;

    span {
      margin-top: 11px;
      margin-bottom: 36px;
      font-size: 14px;
    }
  }

  .post-content {
    width: 100%;
    padding: 35px 25px;
    display: flex;
    flex-direction: column;
  }

  .post-text {
    font-family: Arial;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 16px;
    width: 100%;
  }

  .btn-align-left {
    width: 100%;
  }

  @media (min-width: 1081px) {
    #img-post {
      height: 39.06vw;
    }

    .post-header h1 {
      font-size: 48px;
      margin-bottom: 25px;
    }

    button {
      width: 350px;
      font-size: 18px;
      padding: 15px;
    }

    a {
      font-size: 18px;
    }

    .post-header {
      padding-bottom: 30px;

      span {
        margin-top: 25px;
        margin-bottom: 60px;
      }
    }

    .post-content {
      max-width: 1026px;
      padding: 60px;
      align-items: center;
    }

    .post-text {
      margin-top: 60px;
      margin-bottom: 50px;
      font-size: 22px;
    }

    .btn-align-left {
      width: unset;
    }
  }
`
