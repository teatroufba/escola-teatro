import { useEffect, useState } from 'react';

import StaffCard from './DocenteCard';
import Pagination from './Pagination';
import { StyledStaff } from './styles';

interface IDocente {
    altImage: string,
    email: string,
    imageUrl: string,
    interests: string,
    link: string,
    name: string,
    uid: string
}

interface DocentesProps {
    docentes: IDocente[],
    largura: number,
}


export default function DocentesGrid ({ docentes, largura }: DocentesProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(6);

    const lastCard = currentPage * cardsPerPage; 
    const firstCard = lastCard - cardsPerPage; 
    const currentCards = docentes.slice(firstCard, lastCard); 

    const pages = [...Array(Math.ceil(docentes.length / cardsPerPage)).keys()];

    useEffect(() => {
        const element = document.getElementById('staff-container')

        if(largura > 1560) {
            if(element!= null) {
                element.style.gap = '24px'
            }
            setCardsPerPage(8);
        };

        if(largura < 1560 && largura > 1150) {
            if(element!= null) {
                element.style.gap = '40px'
            }
            setCardsPerPage(6)
        };
        
        if(largura < 1150) {  
            if(element!= null) {
                element.style.gap = '30px'
            }
            setCardsPerPage(4)
        }
    })
    
    return (
    <div>
        <StyledStaff id='staff-container'>
            {currentCards.map(docente => (
            <StaffCard key={docente.uid}
                altImage={docente.altImage} 
                email={docente.email} 
                imageUrl={docente.imageUrl}
                interests={docente.interests} 
                link={docente.link}
                name={docente.name}
                uid={docente.uid}
            /> )   
            )}
        </StyledStaff>
        <Pagination currentPage = {currentPage} pages={pages} paginationFunction={setCurrentPage} />    
    </div>
    )
}