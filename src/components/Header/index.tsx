import Image from 'next/image'
import React from 'react'

import image from '@/public/brasao.png'

import { HeaderInferior, HeaderSuperior } from './styles'

function Header() {
  return (
    <div>
      <HeaderSuperior>
        <div className="header">
          <Image alt="brasao" src={image} /> 
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
        <div className="mobile-menu">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>

        <div>
          <ul className="menu">
            <li>
              <a href="http://www.google.com.br">Início</a>
            </li>
            <li>
              <a href="http://www.google.com.br">A Escola</a>
            </li>
            <li>
              <a href="http://www.google.com.br">Ensino e Pesquisa</a>
            </li>
            <li>
              <a href="http://www.google.com.br">Extensão</a>
            </li>
            <li>
              <a href="http://www.google.com.br">Espaços</a>
            </li>
            <li>
              <a href="http://www.google.com.br">Agenda</a>
            </li>
            <li>
              <a href="http://www.google.com.br">Galeria Virtual</a>
            </li>
          </ul>
        </div>
      </HeaderInferior>
    </div>
  )
}
export default Header
