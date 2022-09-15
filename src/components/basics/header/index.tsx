import Image from 'next/image'
import React from 'react'

import image from '@/public/brasao.png'

import { HeaderContainer, HeaderInferior, HeaderSuperior } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <HeaderSuperior>
        <div className="header">
          <div className='logo-img'>
            <Image 
              alt="brasao" 
              src={image} 
             
            />
          </div>
           
          <p>Escola de Teatro da UFBA</p>
        </div>

        <div>
          <ul className="social">
            <a href="http://www.facebook.com.br">
              <input
                alt="facebook"
                className="facebook"
                height={50}
                src="./icon-facebook.svg"
                type="image"
                width={50}
              />
            </a>
            <a href="http://www.instagram.com.br">
              <input
                alt="instagram"
                className="instagram"
                height={50}
                src="./icon-instagram.svg"
                type="image"
                width={50}
              />
            </a>
            <a href="http://www.youtube.com.br">
              <input
                alt="youtube"
                className="youtube"
                height={50}
                src="./icon-youtube.svg"
                type="image"
                width={50}
              />
            </a>
            <a href="http://www.flickr.com.br">
              <input
                alt="flickr"
                className="flickr"
                height={50}
                src="./icon-flickr.svg"
                type="image"
                width={50}
              />
            </a>
          </ul>
        </div>
      </HeaderSuperior>

      <HeaderInferior>
           <ul className="menu">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/escola">A Escola</a>
              </li>
              <li>
                <a href="/ensino">Ensino e Pesquisa</a>
              </li>
              <li>
                <a href="/extensao">Extensão</a>
              </li>
              <li>
                <a href="/espacos">Espaços</a>
              </li>
              <li>
                <a href="/agenda">Agenda</a>
              </li>
              <li>
                <a href="/galeria">Galeria Virtual</a>
              </li>
          </ul> 

         
      </HeaderInferior>
    </HeaderContainer>
  )
}
export default Header
