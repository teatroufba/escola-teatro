import { MenuItem } from "@szhsin/react-menu";
import { useState } from "react";
import AgendaCard from "./AgendaCard";
import { StyledAgenda } from "./styles";

interface IAgenda {
    date: string;
    imageAlt: string;
    imageUrl: string;
    local: string;
    tipo: string;
    title: string;
    uid: string;
}

interface IAgendaMainProps {
    agenda: IAgenda[]
}

export default function AgendaMain({ agenda }: IAgendaMainProps) {
    const [Categoria, setCategoria] = useState<string>('Todos')

    return (
        <StyledAgenda>
            <div id="agenda-topo">
                <h1>Agenda</h1>
            </div>
            <div id="container-seletores">
                <button className={Categoria === 'Todos' ? 'active' : ''} onClick={() => {
                    setCategoria('Todos')
                }}>
                    Todos
                </button>
                <button className={Categoria === 'Eventos' ? 'active' : ''} onClick={() => {
                    setCategoria('Eventos')
                }}>
                    Eventos
                </button>
                <button className={Categoria === 'Espetáculos' ? 'active' : ''} onClick={() => {
                    setCategoria('Espetáculos')
                }}>
                    Espetáculos
                </button>
                <button className={Categoria === 'Defesas' ? 'active' : ''} onClick={() => {
                    setCategoria('Defesas')
                }}>
                    Defesas
                </button>
                <button className={Categoria === 'Formações' ? 'active' : ''} onClick={() => {
                    setCategoria('Formações')
                }}>
                    Formações
                </button>
                <button className={Categoria === 'Outros' ? 'active' : ''} onClick={() => {
                    setCategoria('Outros')
                }}>
                    Outros
                </button>
            </div>
            <div id="container-cards-agenda">
                {agenda.filter(item => {
                    if (Categoria === 'Todos') {
                        return true
                    }

                    return item.tipo === Categoria
                }).map((item, index) => (
                    <AgendaCard key={`agenda-card-${index}`} uid={item.uid} imageUrl={item.imageUrl} imageAlt={item.imageAlt} title={item.title} date={item.date} local={item.local} tipo={item.tipo}/>
                ))}
            </div>
        </StyledAgenda>
    )
}