import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { StyledPostAgendaMain } from "./styles";

interface IAgenda {
  date: string;
  imageAlt: string;
  imageUrl: string;
  local: string;
  title: string;
  text: [];
}

enum meses {
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
}

enum semana {
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
}

export default function PostAgendaMain({
  date,
  imageAlt,
  imageUrl,
  local,
  title,
  text,
}: IAgenda) {
  const data = new Date(date);
  const diaSemana = data.getDay();
  let dia = data.getDate().toString();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  let horas = data.getHours().toString();
  let minutos = data.getMinutes().toString();

  if (dia.length === 1) {
    dia = `0${dia}`;
  }

  if (horas.length === 1) {
    horas = `0${horas}`;
  }

  if (minutos.length === 1) {
    minutos = `0${minutos}`;
  }

  return (
    <StyledPostAgendaMain>
      <div id="container-img-agenda">
        <Image
          src={imageUrl ? imageUrl : '/'}
          alt={imageAlt ? imageAlt : '/'}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div id="container-baixo-agenda">
        <h1>{title}</h1>
        <div id="container-info-agenda">
          <div id="container-data-agenda">
            <Image src="/calendar-branco.svg" alt="" width={24} height={24} />
            <p>{`${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}`}</p>
          </div>
          <div id="container-local-agenda">
            <Image src="/location-branco.svg" alt="" width={24} height={24} />
            <p>{local}</p>
          </div>
          <div id="container-horario-agenda">
            <Image src="/timer.svg" alt="" width={24} height={24} />
            <p>{`${horas}:${minutos}`}</p>
          </div>
        </div>
        <div id="conteudo-post-agenda">
          <PrismicRichText
            field={text}
            components={{
              paragraph: ({ children }) => <p className="">{children}</p>,
            }}
          />
        </div>
      </div>
    </StyledPostAgendaMain>
  );
}
