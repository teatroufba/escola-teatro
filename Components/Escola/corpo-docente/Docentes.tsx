
import { useState } from 'react';

import StaffCard from './DocenteCard';
import Pagination from './Pagination';
import { StyledStaff, StyledStaffContainer } from './styles'

interface IDocente {
    altImage: string,
    email: string,
    imageUrl: string,
    interests: string,
    link: string,
    name: string,
    uid: string
}

interface IDocentes {
    docentes: IDocente[];
}


export default function Docentes ({ docentes }: IDocentes) {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(6)

  const lastCard = currentPage * cardsPerPage; 
  const firstCard = lastCard - cardsPerPage; 
  const currentCards = docentes.slice(firstCard, lastCard); 

  const pages = [...Array(Math.ceil(docentes.length / cardsPerPage)).keys()];

  return (
    <StyledStaffContainer>
      <div className="wrap-staff-container">
        <h1>Corpo Docente</h1>
        <StyledStaff>
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
    </StyledStaffContainer>
  )
}
