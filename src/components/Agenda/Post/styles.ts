import styled from "styled-components";

export const StyledPostAgendaMain = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    #container-img-agenda {
        position: relative;
        width: 100%;
        height: 16.0625rem;
        margin-bottom: 2.5rem;
    }

    #container-baixo-agenda {
        font-family: Arial;
        display: flex;
        flex-direction: column;
        padding: 0 1.25rem;

        h1 {
            font-size: 2.25rem;
            margin-bottom: 1.5rem;
        }

        #container-info-agenda {
            background-color: #9A1A4B;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            margin-bottom: 1.5rem;

            div {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                p {
                    font-size: 1rem;
                    color: #EEEDED;
                }
            }
        }

        #conteudo-post-agenda {
            font-size: 1rem;
            margin-bottom: 2.5rem;
            line-height: 1.5rem;
        }
    }
`