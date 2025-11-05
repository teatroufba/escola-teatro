import { maxChar } from "@/utils/maxChar";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { ClockIcon, LocationIcon } from "./icons";
import { StyledAgendaCard } from "@/components/Agenda/styles";
import Link from "next/link";

const CardStyle = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 280px;
  max-height: 400px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

    .container-baixo {
      .title {
        color: #9a1a4b;
      }
      .baixo-data,
      .baixo-local {
        color: #9a1a4b;
      }
      .img-icon {
        filter: brightness(0) saturate(100%) invert(14%) sepia(54%)
          saturate(4320%) hue-rotate(321deg) brightness(96%) contrast(92%);
      }
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .container-img {
    width: 100%;
    position: relative;
    height: 200px;
    background-color: #f5f5f5;
    overflow: hidden;

    img {
      object-fit: cover;
    }

    .img-date {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #9a1a4b;
      padding: 12px 16px;
      color: #ffffff;
      font-family: "Merriweather", serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.2;
      z-index: 2;

      span {
        display: block;
        font-size: 14px;
        font-weight: 400;
        margin-top: 2px;
      }
    }
  }

  .container-baixo {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
    background-color: #ffffff;

    .divTitle {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 38px;
    }

    .title {
      font-family: "Merriweather", serif;
      font-weight: 700;
      color: #282b62;
      line-height: 1.3;
      font-size: 16px;
      margin: 0;
      transition: color 0.3s ease;
    }

    .divSubtitle {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }

    .subtitle {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      color: #666;
      line-height: 1.4;
      margin: 0;
    }

    .dataLocation {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: auto;
    }

    .container-data,
    .container-location {
      display: flex;
      align-items: center;
      gap: 8px;

      .img-icon {
        flex-shrink: 0;
        transition: filter 0.3s ease;
      }

      p {
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: #555;
        margin: 0;
        line-height: 1.4;
        transition: color 0.3s ease;
      }
    }

    .baixo-local {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 768px) {
    max-width: 260px;
    min-width: 260px;
    max-height: 380px;

    .container-img {
      height: 160px;
    }

    .container-baixo {
      padding: 14px;

      .divTitle {
        min-height: 36px;
      }

      .title {
        font-size: 15px;
      }

      .subtitle {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 480px) {
    max-width: 240px;
    min-width: 240px;
    max-height: 340px;

    .container-img {
      height: 140px;

      .img-date {
        padding: 8px 12px;
        font-size: 15px;

        span {
          font-size: 11px;
        }
      }
    }

    .container-baixo {
      padding: 12px;
      gap: 10px;

      .divTitle {
        min-height: 34px;
      }

      .title {
        font-size: 14px;
        line-height: 1.2;
      }

      .divSubtitle {
        -webkit-line-clamp: 1;
        max-height: 18px;
      }

      .subtitle {
        font-size: 12px;
      }

      .container-data p,
      .container-location p {
        font-size: 12px;
      }
    }
  }
`;

type CardProps = {
  date: string;
  title: string;
  local: string;
  imageUrl: string;
  imageAlt: string;
  uid: string;
  subtitle: string;
};

function CardAgenda({
  date,
  title,
  local,
  imageUrl,
  imageAlt,
  uid,
  subtitle,
}: CardProps) {
  const meses = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const data = new Date(date);
  let dia = data.getDate().toString();
  let mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  let mesNumero = mes.toString();
  if (dia.length === 1) {
    dia = `0${dia}`;
  }
  if (mesNumero.length === 1) {
    mesNumero = `0${mes}`;
  }

  return (
    <CardStyle>
      <Link href={`/agenda/${uid}`} passHref>
        <a>
          <div className="card">
            <div className="container-img">
              <Image
                src={imageUrl}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
              />
              {date && (
                <p className="img-date">
                  {dia}
                  <span>{meses[mes - 1]}</span>
                </p>
              )}
            </div>
            <div className="container-baixo">
              <div className="divTitle">
                <h4 className="title">{title}</h4>
              </div>
              {subtitle && (
                <div className="divSubtitle">
                  <p className="subtitle">{subtitle}</p>
                </div>
              )}
              <div className="dataLocation">
                {date && (
                  <div className="container-data">
                    <Image
                      className="img-icon"
                      src="/calendar.svg"
                      alt="Ícone de calendário"
                      width={20}
                      height={20}
                    />
                    <p className="baixo-data">{`${dia}/${mesNumero}/${ano}`}</p>
                  </div>
                )}
                {local && (
                  <div className="container-location">
                    <Image
                      className="img-icon"
                      src="/location-azul.svg"
                      alt="Ícone de localização"
                      width={20}
                      height={20}
                    />
                    <p className="baixo-local">{local}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </CardStyle>
  );
}

export default CardAgenda;
