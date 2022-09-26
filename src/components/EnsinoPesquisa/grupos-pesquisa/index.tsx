/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import styled from 'styled-components'

import GrupoPesquisa from '@/components/basics/accordion'

const Container = styled.div`
  width: 100vw;
  text-align: center;
  padding: 130px 0 80px 0;
  background-color: #F7F6F5;

  @media screen and (max-width: 1024px) {
    padding: 40px 20px 80px 20px;
  }

  .groups {
    width: 1235px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 1400px) {
      width: 815px;
    }

    @media screen and (max-width: 880px) {
      width: calc(100vw - 40px);
    }


  }

  h1 {
    font-family: 'Merriweather';
    color: #2D2B78;
    border-bottom: 5px solid #282b62;
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 3rem;

    @media (max-width: 768px) {
      text-align: left;
    }
  }
`
type AccordionProps = {
    desc: string;
    email: string;
    leader: string;
    name: string;
    telephone: string;
    website: string;
}

function GruposPesquisa() {
    const grupo: AccordionProps = {
        name: 'Nome do grupo de pesquisa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan turpis tellus, massa nam. Euismod convallis vestibulum fringilla mauris cras tellus cras. Aliquet ac orci cum elit in ac pellentesque aliquet massa. Diam parturient laoreet tempus tortor. Suspendisse amet consectetur massa scelerisque convallis interdum. Porta commodo mattis in at fames. Leo, dignissim lacus orci a nunc, nec id ut. Gravida molestie pellentesque commodo lacus laoreet lorem accumsan. Et nunc nec pulvinar libero sit rhoncus. Sed nulla tellus, risus, mauris erat id lectus scelerisque.',
        leader: 'Lorem Ipsum',
        email: 'Lorem Ipsum',
        telephone: 'Lorem Ipsum',
        website: 'Lorem Ipsum',
    }


  return (
    <Container>
        <h1>Grupos de Pesquisa</h1>
        <div className='groups'>
            <GrupoPesquisa desc={grupo.desc} email={grupo.email} leader={grupo.leader} name={grupo.name} telephone={grupo.telephone} website={grupo.website} />
            <GrupoPesquisa desc={grupo.desc} email={grupo.email} leader={grupo.leader} name={grupo.name} telephone={grupo.telephone} website={grupo.website} />
            <GrupoPesquisa desc={grupo.desc} email={grupo.email} leader={grupo.leader} name={grupo.name} telephone={grupo.telephone} website={grupo.website} />
            <GrupoPesquisa desc={grupo.desc} email={grupo.email} leader={grupo.leader} name={grupo.name} telephone={grupo.telephone} website={grupo.website} />
        </div>
    </Container>
  )
}

export default GruposPesquisa
