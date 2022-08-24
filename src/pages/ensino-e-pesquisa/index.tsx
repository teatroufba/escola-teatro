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
    </Container>
  )
}

export default EnsinoePesquisa