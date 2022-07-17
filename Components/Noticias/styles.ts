import styled from 'styled-components'

interface Props {
  filter: string
  sort: string
}

export const StyledPosts = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap');
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 5%;
  max-width: 370px;

  h3 {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 24px;
  }

  p {
    font-family: arial;
    font-weight: 400;
    font-size: 16px;
    margin-top: 2%;
  }

  a {
    text-decoration: none;
    font-family: 'Merriweather';
    color: black;
    font-weight: 400;
    font-size: 18px;
    margin-top: 5%;
  }
`

export const StyledNoticias = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');

  .container-title {
    font-family: 'Merriweather'
    font-weight: 400;
    color: white;
    padding: 5%;
    background-color: #24233A;

    h1 {
      font-size: 48px;
      font-weight: 400;
    }

    h3 {
      font-family: arial;
      font-weight: 400;
      font-size: 24px;
    }
  } 

  .posts-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5%;
    align-items: stretch;
    gap: 3%;
  }

  .container-pag-btn {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5%;
    align-items: stretch;
    color: #958fa0;
    font-size: 16px;
    gap: 1%;

    button {
      background-color: white;
      font-weight: 800;
      border: 1px solid #958fa0;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      color: #958fa0;
      font-family: 'Inter';
      width: 50px;
      height: 50px;
      align-items: center;
      text-transform: uppercase;
    }

    .pages-btn {
      display: flex;
      flex-direction: row;

      span {
        margin: 9%;
        font-family: 'Inter';
        font-size: 16.8px;
        font-weight: 800;
      }
    }

    button:hover {
        background-color: #2D2B78;
        font-weight: 800;
        border: 1px solid #958fa0;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        color: white;
        font-family: 'Inter';
        width: 50px;
        height: 50px;
        align-items: center;
        text-transform: uppercase;
    }
  }
`

export const StyledFilter = styled.div`
  .containter-filter-button {
    padding: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3%;

    button {
      background-color: white;
      border: none;
      font-weight: 400;
      font-family: arial;
      color: #757575;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      border-bottom: 3px solid #2d2b78;
    }

    button#${(props: Props) => props.filter} {
      border-bottom: 3px solid #2d2b78;
      color: black;
    }
  }

  .sort-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3%;

    .sort-container-buttons {
      button {
        background-color: rgba(0, 0, 0, 0.29);
        font-family: arial;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        margin: 10px;
        font-size: 14px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
      }

      button:hover {
        background-color: #2d2b78;
        font-family: arial;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        margin: 10px;
        font-size: 14px;
        cursor: pointer;
        color: white;
        text-transform: uppercase;
      }

      button#${(props: Props) => props.sort} {
        background-color: #2d2b78;
        font-family: arial;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        margin: 10px;
        font-size: 14px;
        cursor: pointer;
        color: white;
        text-transform: uppercase;
      }
    }

    .sort-container-inputs {
      margin-bottom: 1%;

      button {
        background-color: #2d2b78;
        font-family: arial;
        font-weight: 700;
        border: 1px solid #2d2b78;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 15px;
        font-size: 14px;
        cursor: pointer;
        color: white;
        text-transform: uppercase;
      }
    }

    input {
      border: 1px solid silver;
      font-family: arial;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.35);
      font-size: 14px;
      padding: 5px;
      margin-left: 10px;
      border-radius: 5px;
    }

    p {
      font-family: arial;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.38);
      font-size: 12px;
      margin-left: 10px;
    }
  }
`
