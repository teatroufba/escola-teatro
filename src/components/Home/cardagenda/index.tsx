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

    .info h4 {
      color: #9a1a4b;
    }
  }

  .container-img{
    height: 250px;
    background-color: #d9d9d9;
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;

    .img-content {
      min-width: 235px;
      height: 250px;
      position: relative;
      z-index: 0;

    }

   
    .img-date {
      background-color: #9a1a4b;
      padding: 15px;
      z-index: 1;
      color: #ffffff;
     
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


    .title {
      font-family: 'Merriweather', serif;
      font-weight: 400;
      color: #282b62;
      line-height: 120%;
      font-size: 18px;
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

    
    <CardStyle>
      <Link href={`/agenda/${uid}`} passHref>
        <div className="card">
            <div className="container-img"> 
              <div className="img-content"> 
                <Image src={imageUrl} alt={imageAlt} width={235} height={250} layout="responsive" objectFit="cover"  />
              </div>
            
              <p className='img-date'>
                    {dia}<br />
                    <span>{meses[mes]}</span>
              </p>
                

            </div>
            <div className="container-baixo">
                <h4 className='title'>{title}</h4>
                <div className="container-data">
                    <Image src='/calendar.svg' alt="" width={24} height={24} />
                    <p>{`${dia}/${mesNumero}/${ano}`}</p>
                </div>
                <div className="container-location">
                    <Image src='/location-azul.svg' alt="" width={24} height={24} />
                    <p>{local}</p>
                </div>
                <p className="conteudo-agenda">
                    {subtitle}
                </p>
                
                    
                
            </div>
            </div>
            </Link>
        </CardStyle>
  )
}

export default CardAgenda
