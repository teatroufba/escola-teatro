import Image from 'next/image'; 

import { StyledStaffCard, StyledStaffDescription, StyledStaffDescriptionContainer } from './styles'

interface ICard {
    altImage: string,
    email: string,
    imageUrl: string,
    interests: string,
    link: string,
    name: string,
    uid: string
  }

export default function StaffCard({name, email, link, interests, imageUrl, altImage, uid} : ICard) {
  return (
    <StyledStaffCard key={uid}>
        <Image alt={altImage} height={200} src={imageUrl} width={290} />
        <StyledStaffDescriptionContainer>
            <StyledStaffDescription>
                <h2> {name} </h2>
                <p> Email: {email} </p>
                <p> Áreas de Interesse: {interests} </p>
            </StyledStaffDescription>
            <a href={link} rel="noreferrer noopener" target="_blank">
                <button>Currículo Lattes</button>
            </a>
        </StyledStaffDescriptionContainer> 
    </StyledStaffCard>
  )
}
