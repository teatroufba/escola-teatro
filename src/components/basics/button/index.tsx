import { MouseEventHandler } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #2d2b78;
  font-size: 1.125rem;
  font-weight: 400;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: "Merriweather";
  cursor: pointer;

  &:hover {
    background-color: #9a1a4b;
  }
`;

type ButtonProps = {
  children: string;
  className?: string;
  disable?: boolean | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button(props: ButtonProps) {
  const { children, onClick, disable, className } = props;

  return (
    <ButtonStyled className={className} disabled={disable} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
