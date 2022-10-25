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

  #brasao{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    min-height: 75px;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
  }
`

function FooterUp() {
  return (
    <FooterStyled>
      <Link passHref href="https://www.facebook.com/ufba.escoladeteatro/" >
        <a className="desktop" href="replace" target="_blank">
          <Image
            alt="Icone do Facebook"
            height={50}
            src="/face-icon.svg"
            width={50}
          />
        </a>
      </Link>
      <Link passHref href="https://www.instagram.com/escoladeteatro.ufba/" >
        <a className="desktop" href="replace" target="_blank">
          <Image
            alt="Icone do Instagram"
            height={50}
            src="/insta-icon.svg"
            width={50}
          />
        </a>
      </Link>
      <Link passHref href="/">
        <a href="replace" id='brasao' > 
          <Image
            alt="Brasão da Escola de Teatro"
            height={80}
            src="/brasao.png"
            width={80}
          />
        </a>
      </Link>
      <Link passHref href="https://www.youtube.com/user/teatroufba" >
        <a className="desktop" href="replace" target="_blank" >
          <Image
            alt="Icone do Youtube"
            height={50}
            src="/youtube-icon.svg"
            width={50}
          />
        </a>
      </Link>
      <Link passHref href="https://www.flickr.com/photos/128786324@N02/sets/" >
        <a className="desktop" href="replace" target="_blank">
          <Image
            alt="Icone do Flickr"
            height={50}
            src="/flickr-icon.svg"
            width={50}
          />
        </a>
      </Link>
    </FooterStyled>
  )
}

export default FooterUp
