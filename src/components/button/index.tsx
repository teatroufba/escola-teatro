import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: #2d2b78;
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: 'Arial', serif;
  cursor: pointer;

  &:hover {
    background-color: #9a1a4b;
  }
`

type ButtonProps = {
  children: string
}

function Button(props: ButtonProps) {
  const { children } = props

  return <ButtonStyled>{children.toUpperCase()}</ButtonStyled>
}

export default Button
