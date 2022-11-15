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
  }

export default function StaffCardCarousel({name, email, link, interests, imageUrl, altImage} : ICard) {
    return (
    <StyledDocenteCardCarrossel>
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
                <h2> {name? name : ""} </h2>
                <p className='email'> Email: {email? email : ""} </p>
                <p> Áreas de Interesse: {interests? interests : ""} </p>
            </div>
            <Link passHref href={link? link : "/"}>
                <a href={link} rel='noopener noreferrer' target='_blank'>
                    <button disabled={link? true : false}>Currículo Lattes</button>
                </a>
            </Link>
        </div>
    </StyledDocenteCardCarrossel>
  )
}
