import styled from "styled-components";

export const StyledPostAgendaMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  #container-img-agenda {
    position: relative;
    width: 100%;
    height: 68.53vw;
    margin-bottom: 2.5rem;
  }

  #container-baixo-agenda {
    font-family: Arial;
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem;

    h1 {
      font-size: 2.25rem;
      margin-bottom: 1.5rem;
    }

    #container-info-agenda {
      background-color: #9a1a4b;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 1rem;
      margin-bottom: 1.5rem;

      div {
        display: flex;
        gap: 0.5rem;

        p {
          font-size: 1rem;
          color: #eeeded;
        }
      }
    }

    #conteudo-post-agenda {
      font-size: 1rem;
      margin-bottom: 2.5rem;
      line-height: 1.5rem;
      display: flex;
      flex-direction: column;

      p {
        margin: 16px 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 8px 0;
        width: 100%;
        display: flex;
      }
      div[data-oembed-type="video"] {
        margin: 8px 0;

        iframe {
          width: calc(100vw - 40px);
          max-width: calc(77.1875rem - 40px);
          width: calc(100vw - 40px);
          height: calc(56.5vw - 22.6px);
          max-height: calc(43.6109375rem - 22.6px);
        }
      }
    }
  }
  @media (max-width: 769px) {
    #container-baixo-agenda {
      width: 100%;
    }
  }
  @media (min-width: 769px) {
    #container-img-agenda {
      height: 39.06vw;
      margin-bottom: 5rem;
    }

    #container-baixo-agenda {
      width: 100%;
      max-width: 77.1875rem;

      h1 {
        font-size: 3rem;
        margin-bottom: 4rem;
      }

      #container-info-agenda {
        padding: 1.5rem;
        gap: 1.3125rem;
        margin-bottom: 4rem;
      }

      #conteudo-post-agenda {
        font-size: 1.375rem;
        line-height: 2.0625rem;
        display: flex;
        flex-direction: column;

        h1,
        h2,
        h3,
        h4,
        h5 {
          width: 100%;
          display: flex;
        }
        div[data-oembed-type="video"] {
          iframe {
            width: calc(100vw - 40px);
            max-width: calc(77.1875rem - 40px);
            width: calc(100vw - 40px);
            height: calc(56.5vw - 22.6px);
            max-height: calc(43.6109375rem - 22.6px);
          }
        }
      }
    }
  }
`;
