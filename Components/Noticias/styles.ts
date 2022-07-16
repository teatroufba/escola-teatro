import styled from 'styled-components'

interface Props {
  filter: string
}

export const StyledPage = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');

  .header-blog {
    font-family: 'Merriweather'
    font-weight: 400;
    color: white;
    padding: 5%;
    background-color: #24233A;

    h3 {
      font-family: arial;
      font-weight: 400;
      font-size: 14px
    }
  }
`

export const StyledFilterButton = styled.div`
  .fil-button {
    display: flex;
    justify-content: center;
    padding: 5%;
    gap: 1.2%;

    button {
      background-color: white;
      border: none;
      font-weight: 400;
      font-family: arial;
      color: #757575;
      font-size: 12px;
      cursor: pointer;
    }

    button:hover {
      border-bottom: 2px solid #757575;
    }
    button.${(props: Props) => props.filter} {
      border-bottom: 2px solid #757575;
    }
  }
`

export const StyledFilterSort = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
    font-weight: 400;
    color: rgba(0, 0, 0, 0.35);
    font-size: 9px;
    padding: 5px;
    margin: 3px;
    border-radius: 5px;
  }

  p {
    font-family: arial;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.38);
    font-size: 10px;
  }

  margin-bottom: 2%;
`

export const StyledContentPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');
  display: flex;
  flex-direction: column;
  padding: 10%;
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
  .pagination-btn{
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
`

export const StyledPosts = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300;1,400&display=swap');
  font-family: 'Merriweather';
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  margin-bottom: 5%;

  p {
    font-family: arial;
  }

  a {
    text-decoration: none;
    font-family: 'Merriweather';
    color: black;
  }
`
