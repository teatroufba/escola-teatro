import { useState } from "react";
import AgendaCard from "./AgendaCard";
import { StyledAgenda } from "./styles";

export interface IAgenda {
  date: string;
  imageAlt: string;
  imageUrl: string;
  miniaturaUrl: string;
  miniaturaAlt: string;
  local: string;
  tipo: string;
  title: string;
  uid: string;
  subtitulo: string;
  descricao: string;
}

export interface IAgendaMainProps {
  agenda: IAgenda[];
}

export default function AgendaMain({ agenda }: IAgendaMainProps) {
  const [Categoria, setCategoria] = useState<string>("Todos");

  const agendaOrdenada = [...agenda].sort((a, b) => {
    const timestamp = (date: string) => new Date(date).getTime();
    return timestamp(b.date) - timestamp(a.date);
  });

  return (
    <StyledAgenda>
      <div id="agenda-topo">
        <h1>Agenda</h1>
      </div>
      <div id="container-seletores">
        <button
          className={Categoria === "Todos" ? "active" : ""}
          onClick={() => {
            setCategoria("Todos");
          }}
        >
          Todos
        </button>
        <button
          className={Categoria === "Eventos" ? "active" : ""}
          onClick={() => {
            setCategoria("Eventos");
          }}
        >
          Eventos
        </button>
        <button
          className={Categoria === "Espetáculos" ? "active" : ""}
          onClick={() => {
            setCategoria("Espetáculos");
          }}
        >
          Espetáculos
        </button>
        <button
          className={Categoria === "Defesas" ? "active" : ""}
          onClick={() => {
            setCategoria("Defesas");
          }}
        >
          Defesas
        </button>
        <button
          className={Categoria === "Formações" ? "active" : ""}
          onClick={() => {
            setCategoria("Formações");
          }}
        >
          Formações
        </button>
        <button
          className={Categoria === "Outros" ? "active" : ""}
          onClick={() => {
            setCategoria("Outros");
          }}
        >
          Outros
        </button>
      </div>
      <div id="container-cards-agenda">
        {agendaOrdenada
          .filter((item) => {
            if (Categoria === "Todos") {
              return true;
            }

            return item.tipo.includes(Categoria);
          })
          .map((item, index) => (
            <AgendaCard
              key={`agenda-card-${index}`}
              subtitulo={item.subtitulo}
              uid={item.uid}
              imageUrl={item.miniaturaUrl ? item.miniaturaUrl : "/"}
              imageAlt={item.miniaturaUrl ? item.miniaturaAlt : "/"}
              title={item.title}
              date={item.date}
              local={item.local}
              tipo={item.tipo ? item.tipo : "/"}
            />
          ))}
      </div>
    </StyledAgenda>
  );
}
