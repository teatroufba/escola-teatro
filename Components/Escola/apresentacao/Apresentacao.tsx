import Image from 'next/image'; 
import { useState } from 'react';

import Pagination from './Pagination';
import { StyledApresentacaoContainer } from './styles';

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
    const [currentPage, setCurrentPage] = useState(1)
    const [contentPerPage] = useState(1)

    const lastContent = currentPage * contentPerPage; 
    const firstContent = lastContent - contentPerPage; 
    const currentContent = conteudos.slice(firstContent, lastContent); 

    const pages = [...Array(Math.ceil(conteudos.length / contentPerPage)).keys()];

    return (
    <StyledApresentacaoContainer>
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
                        <h1>Apresentação</h1>
                        <h2>{item.titulo}</h2>
                        <p>{item.conteudo}</p>
                    </div>
                    <Pagination currentPage={currentPage} pages={pages} paginationFunction={setCurrentPage}/>
                </div>
            </div>
        )}
    </StyledApresentacaoContainer>);
}