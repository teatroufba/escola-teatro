import Image from 'next/image'; 
import Link from 'next/link';

import { StyledDocenteCardCarrossel } from './styles'

interface ICard {
    altImage: string,
    email: string,
    imageUrl: string,
    interests: string,
    link: string,
    name: string,
    uid: string
  }

export default function StaffCardCarousel({name, email, link, interests, imageUrl, altImage, uid} : ICard) {
    return (
    <StyledDocenteCardCarrossel key={uid}>
        <div className="image-container">
            <Image 
                alt={altImage} 
                className='image' 
                layout='fill' 
                objectFit='cover' 
                src={imageUrl}/>
        </div>
        <div className="docente-description">
            <div className="docente-info">
                <h2> {name} </h2>
                <p> Email: {email} </p>
                <p> Áreas de Interesse: {interests} </p>
            </div>
            <Link passHref href={link}>
                <a href={link} rel='noopener noreferrer' target='_blank'>
                    <button>Currículo Lattes</button>
                </a>
            </Link>
        </div>
    </StyledDocenteCardCarrossel>
  )
}
