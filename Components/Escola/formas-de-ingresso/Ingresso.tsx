
import Link from 'next/link';
import { useState } from 'react';

import Pagination from './Pagination';
import { StyledIngressoContainer } from './styles';
  
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
    const [currentPage, setCurrentPage] = useState(1)
    const [contentPerPage] = useState(1)

    const lastContent = currentPage * contentPerPage; 
    const firstContent = lastContent - contentPerPage; 
    const currentContent = conteudos.slice(firstContent, lastContent); 

    const pages = [...Array(Math.ceil(conteudos.length / contentPerPage)).keys()];

     return (
        <StyledIngressoContainer>
            <h1>Formas de Ingresso</h1>
            <div className="ingresso-content">
                <div className="left-column">
                    {formas.map((forma) => 
                        <div className="ingresso">
                            <Link passHref href={forma.link}>
                                <a href={forma.link} rel='noopener noreferrer' target='_blank'><h3>{forma.titulo}</h3></a>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="right-column">
                    {currentContent.map((forma) => 
                        <div className="ingresso-info">
                            <div className="ingresso-info-content">
                                <h3>{ forma.titulo }</h3>
                                <p>{ forma.conteudo }</p>
                            </div>
                            <Pagination currentPage={currentPage} pages={pages} paginationFunction={setCurrentPage} />
                    </div>
                    )}
                </div>
            </div>
        </StyledIngressoContainer>
    )
}