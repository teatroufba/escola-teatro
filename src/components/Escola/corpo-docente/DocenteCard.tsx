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
        <Image alt={altImage? altImage : "sem informação"} height={200} src={imageUrl} width={290} />
        <StyledStaffDescriptionContainer>
            <StyledStaffDescription>
                <h2> {name? name : "sem informação"} </h2>
                <p className='email'> Email: {email? email : "sem informação"} </p>
                <p> Áreas de Interesse: {interests?  interests : "sem informação"} </p>
            </StyledStaffDescription>
            <Link passHref href={link}>
              <a href={link? link : "/"} rel='noopener noreferrer' target='_blank'>
                <button>Currículo Lattes</button>
              </a>
            </Link>
        </StyledStaffDescriptionContainer> 
    </StyledStaffCard>
  )
}
