import styled from "styled-components";

export const StyledAgenda = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

    display: flex;
    flex-direction: column;
    align-items: center;

    #agenda-topo {
        display: flex;
        align-items: center;
        padding: 3rem 2.5625rem;
        width: 100%;
        background-color: #9A1A4B;
        margin-bottom: 2.5rem;

        h1 {
            color: #F7F6F5;
            font-size: 2.5rem;
            font-family: Merriweather;
            font-weight: 400;
        }
    }

    #container-seletores {
        display: flex;
        max-width: 100%;
        overflow: auto;
        padding: 0 1.5rem;
        column-gap: 3rem;
        margin-bottom: 1.5rem;
        -ms-overflow-style: none;
        scrollbar-width: none;

        button {
            background: none;
            border: none;
            cursor: pointer;
            color: #757575;
            font-size: 1rem;
            padding: 0 0 0.75rem;
        }

        button.active {
            color: #131313;
            padding: 0 0 0.625rem;
            border: solid #9A1A4B;
            border-width: 0 0 2px 0;
        }
    }

    #container-seletores::-webkit-scrollbar {
        display: none;
    }

    #container-cards-agenda {
        display: flex;
        flex-wrap: wrap;
        width: 20.9375rem;
        margin-bottom: 2.5rem;
        gap: 1.5625rem;
    }
`

export const StyledAgendaCard = styled.div`
    display: none;
`