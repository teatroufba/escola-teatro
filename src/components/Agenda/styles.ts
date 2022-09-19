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

    @media (min-width: 736px) {
        #container-cards-agenda {
            width: 43.4375rem;
        }
    }

    @media (min-width: 1081px) {
        #agenda-topo {
            padding: 8.75rem 21.375rem;
            margin-bottom: 5rem;

            h1 {
                font-size: 4rem;
            }
        }

        #container-seletores {
            padding: 0;
            margin-bottom: 3.9375rem;

            button:hover {
                transition: transform 0.1s;
                transform: scale(1.03);
            }
        }

        #container-cards-agenda {
            width: 50.9375rem;
            margin-bottom: 5rem;
        }
    }

    @media (min-width: 1276px) {
        #container-cards-agenda {
            width: 77.1875rem;
        }
    }
`

export const StyledAgendaCard = styled.div`
    display: flex;
    background: solid white;
    flex-direction: column;
    border: solid 1px #2D2B784D;
    width: 20.9375rem;

    .container-img {
        width: 100%;
        position: relative;
        height: 15.625rem;
        display: flex;
        align-items: flex-end;

        p {
            font-family: Merriweather;
            background-color: #9A1A4B;
            color: white;
            width: 3.4375rem;
            height: 4.625rem;
            z-index: 1;
            font-size: 1.5rem;
            line-height: 1.25rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.9375rem;

            span {
                font-size: 0.875rem;
                line-height: 1.125rem;
            }
        }
    }

    .container-baixo {
        display: flex;
        flex-direction: column;
        padding: 1.5rem 1.75rem;

        h4 {
            width: 100%;
            display: -webkit-box;
            height: 3.875rem;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            font-family: Merriweather;
            font-weight: 700;
            font-size: 1.25rem;
            color: #9A1A4B;
            line-height: 1.875rem;
            margin-bottom: 0.5rem;
        }

        .container-data {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            align-items: center;

            p {
                font-size: 0.875rem;
                line-height: 1.3125rem;
                font-family: Arial;
            }
        }

        .container-location {
            display: flex;
            margin-bottom: 0.5rem;
            gap: 0.5rem;
            align-items: center;

            p {
                font-size: 0.875rem;
                line-height: 1.3125rem;
                font-family: Arial;
            }
        }

        .conteudo-agenda {
            display: -webkit-box;
            height: 3.875rem;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            font-size: 0.875rem;
            line-height: 1.3125rem;
            margin-bottom: 1rem;
            font-family: Arial;
        }

        a {
            color: #2D2B78;
            font-family: Merriweather;
            font-size: 1rem;
            font-weight: 700;
            line-height: 2.0625rem;
            width: fit-content;
        }
    }
`