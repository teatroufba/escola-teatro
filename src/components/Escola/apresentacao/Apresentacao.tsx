import Image from 'next/image'; 
import { useEffect, useState } from 'react';

import Pagination from './Pagination';
import { StyledPresentationContainer } from './styles';

interface IApresentacaoItem {
    conteudo: string,
    imageAlt: string,
    imageUrl: string,
    titulo: string
}

interface IApresentacao {
    conteudos: IApresentacaoItem[]
}

export default function Apresentacao({ conteudos }: IApresentacao) {
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
        const text = document.getElementById('text-content'); 
        const mainContainer = document.getElementById('main-container');
        const button = document.getElementById('show-text-btn'); 
        
        if(text && mainContainer && button) {
            
            if(isShowingText) {
                setIsShowingText(false);
                setIsClampedText(true);
                text.classList.add('hidden-text');
                mainContainer.style.height = 
                    window.innerWidth < 768 
                    ? '100%' 
                    : '800px';
                text.style.height = 
                    window.innerWidth < 768 
                    ? '100%' 
                    : '330px';
            }
            else {
                setIsShowingText(true); 
                setIsClampedText(true);
                text.classList.remove('hidden-text'); 
                mainContainer.style.height = '100%';
                text.style.height = '90%';
            }

            if(window.innerWidth < 768) {
                window.scrollTo({
                    top: document.getElementById('title')?.offsetTop,
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
            const text = document.getElementById('text-content');
            const button = document.getElementById('show-text-btn');   
            
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
            const button = document.getElementById('show-text-btn');
            if(button) button.innerHTML = 'Ver mais';
        } 
    }, [])

    return (
    <StyledPresentationContainer id='main-container'>
        {currentContent.map(item =>
            <div className="presentation-content">
                <div className="left-column" id='content'>
                    <div className="image-container" id="image-container">
                        <Image priority 
                            alt={item.imageAlt} 
                            className='image' 
                            layout='fill'
                            objectFit='cover' 
                            src={item.imageUrl} 
                        />                
                    </div>
                </div>
                <div className="content-column-wrapper">
                    <div className="content-column">
                        <h1 id='title'>Apresentação</h1>
                        <h2>{item.titulo}</h2>
                        <div className="text-content">
                            <p id='text-content' className='hidden-text'>{item.conteudo}</p>
                            <button id='show-text-btn' onClick={() => showText()}>
                                {''}
                            </button>
                        </div>
                    </div>
                    <Pagination 
                        currentPage={currentPage} 
                        pages={pages} 
                        paginationFunction={setCurrentPage} 
                        hideTextFunction={hideText}/>
                </div>
            </div>
        )}
    </StyledPresentationContainer>);
}