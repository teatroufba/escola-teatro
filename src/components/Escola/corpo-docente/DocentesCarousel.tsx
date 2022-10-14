import { useEffect, useRef, useState } from 'react';

import StaffCardCarousel from './DocenteCardCarousel';
import { StyledStaffCarousel } from './styles';

interface IDocente {
	imagemAlt: string;
	email: string;
	imagemUrl: string;
	interesses: string;
	link: string;
	nome: string;
}

interface DocentesProps {
    docentes: IDocente[],
}

export default function DocentesCarousel ({ docentes }: DocentesProps) {  
    return (
        <StyledStaffCarousel>
          {docentes.map((docente, index) =>
            <StaffCardCarousel key={`carrossel${index}`}
            altImage={docente.imagemAlt} 
            email={docente.email} 
            imageUrl={docente.imagemUrl}
            interests={docente.interesses} 
            link={docente.link}
            name={docente.nome}
            /> 
        )}
        </StyledStaffCarousel>
    )
}