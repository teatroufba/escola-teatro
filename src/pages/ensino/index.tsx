/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import GruposPesquisa from "@/components/EnsinoPesquisa/grupos-pesquisa";
import ProducaoAcademica from "@/components/EnsinoPesquisa/producao-academica";
import styled from "styled-components";

import Graduacao from "@/components/EnsinoPesquisa/graduacao";
import PosGraduacao from "@/components/EnsinoPesquisa/pos-graduacao";

const Container = styled.div`
  section {
    display: flex;
    justify-content: center;
  }

  .grey {
    background-color: #f7f6f5;
  }
`;

function EnsinoePesquisa() {
  return (
    <>
      <Container>
        <section className="grey">
          <Graduacao />
        </section>
        <section>
          <PosGraduacao />
        </section>
        <section className="grey">
          <GruposPesquisa />
        </section>
        <section>
          <ProducaoAcademica />
        </section>
      </Container>
    </>
  );
}

export default EnsinoePesquisa;
