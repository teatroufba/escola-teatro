
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Pagination from './Pagination';
import { StyledEntryFormsContainer } from './styles';
  
  interface IFormaIngresso {
    link: string,
    titulo: string
  }
  interface IConteudo {
    conteudo: string,
    titulo: string
  }
  interface FormasDeIngressoProps {
    conteudos: IConteudo[],
    formas: IFormaIngresso[],
  }

export default function FormasDeIngresso ({ conteudos, formas }: FormasDeIngressoProps) {
    const [isShowingText, setIsShowingText] = useState(false) 
    const [isClampedText, setIsClampedText] = useState(true)
    const [isLongText, setIsLongText] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [contentPerPage] = useState(1)

    const lastContent = currentPage * contentPerPage; 
    const firstContent = lastContent - contentPerPage; 
    const currentContent = conteudos.slice(firstContent, lastContent); 

    const pages = [...Array(Math.ceil(conteudos.length / contentPerPage)).keys()];

    function showText() {
        const text = document.getElementById('entry-form-text-content'); 
        const mainContainer = document.getElementById('entry-form-main-container');
        const button = document.getElementById('entry-form-show-text-btn'); 
        
        if(text && mainContainer && button) {
            if(isShowingText) {
                setIsShowingText(false);
                setIsClampedText(true);
                text.classList.add('entry-form-hidden-text');
                mainContainer.style.height = 
                    window.innerWidth < 768 
                    ? '100%' 
                    : '800px';
                text.style.height = 
                    window.innerWidth < 768 
                    ? '100%' 
                    : '300px';
            }
            else {
                setIsShowingText(true); 
                setIsClampedText(true);
                text.classList.remove('entry-form-hidden-text'); 
                mainContainer.style.height = '100%';
                text.style.height = '90%';
            }

            if(window.innerWidth < 768) {
                window.scrollTo({
                    top: document.getElementById('entry-form-title')?.offsetTop,
                    behavior: 'smooth',
                }); 
            }

        }
    }

    function hideText() {
        if(isShowingText) {
            setIsShowingText(false);
            showText(); 
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const text = document.getElementById('entry-form-text-content');
            const button = document.getElementById('entry-form-show-text-btn');   
            
            if(text && button) {

                if(window.innerWidth > 320 && window.innerWidth <= 425) setIsLongText(text.innerHTML.length >= 250);
                if(window.innerWidth > 425 && window.innerWidth <= 768) setIsLongText(text.innerHTML.length >= 350);
                if(window.innerWidth > 768 && window.innerWidth <= 1200) setIsLongText(text.innerHTML.length >= 400);
                if(window.innerWidth > 1200) setIsLongText(text.innerHTML.length >= 735);

                
                setIsClampedText(!(text.scrollHeight == text.clientHeight))

                if(isLongText) {
                    isClampedText 
                    ? button.innerHTML = isShowingText ? 'Ver menos' : 'Ver mais'
                    : button.innerHTML = 'Ver menos' 
                } else {
                    isClampedText ? null : button.innerHTML = ''
                }
            }
        }
    })

    useEffect(() => {
        if(isClampedText) {
            const button = document.getElementById('entry-form-show-text-btn');
            if(button) button.innerHTML = 'Ver mais';
        } 
    }, [])

     return (
        <StyledEntryFormsContainer id='entry-form-main-container'>
            <h1>Formas de Ingresso</h1>
            <div className="entry-content">
                <div className="left-column">
                    {formas.map((forma) => 
                        <div className="entry-form">
                            <Link passHref href={forma.link}>
                                <a href={forma.link} rel='noopener noreferrer' target='_blank'><h3>{forma.titulo}</h3></a>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="right-column">
                    {currentContent.map((forma) => 
                        <div className="entry-form-info">
                            <div className="entry-form-info-content">
                                <h3 id='entry-form-title'>{ forma.titulo }</h3>
                                <div className="text-content">
                                    <p id='entry-form-text-content' className='entry-form-hidden-text'>{ forma.conteudo }</p>
                                    <button id='entry-form-show-text-btn' onClick={() => showText()}>
                                    {'oi'}
                                    </button>
                                </div>
                            </div>
                            <Pagination 
                                currentPage={currentPage} 
                                pages={pages} 
                                paginationFunction={setCurrentPage}
                                hideTextFunction={hideText} />
                    </div>
                    )}
                </div>
            </div>
        </StyledEntryFormsContainer>
    )
}