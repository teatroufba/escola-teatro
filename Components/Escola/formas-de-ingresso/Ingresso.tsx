
import { useRef, useState } from 'react';

import Pagination from './Pagination';
import { StyledIngressoContainer } from './styles';
  
  interface IFormaIngresso {
    conteudo: string,
    titulo: string
  }
  
  interface IFormasIngresso {
    formas: IFormaIngresso[];
  }

export default function FormasDeIngresso ({ formas }: IFormasIngresso) {
    const [currentPage, setCurrentPage] = useState(1)
    const [contentPerPage] = useState(1)

    const conteudos = formas.map(forma =>
        forma.conteudo
    )

    const lastContent = currentPage * contentPerPage; 
    const firstContent = lastContent - contentPerPage; 
    const currentContent = formas.slice(firstContent, lastContent); 

    const pages = [...Array(Math.ceil(conteudos.length / contentPerPage)).keys()];

    function setCurrentPageOnClick(index: number) {
        setCurrentPage(index);
    }

     return (
        <StyledIngressoContainer>
            <h1>Formas de Ingresso</h1>
            <div className="ingresso-content">
                <div className="left-column">
                    {formas.map((forma, index) => 
                        <div className="ingresso">
                            <button onClick={() => setCurrentPageOnClick(index + 1)}><h3>{forma.titulo}</h3></button>
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