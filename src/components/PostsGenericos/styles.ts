import styled from "styled-components";
export const StyledPosts = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:center;
  width: 325px;
  border: solid 1.5px #2D2B784D;
  cursor: pointer;

  .noticias-post-img {
    width: 100%;
        position: relative;
        height: 25rem;
        display: flex;
        align-items: flex-end;
  }


  .container-data {
    display: flex;
    gap: 0.5rem;
    padding-top: .5rem;
    align-items: center;

    p {
        font-size: 0.875rem;
        line-height: 1.3125rem;
        font-family: Arial;
    }
}
  .noticias-post-text {
    display: flex;
    flex-direction: column;
    height: 224px;
    margin-bottom: 25px;
    overflow: hidden;
    width: 25rem;
    padding: 1.5rem 1rem 0 1rem;
    h3 {
      font-family: "Merriweather";
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 8px;
      max-height: 100%;
      display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    }

    p {
      font-family: arial;
      font-weight: 400;
      font-size: 15px;
      max-height: 95%;
      max-width: 95%;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
    }
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    }
  }

  a {
    text-decoration: none;
    font-family: "Merriweather";
    color: black;
    font-weight: 400;
    font-size: 18px;
    margin-top: 5%;
  }

  @media (min-width: 1081px) {
    width: 24.4rem;
    .noticias-post-img {
      width: 24.3rem;
      height: 24.3rem;
    }
    .noticias-post-text {
      height: 250px;
    }
  }

  @media (max-width: 1081px) {
    width: 20.2rem;
    .noticias-post-img {
      width: 20rem;
      height: 20rem;
    }
    .noticias-post-text {
      width: 20rem;
    }
  }
`;