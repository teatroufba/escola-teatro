import styled from 'styled-components'

import Graduacao from '@/components/graduacao'

const Container = styled.div`
    display: flex;
    justify-content: center;
`

function EnsinoePesquisa() {
  return (
    <Container>
      <Graduacao />
    </Container>
  )
}

export default EnsinoePesquisa