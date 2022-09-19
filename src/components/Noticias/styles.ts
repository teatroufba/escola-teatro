import styled from "styled-components";

interface Props {
  filter: string;
  sort: string;
}

export const StyledPosts = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 5%;
  max-width: 370px;

  h3 {
    font-family: "Merriweather";
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
    font-family: "Merriweather";
    color: black;
    font-weight: 400;
    font-size: 18px;
    margin-top: 5%;
  }
`;

export const StyledNoticias = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap");

  .container-title {
    display: flex;
    flex-direction: column;
    font-family: "Merriweather";
    font-weight: 400;
    color: white;
    padding: 45px 26px;
    background-color: #24233a;
    gap: 12px;

    h1 {
      font-size: 24px;
      font-weight: 400;
    }

    h3 {
      font-family: arial;
      font-weight: 400;
      font-size: 14px;
      text-align: justify;
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
      font-family: "Inter";
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
        font-family: "Inter";
        font-size: 16.8px;
        font-weight: 800;
      }
    }

    button:hover {
      background-color: #2d2b78;
      font-weight: 800;
      border: 1px solid #958fa0;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      color: white;
      font-family: "Inter";
      width: 50px;
      height: 50px;
      align-items: center;
      text-transform: uppercase;
    }
  }

  @media (min-width: 1081px) {
    .container-title {
      padding: 79px 15.3%;

      h1 {
        font-size: 48px;
      }

      h3 {
        font-size: 24px;
      }
    }
  }
`;

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .categoria-container-inputs {
    margin-top: 2rem;
    width: calc(100% - 50px);
    margin-left: 25px;
    margin-right: 25px;
    max-width: 455px;

    p {
      font-family: arial;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.38);
      font-size: 12px;
      margin-bottom: 13px;
    }
  }

  #topico-select-container {
      position: relative;
      display: flex;
      flex-direction: column;
      row-gap: 0.375rem;
      margin-bottom: 0.8125rem;
      margin-left: 25px;
      margin-right: 25px;
      width: calc(100% - 50px);
      max-width: 455px;

      button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.875rem 0.75rem 0.625rem;
        border: solid #757575 1px;
        border-radius: 0.3125rem;
        width: 100%;
        font-size: 0.875rem;
        line-height: 1.09375rem;
        color: #9a9a9a;
        background-color: white;

        .seta-select {
          border: solid #2D2B78;
          border-width: 0 2px 2px 0;
          padding: 0.2rem;
          transform: rotate(45deg);
          height: 0.2rem;
          margin-top: -0.35rem;
          transition: transform 0.2s;
        }
      }

      button.selected {
        color: black;
      }

      button.active .seta-select {
        transform: rotate(225deg);
        margin-top: 0.125rem;
      }

      .select-window {
        top: 3.09375rem;
        display: none;
        position: absolute;
        flex-direction: column;
        border: 1px solid #757575;
        width: 100%;
        border-radius: 0.5rem;
        background-color: white;
        padding: 0.625rem 0;
        z-index: 100;

        label {
          font-size: 0.875rem;
          padding: 0.625rem 0.875rem;
          color: #757575;

          input {
            display: none;
          }
        }
      }

      .select-window.active {
        display: flex;
      }
    }

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
    max-width: 100%;
    gap: 3%;

    .sort-container-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-left: 25px;
      margin-right: 25px;
      width: 340px;
      column-gap: 25px;
      row-gap: 15px;

      .btn-cima {
        width: 150px;
      }

      button {
        background-color: rgba(0, 0, 0, 0.29);
        font-family: arial;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
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
        font-size: 14px;
        cursor: pointer;
        color: white;
        text-transform: uppercase;
      }
    }

    .sort-container-inputs {
      margin-bottom: 33px;
      margin-left: 25px;
      margin-right: 25px;
      column-gap: 0.8125rem;
      display: flex;
      flex-wrap: wrap;

      span {
        width: 100%;
      }

      button {
        background-color: #2d2b78;
        font-family: arial;
        font-weight: 700;
        border: 1px solid #2d2b78;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
        color: white;
        text-transform: uppercase;
        margin-top: 0.8125rem;
        width: 100%;
      }
    }

    input {
      border: 1px solid silver;
      font-family: arial;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.35);
      font-size: 14px;
      padding: 5px;
      border-radius: 5px;
      width: calc(50% - 6.5px);
    }

    p {
      font-family: arial;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.38);
      font-size: 12px;
      margin-bottom: 0.6875rem;
    }
  }

  @media (min-width: 1081px) {
    
  }
`;
