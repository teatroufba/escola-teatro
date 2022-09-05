/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import GruposPesquisa from 'Components/ensiono-e-escola/grupos-pesquisa'
import ProducaoAcademica from 'Components/ensiono-e-escola/producao-academica'
import styled from 'styled-components'

import Graduacao from '@/components/graduacao'
import PosGraduacao from '@/components/pos-graduacao'

const Container = styled.div`
  section {
    display: flex;
    justify-content: center;
  }

  .grey {
    background-color: #F7F6F5;
  }
`

function EnsinoePesquisa() {
  return (
    <Container>
      <section className='grey'>
        <Graduacao />
      </section>
      <section>
        <PosGraduacao />
      </section>
      <section className='grey'>
        <GruposPesquisa />
      </section>
      <section>
        <ProducaoAcademica />
      </section>
    </Container>
  )
}

export default EnsinoePesquisa