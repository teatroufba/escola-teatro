import { useState } from "react";
import AgendaCard from "./AgendaCard";
import { StyledAgenda } from "./styles";

export default function AgendaMain() {
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
                <AgendaCard />
            </div>
        </StyledAgenda>
    )
}