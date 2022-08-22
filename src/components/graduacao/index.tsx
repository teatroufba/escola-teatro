import styled from 'styled-components'

const Container = styled.div`
    color: #2D2B78;
    font-family: 'Merriweather', serif;
    padding: 130px 0 80px 0;
    text-align: center;

    .graduation {
        text-align: left;
        display: flex;
        justify-content: center;
        width: 65.17vw;
        gap: 1.5rem;

        .menu {
            width: 40%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .courses {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                .card {
                    background-color: #9A1A4B;
                    color: white;
                    padding: 1.5rem;
                }
            }
        }

        .content {
            width: 57%;
            display: flex;
            flex-direction: column;
            gap: 3.25rem;

            .courseInfo {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                .description {
                    color: #2B2B2B;
                }
            }

            .info {
                display: flex;
                gap: 1.5rem;

                div {
                    width: calc(25% - 1.125rem);
                }
            }
        }
    }

    h1 {
        border-bottom: 5px solid #282b62;
        display: inline-block;
        margin-bottom: 3rem;
    }
`

function Graduacao() {
  return (
    <Container>
        <h1>Graduação</h1>
        <div className='graduation'>
            <div className='menu'>
                <h2>Nossos Cursos</h2>
                <div className='courses'>
                    <div className='card'>
                        <h3>Bacharelado em Artes Cênicas</h3>
                        <p>Duração: 4 anos</p>
                    </div>
                    <div className='card'>
                        <h3>Licenciatura em Teatro</h3>
                        <p>Duração: 4 anos</p>
                    </div>
                    <div className='card'>
                        <h3>Licenciatura em Teatro - EAD</h3>
                        <p>Duração: 4 anos</p>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='courseInfo'>
                    <h2>Bacharelado em Artes Cênicas</h2>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, proin vitae vel massa varius commodo ultrices. Venenatis venenatis tincidunt vitae blandit eleifend sapien vitae lobortis. Lorem eu pretium a elementum velit sagittis, aliquam. In rhoncus nibh tempus nisl ornare nec scelerisque. Mi, accumsan laoreet quisque laoreet euismod. Porta venenatis vel facilisi enim quis habitasse arcu, ac. Dis consectetur elementum egestas elit enim senectus. Aenean eu ultrices tempor, quis blandit est amet. Sit egestas lacinia turpis consequat elementum. Non volutpat pharetra, gravida enim, ipsum. Tortor vivamus non aliquam neque porttitor congue. Aliquet nunc, enim gravida vitae ut aliquam dolor nulla. Sit eget lectus arcu, quis ac donec nulla metus. Pharetra eget dictum nulla aliquam lectus. Tristique eu facilisis lectus turpis urna egestas turpis et morbi. Vitae, augue mattis tempus vel tincidunt cras pellentesque. Leo elementum tempor euismod ultrices. Habitant et dui scelerisque habitasse ante tempor, felis. Proin nunc sed sit massa. Ultricies eget felis eget est augue at libero. Lacinia vivamus quis aliquam integer odio aliquam ut maecenas. Scelerisque quis vitae felis non amet, venenatis dui. Et magna leo lectus odio arcu pellentesque condimentum amet. Suspendisse cursus neque potenti feugiat quisque.</p>
                        <button>Ver mais</button>
                    </div>
                </div>
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