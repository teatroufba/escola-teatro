import styled from 'styled-components'

import Button from '../button'

const Container = styled.div`
    color: #2D2B78;
    background-color: white;
    font-family: 'Merriweather', serif;
    display: flex;
    gap: 5rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 0;
    }

    .img {
        width: 45%;
        background-color: #D6D6D6;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1500px) {
            width: 50%;
        }

        @media (max-width: 1024px) {
            width: 100vw;
            height: 100vw;
        }
    }

    .graduation {
        text-align: left;
        width: 55%;
        padding: 24px 0;

        @media (max-width: 1500px) {
            width: 50%;
        }

        @media (max-width: 1024px) {
            width: 86.67%;
            margin: auto;
        }

        .content {
            width: 70%;
            display: flex;
            flex-direction: column;
            gap: 3.25rem;

            @media (max-width: 1024px) {
                width: 100%;
                justify-content: center;
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
                        font-weight: 700;
                        font-size: 20px;
                    }
                }
            }

            .info {
                display: flex;
                gap: 1.5rem;
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

function PosGraduacao() {
  return (
    <Container>
        <div className='img'>
            <p>CONTAINER IMAGEM AQUI</p>
        </div>
        <div className='graduation'>
            <h1>Pós-Graduação</h1>
            <div className='content'>
                <div className='courseInfo'>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, proin vitae vel massa varius commodo ultrices. Venenatis venenatis tincidunt vitae blandit eleifend sapien vitae lobortis. Lorem eu pretium a elementum velit sagittis, aliquam. In rhoncus nibh tempus nisl ornare nec scelerisque. Mi, accumsan laoreet quisque laoreet euismod. Porta venenatis vel facilisi enim quis habitasse arcu, ac. Dis consectetur elementum egestas elit enim senectus. Aenean eu ultrices tempor, quis blandit est amet. Sit egestas lacinia turpis consequat elementum. Non volutpat pharetra, gravida enim, ipsum. Tortor vivamus non aliquam neque porttitor congue. Aliquet nunc, enim gravida vitae ut aliquam dolor nulla. Sit eget lectus arcu, quis ac donec nulla metus. Pharetra eget dictum nulla aliquam lectus. Tristique eu facilisis lectus turpis urna egestas turpis et morbi. Vitae, augue mattis tempus vel tincidunt cras pellentesque. Leo elementum tempor euismod ultrices. Habitant et dui scelerisque habitasse ante tempor, felis. Proin nunc sed sit massa. Ultricies eget felis eget est augue at libero. Lacinia vivamus quis aliquam integer odio aliquam ut maecenas. Scelerisque quis vitae felis non amet, venenatis dui. Et magna leo lectus odio arcu pellentesque condimentum amet. Suspendisse cursus neque potenti feugiat quisque.</p>
                        <button>Ver mais</button>
                    </div>
                </div>
                <div className='info'>
                    <Button>Saiba mais</Button >
                </div>
            </div>
        </div>
    </Container>
  )
}

export default PosGraduacao