import { maxChar } from '@/utils/maxChar'
import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { ClockIcon, LocationIcon } from './icons'
import { StyledAgendaCard } from '@/components/Agenda/styles'
import Link from "next/link";

const CardStyle = styled.div`
  width: 235px;
  height: 450px;
  
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #ffffff;

  &:hover {
    background: #24233a;
    .container-baixo {
      .title{
      color: #9a1a4b;
      }
      .baixo-data {
        color: #9a1a4b;
      }
      .baixo-local {
        color: #9a1a4b;
      }

      .img-icon{
        filter: brightness(0) saturate(100%) invert(14%) sepia(54%) saturate(4320%) hue-rotate(321deg) brightness(96%) contrast(92%);
      }
    }
    
    
  }

  .container-img{

    width: 100%;
    position: relative;
    height: 15.625rem;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;

  

   
    .img-date {
      background-color: #9a1a4b;
      padding: 15px;
      z-index: 0;
      color: #ffffff;
      position: relative;
     
      h3 {
        font-family: 'Merriweather', serif;
      }

      small {
        font-family: 'Merriweather', serif;
      }
    }   
  }

  .container-baixo {
    padding: 0 15px 15px 15px;
    display: flex;
    flex-direction: column;
    min-height: 50%;
    height: 50%;
    gap: 10px;
    font-family: 'Arial';


    .title {
      font-family: 'Merriweather', serif;
      font-weight: 400;
      color: #282b62;
      line-height: 120%;
      font-size: 18px;
      height: 100px;
    }

    .container-title  {
      height: 150px;
    }

    div {
      display: flex;
      gap: 15px;
      align-items: center;

      h4 {
        font-family: 'Arial';
        
      }
    }
  }
`

type CardProps = {
  date: string
  title: string
  local: string
  imageUrl : string 
  imageAlt : string
  uid: string
  subtitle:string
}

function CardAgenda({ date, title, local , imageUrl , imageAlt , uid , subtitle}: CardProps) {
  
  const meses = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ]

  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }


    const data = new Date(date)
    let dia = data.getDate().toString()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    let mesNumero = (mes + 1).toString()

    if (dia.length === 1) {
        dia = `0${dia}`
    }

    if (mesNumero.length === 1) {
        mesNumero = `0${mes}`
    }

  return (

    
    <CardStyle >
      <Link href={`/agenda/${uid}`} passHref>
        <div className="card">
            <div className="container-img"> 
                <Image src={imageUrl} alt={imageAlt}  layout="fill" objectFit="cover" objectPosition='center' />
              
              {data ? <p className='img-date'>
                    {dia}<br />
                    <span>{meses[mes]}</span>
              </p> : ''}
                

            </div>
            <div className="container-baixo">
                <h4 className='title'>{title}</h4>
                {data ? <div className="container-data">
                    <Image className="img-icon" src='/calendar.svg' alt="" width={24} height={24} />
                    <p className='baixo-data'>{`${dia}/${mesNumero}/${ano}`}</p>
                </div> : ''}
                {local ? <div className="container-location">
                    <Image className="img-icon" src='/location-azul.svg' alt="" width={24} height={24} />
                    <p className='baixo-local'>{local}</p>
                </div> : ''}
                
            
                
                    
                
            </div>
            </div>
            </Link>
        </CardStyle>
  )
}

export default CardAgenda
