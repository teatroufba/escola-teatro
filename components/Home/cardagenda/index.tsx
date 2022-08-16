import { useState } from 'react'
import styled from 'styled-components'

import { ClockIcon, LocationIcon } from './icons'

const CardStyle = styled.div`
  width: 235px;
  height: 450px;
  border-radius: 5px;
  flex: none;
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

  .img {
    height: 250px;
    background-color: #d9d9d9;
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: start;
    align-items: end;
    .date {
      background-color: #9a1a4b;
      padding: 15px;
      color: #ffffff;
      h3 {
        font-family: 'Merriweather', serif;
      }

      small {
        font-family: 'Merriweather', serif;
      }
    }
  }

  .info {
    padding: 0 15px 15px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
      font-family: 'Merriweather', serif;
      font-weight: 400;
      color: #282b62;
      line-height: 120%;
      font-size: 18px;
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
  description: string
  local: string
}

function CardAgenda({ date, description, local }: CardProps) {
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

  const month = new Date(date).getMonth()
  const time = new Date(date).getHours()
  return (
    <CardStyle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="img">
        <div className="date">
          <h3>{date ? `${date[0]}${date[1]}` : ''}</h3>
          <small>{date ? meses[month] : ''}</small>
        </div>
      </div>
      <div className="info">
        <h4 className="container-title">{description}</h4>
        <div className="time">
          <ClockIcon hover={hover} size={30} />
          <h4>{time}:00</h4>
        </div>
        <div className="eventType">
          {local ? (
            <>
              <LocationIcon hover={hover} size={30} />
              <h4>{local}</h4>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </CardStyle>
  )
}

export default CardAgenda
