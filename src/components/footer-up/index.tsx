import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const FooterStyled = styled.div`
  background-color: #f7f6f5;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 25px 0;

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
  }
`

function FooterUp() {
  return (
    <FooterStyled>
      <Link href="https://www.facebook.com/ufba.escoladeteatro/" passHref>
        <a href="replace" className="desktop">
          <Image
            src="/face-icon.svg"
            width={50}
            height={50}
            alt="Icone do Facebook"
          />
        </a>
      </Link>
      <Link href="https://www.instagram.com/escoladeteatro.ufba/" passHref>
        <a href="replace" className="desktop">
          <Image
            src="/insta-icon.svg"
            width={50}
            height={50}
            alt="Icone do Instagram"
          />
        </a>
      </Link>
      <Link href="/" passHref>
        <a href="replace">
          <Image
            src="/brasao.svg"
            width={71}
            height={80}
            alt="Brasão da Escola de Teatro"
          />
        </a>
      </Link>
      <Link href="https://www.youtube.com/user/teatroufba" passHref>
        <a href="replace" className="desktop">
          <Image
            src="/youtube-icon.svg"
            width={50}
            height={50}
            alt="Icone do Youtube"
          />
        </a>
      </Link>
      <Link href="https://www.flickr.com/photos/128786324@N02/sets/" passHref>
        <a href="replace" className="desktop">
          <Image
            src="/flickr-icon.svg"
            width={50}
            height={50}
            alt="Icone do Flickr"
          />
        </a>
      </Link>
    </FooterStyled>
  )
}

export default FooterUp
