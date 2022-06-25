import styled from 'styled-components'

export const StyledPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;

  .posts-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5%;
    gap: 10%;
  }

  button {
    background-color: white;
    font-weight: 800;
    border: 1px solid #958fa0;
    border-radius: 5px;
    padding: 5px;
    font-size: 10px;
    cursor: pointer;
    color: #958fa0;
    font-family: 'Inter';
    width: 40px;
    align-items: center;
    text-transform: uppercase;
  }

  .pagination-btn {
    font-family: 'Inter';
    display: flex;
    color: #958fa0;
    gap: 5%;
    margin-bottom: 5%;
  }

  .pages-btn {
    display: flex;
    flex-direction: row;

    span {
      margin: 9%;
    }
  }
`

export const StyledPosts = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap');
  font-family: 'Merriweather';
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;

  p {
    font-family: arial;
  }
`

export const StyledFiltros = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5%;
  gap: 5%;

  button {
    background-color: #2d2b78;
    font-family: arial;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 3px;
    font-size: 10px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
  }

  input {
    border: 1px solid silver;
    font-family: arial;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.35);
    font-size: 10px;
    padding: 5px;
    margin: 3px;
    border-radius: 5px;
  }

  .filter-input {
    p {
      font-family: arial;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.38);
      font-size: 10px;
    }

    margin-bottom: 1%;
  }
`
