import styled from 'styled-components'

export const StyledPage = styled.div`
  margin-left: 15%;
  justify-content: center;

  .posts-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10%;
  }

  .pagination-btn {
  }

  button {
    background-color: white;
    border: 1px solid silver;
    border-radius: 5px;
    cursor: pointer;
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
  justify-content: center;
  gap: 10%;
  padding: 15%;

  button {
    background-color: #2d2b78;
    font-family: arial;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 10px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
  }
  
  .filter-button{
    display: flex;
    align-items: center;
    gap: 4%;
  }

  input {
    border: 1px solid silver;
  }

  .filter-input {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2%;
  }

  span {
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;

    p {
      font-size: 10px;
      text-transform: uppercase;
    }
  }

}
`
