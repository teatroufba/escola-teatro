import Image from 'next/image'; 
import Link from 'next/link';

import { StyledStaffCard, StyledStaffDescription, StyledStaffDescriptionContainer } from './styles'

interface ICard {
    altImage: string,
    email: string,
    imageUrl: string,
    interests: string,
    link: string,
    name: string,
  }

export default function StaffCard({name, email, link, interests, imageUrl, altImage} : ICard) {
  return (
    <StyledStaffCard>
        <Image alt={altImage} height={200} src={imageUrl} width={290} />
        <StyledStaffDescriptionContainer>
            <StyledStaffDescription>
                <h2> {name} </h2>
                <p> Email: {email} </p>
                <p> Áreas de Interesse: {interests} </p>
            </StyledStaffDescription>
            <Link passHref href={link}>
              <a href={link} rel='noopener noreferrer' target='_blank'>
                <button>Currículo Lattes</button>
              </a>
            </Link>
        </StyledStaffDescriptionContainer> 
    </StyledStaffCard>
  )
}
