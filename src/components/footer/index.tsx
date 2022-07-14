import Image from 'next/image'
import styled from 'styled-components'

import FooterDown from '../footer-down'
import FooterUp from '../footer-up'

const FooterStyled = styled.footer`
  background-color: #282b62;
  color: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  text-align: center;
  gap: 8px;

  div ul {
    display: flex;
    list-style: none;
    gap: 30px;
    margin: 0;
    padding: 0;
    justify-content: center;

    li {
      display: flex;
      gap: 8px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    gap: 15px;
    align-items: center;
    text-align: left;
    font-size: 0.75rem;

    div ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0;
      padding: 0;

      margin: 0 auto;

      li {
        display: flex;
        gap: 8px;
      }
    }
  }
`

function Footer() {
  return (
    <>
      <FooterUp />
      <FooterDown />
      <FooterStyled>
        <p>Copyright ® - Todos os direitos reservados à UFBA.</p>
        <div>
          <ul>
            <li>
              <Image
                src="/email.svg"
                width={20}
                height={20}
                alt="Icone de Email"
              />
              <p>escoladeteatro@ufba.br</p>
            </li>
            <li>
              <Image
                src="/phone.svg"
                width={20}
                height={20}
                alt="Icone de Telefone"
              />
              <p>71 3200-0000</p>
            </li>
            <li>
              <Image
                src="/location.svg"
                width={20}
                height={20}
                alt="Icone de Endereço"
              />
              <p>Av. Araújo Pinho, 292 - Canela, Salvador - BA</p>
            </li>
          </ul>
        </div>
      </FooterStyled>
    </>
  )
}

export default Footer
