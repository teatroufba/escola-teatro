import React from 'react'

import { HeaderInferior, HeaderSuperior } from './styles'

function Header() {
  return (
    <div>
      <HeaderSuperior>
        <div className="header">
          <img src="/brasao.svg" alt="brasao" />
          <p>Escola de Teatro da UFBA</p>
        </div>

        <div>
          <ul className="social">
            <a href="http://www.facebook.com.br">
              <input
                type="image"
                src="/icon-facebook.svg"
                alt="facebook"
                className="facebook"
                height={50}
                width={50}
              />
            </a>
            <a href="http://www.instagram.com.br">
              <input
                type="image"
                src="/icon-instagram.svg"
                alt="instagram"
                className="instagram"
                height={50}
                width={50}
              />
            </a>
            <a href="http://www.youtube.com.br">
              <input
                type="image"
                src="/icon-youtube.svg"
                alt="youtube"
                className="youtube"
                height={50}
                width={50}
              />
            </a>
            <a href="http://www.flickr.com.br">
              <input
                type="image"
                src="/icon-flickr.svg"
                alt="flickr"
                className="flickr"
                height={50}
                width={50}
              />
            </a>
          </ul>
        </div>
      </HeaderSuperior>

      <HeaderInferior>
        <div>
          <button className="btn-mobile">Menu</button>
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
