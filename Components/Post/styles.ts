import styled from 'styled-components'

export const StyledPost = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 36px;
  }

  button {
    background-color: #2d2b78;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 3px;
    font-size: 12px;
    width: 30%;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-family: 'Merriweather';
    color: #ffffff;
    font-family: arial;
    font-weight: 700;
  }

  .post-header {
    border-bottom: 2px solid #757575;

    font-family: arial;
    font-size: 14px;

    span {
      margin: 5%;
      font-size: 12px;
    }
  }

  .post-content {
    width: 100%;
    padding: 10%;
  }

  .post-text {
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .btn-align-left {
    text-align: right;
  }

  pre {
    font-family: arial;
    font-weight: 400;
    font-size: 15px;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`
