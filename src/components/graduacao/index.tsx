/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: #2D2B78;
    font-family: 'Merriweather', serif;
    padding: 130px 0 80px 0;
    text-align: center;

    @media (max-width: 1024px) {
        width: 86.67%;
        padding: 36px 0;
    }

    h2 {
        font-size: 2rem;
    }

    .graduation {
        text-align: left;
        display: flex;
        justify-content: center;
        width: 65.17vw;
        gap: 1.5rem;

        @media (max-width: 1024px) {
            flex-direction: column;
            width: 100%;
        }

        .menu {
            width: 40%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            @media (max-width: 1024px) {
                width: 100%;
            }

            .courses {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                .card {
                    background-color: #9A1A4B;
                    color: white;
                    padding: 1.5rem;
                    cursor: auto;
                }
                .disable {
                    background-color: #9A1A4B;
                    color: white;
                    padding: 1.5rem;
                    opacity: 0.3;
                    cursor: pointer;
                }
            }
        }

        .content {
            width: 57%;
            display: flex;
            flex-direction: column;
            gap: 3.25rem;

            @media (max-width: 1024px) {
                width: 100%;
            }

            .courseInfo {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                .description {
                    color: #2B2B2B;

                    button {
                        margin-top: 0.5rem;
                        background-color: transparent;
                        cursor: pointer;
                        border: none;
                        text-decoration: underline;
                    }
                }
            }

            .disable {
                display: none;
            }

            .info {
                display: flex;
                gap: 1.5rem;

                @media (max-width: 1024px) {
                    flex-direction: column;
                }

                div {
                    width: calc(25% - 1.125rem);
                    padding: 1rem;
                    border: 1px solid rgba(45, 43, 120, 0.3);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 0.75rem;

                    @media (max-width: 1024px) {
                        width: 100%;
                    }

                    button {
                        color: #2D2B78;
                        padding: 0;
                        margin: 0;
                        background-color: transparent;
                        cursor: pointer;
                        border: none;
                        text-decoration: underline;
                    }

                    p {
                        font-weight: 700;
                    }
                }
            }
        }
    }

    h1 {
        border-bottom: 5px solid #282b62;
        display: inline-block;
        margin-bottom: 3rem;
        font-size: 3rem;
    }
`

function Graduacao() {
  const courses = [
        {
            id: 0,
            name: 'Bacharelado em Artes Cênicas',
            duration: 4,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, proin vitae vel massa varius commodo ultrices. Venenatis venenatis tincidunt vitae blandit eleifend sapien vitae lobortis. Lorem eu pretium a elementum velit sagittis, aliquam. In rhoncus nibh tempus nisl ornare nec scelerisque. Mi, accumsan laoreet quisque laoreet euismod. Porta venenatis vel facilisi enim quis habitasse arcu, ac. Dis consectetur elementum egestas elit enim senectus. Aenean eu ultrices tempor, quis blandit est amet. Sit egestas lacinia turpis consequat elementum. Non volutpat pharetra, gravida enim, ipsum. Tortor vivamus non aliquam neque porttitor congue. Aliquet nunc, enim gravida vitae ut aliquam dolor nulla. Sit eget lectus arcu, quis ac donec nulla metus. Pharetra eget dictum nulla aliquam lectus. Tristique eu facilisis lectus turpis urna egestas turpis et morbi. Vitae, augue mattis tempus vel tincidunt cras pellentesque. Leo elementum tempor euismod ultrices. Habitant et dui scelerisque habitasse ante tempor, felis. Proin nunc sed sit massa. Ultricies eget felis eget est augue at libero. Lacinia vivamus quis aliquam integer odio aliquam ut maecenas. Scelerisque quis vitae felis non amet, venenatis dui. Et magna leo lectus odio arcu pellentesque condimentum amet. Suspendisse cursus neque potenti feugiat quisque.',
        },
        {
            id: 1,
            name: 'Licenciatura em Teatro',
            duration: 4,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, proin vitae vel massa varius commodo ultrices. Venenatis venenatis tincidunt vitae blandit eleifend sapien vitae lobortis. Lorem eu pretium a elementum velit sagittis, aliquam. In rhoncus nibh tempus nisl ornare nec scelerisque. Mi, accumsan laoreet quisque laoreet euismod. Porta venenatis vel facilisi enim quis habitasse arcu, ac. Dis consectetur elementum egestas elit enim senectus. Aenean eu ultrices tempor, quis blandit est amet. Sit egestas lacinia turpis consequat elementum. Non volutpat pharetra, gravida enim, ipsum. Tortor vivamus non aliquam neque porttitor congue. Aliquet nunc, enim gravida vitae ut aliquam dolor nulla. Sit eget lectus arcu, quis ac donec nulla metus. Pharetra eget dictum nulla aliquam lectus. Tristique eu facilisis lectus turpis urna egestas turpis et morbi. Vitae, augue mattis tempus vel tincidunt cras pellentesque. Leo elementum tempor euismod ultrices. Habitant et dui scelerisque habitasse ante tempor, felis. Proin nunc sed sit massa. Ultricies eget felis eget est augue at libero. Lacinia vivamus quis aliquam integer odio aliquam ut maecenas. Scelerisque quis vitae felis non amet, venenatis dui. Et magna leo lectus odio arcu pellentesque condimentum amet. Suspendisse cursus neque potenti feugiat quisque.',
        },
        {
            id: 2,
            name: 'Licenciatura em Teatro - EAD',
            duration: 4,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, proin vitae vel massa varius commodo ultrices. Venenatis venenatis tincidunt vitae blandit eleifend sapien vitae lobortis. Lorem eu pretium a elementum velit sagittis, aliquam. In rhoncus nibh tempus nisl ornare nec scelerisque. Mi, accumsan laoreet quisque laoreet euismod. Porta venenatis vel facilisi enim quis habitasse arcu, ac. Dis consectetur elementum egestas elit enim senectus. Aenean eu ultrices tempor, quis blandit est amet. Sit egestas lacinia turpis consequat elementum. Non volutpat pharetra, gravida enim, ipsum. Tortor vivamus non aliquam neque porttitor congue. Aliquet nunc, enim gravida vitae ut aliquam dolor nulla. Sit eget lectus arcu, quis ac donec nulla metus. Pharetra eget dictum nulla aliquam lectus. Tristique eu facilisis lectus turpis urna egestas turpis et morbi. Vitae, augue mattis tempus vel tincidunt cras pellentesque. Leo elementum tempor euismod ultrices. Habitant et dui scelerisque habitasse ante tempor, felis. Proin nunc sed sit massa. Ultricies eget felis eget est augue at libero. Lacinia vivamus quis aliquam integer odio aliquam ut maecenas. Scelerisque quis vitae felis non amet, venenatis dui. Et magna leo lectus odio arcu pellentesque condimentum amet. Suspendisse cursus neque potenti feugiat quisque.',
        }
  ]
  const [cardSelect, setCardSelect] = useState(0)

  return (
    <Container>
        <h1>Graduação</h1>
        <div className='graduation'>
            <div className='menu'>
                <h2>Nossos Cursos</h2>
                <div className='courses'>
                    {courses
                        .map(value => (
                            <div key={value.id} className={cardSelect === value.id ? 'card' : 'disable'} onClick={() => setCardSelect(value.id)}>
                                <h3>{value.name}</h3>
                                <p>Duração: {value.duration} anos</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='content'>
                {courses
                    .map(value => (
                        <div key={value.id} className={cardSelect === value.id ? 'courseInfo' : 'disable'}>
                            <h2>{value.name}</h2>
                            <div className='description'>
                                <p>{value.desc}</p>
                                <button>Ver mais</button>
                            </div>
                        </div>
                    ))
                }
                <div className='info'>
                    <div>
                        <p>Projeto político Pedagógico</p>
                        <button>Ver mais</button>
                    </div>
                    <div>
                        <p>Matriz Curricular</p>
                        <button>Ver mais</button>
                    </div>
                    <div>
                        <p>Ementário</p>
                        <button>Ver mais</button>
                    </div>
                    <div>
                        <p>Guia Estudantil</p>
                        <button>Ver mais</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Graduacao