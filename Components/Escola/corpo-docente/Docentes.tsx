import { useEffect, useState } from 'react';

import DocentesGrid from './DocenteGrid';
import DocentesCarousel from './DocentesCarousel';
import { StyledStaff, StyledStaffCarousel, StyledStaffContainer } from './styles'

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
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <StyledStaffContainer>
      <div className="wrap-staff-container">
        <h1>Corpo Docente</h1>
        {width > 768 
        ? <DocentesGrid docentes={docentes} largura={width}/>
        : <DocentesCarousel docentes={docentes} />
        }
      </div>
    </StyledStaffContainer>
  )
}
