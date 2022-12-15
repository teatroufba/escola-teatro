import styled from 'styled-components'

export const AgendaStyled = styled.div`
  background-color: #2d2b78;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 6.25rem 0;

  .header {
    width: 1069px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: center;

    .title-box {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title {
      font-family: 'Merriweather';
      color: #fff;
      font-size: 48px;
      font-weight: 400;
      display: inline-block;
      border-bottom: 5px solid #fff;
    }

    @media screen and (max-width: 1400px) {
      width: 791px;
    }

    @media screen and (max-width: 1000px) {
      width: 513px;
    }

    @media screen and (max-width: 768px) {
      width: calc(100vw - 50px);
      margin: 0 auto;
    }

   

    .filtro {
      display: flex;
      gap: 10px;
      justify-content: right;

      button {
        background-color: #24233a;
        color: #958fa0;
        border: 1px solid #958fa0;
        border-radius: 5px;
        font-size: 0.875rem;
        cursor: pointer;

        &.active {
          color: #9a1a4b;
          border: 1px solid #9a1a4b;
        }

        &:hover {
          color: #9a1a4b;
          border: 1px solid #9a1a4b;
        }
      }
    }
  }

  .eventos {
    display: flex;
    gap: 43px;
    align-items: center;
    min-height: 490px;

    button {
      width: 40px;
      height: 40px;
      background-color: #9a1a4b;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &.desactive {
        background-color: #958fa0;
      }
    }

    @media screen and (max-width: 768px) {
      gap: 25px;

      button {
        display: none;
      }
    }

    .list {
      width: 1069px;
      height: 450px;
      display: flex;
      gap: 43px;
      overflow-x: scroll;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;


      &::-webkit-scrollbar {
        display: none;
      }

      @media screen and (max-width: 1400px) {
        width: 791px;
      }

      @media screen and (max-width: 1000px) {
        width: 513px;
      }

      @media screen and (max-width: 768px) {
        width: 100vw;
        padding: 0 25px;
        overflow-y: scroll;
        gap: 25px;
      }
    }
  }


  .agenda-btn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    button {
      background-color:#9a1a4b;
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
  }

 
`
