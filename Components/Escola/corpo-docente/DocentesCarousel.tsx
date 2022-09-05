import { useEffect, useRef, useState } from 'react';

import StaffCardCarousel from './DocenteCardCarousel';
import { StyledStaffCarousel } from './styles';

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
}

export default function DocentesCarousel ({ docentes }: DocentesProps) {
    const carousel = useRef<HTMLInputElement>(null);
    const [carouselScrollLeft, setCarouselScrollLeft] = useState(0)
    const [carouselTotalScroll, setCarouselTotalScroll] = useState(0)
    
    useEffect(() => {
        if (carousel.current != null) {
            console.log(carousel.current.scrollWidth)
            console.log(carousel.current.clientWidth)
          setCarouselTotalScroll(
            Number(carousel.current.scrollWidth - carousel.current.clientWidth)
          )
        }
      }, [carouselScrollLeft])

      const scrollLeft = () => {
        if (carousel.current != null && carousel.current.scrollLeft > 0) {
          setCarouselScrollLeft(Number(carousel.current.scrollLeft) - 278)
          carousel.current.scrollLeft -= 278
        }
      }

      const scrollRight = () => {
        if (
          carousel.current != null &&
          carousel.current.scrollLeft < carousel.current.scrollWidth
        ) {
          setCarouselScrollLeft(Number(carousel.current.scrollLeft) + 278)
          carousel.current.scrollLeft += 278
        }
      }
      
    return (
        <StyledStaffCarousel ref={carousel}>
          {docentes.map(docente =>
            <StaffCardCarousel key={docente.uid}
            altImage={docente.altImage} 
            email={docente.email} 
            imageUrl={docente.imageUrl}
            interests={docente.interests} 
            link={docente.link}
            name={docente.name}
            uid={docente.uid}
            /> 
        )}
        </StyledStaffCarousel>
    )
}