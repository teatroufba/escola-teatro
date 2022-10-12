/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sort-keys */
import GruposPesquisa from "@/components/EnsinoPesquisa/grupos-pesquisa";
import ProducaoAcademica from "@/components/EnsinoPesquisa/producao-academica";
import styled from "styled-components";

import Graduacao from "@/components/EnsinoPesquisa/graduacao";
import PosGraduacao from "@/components/EnsinoPesquisa/pos-graduacao";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";

const Container = styled.div`
  section {
    display: flex;
    justify-content: center;
  }

  .grey {
    background-color: #f7f6f5;
  }
`;

interface IGraduacao {
  titulo: string,
  duracao: number,
  descricao: string,
  ppp: string,
  matrizCurricular: string,
  ementario: string,
  guiaEstudantil: string,
}

interface IGrupoPesquisa {
  nome: string,
    descricao: string,
    lider: string,
    email: string,
    telefone: string,
    website: string,
}

interface IRevista {
  descricao: string,
  titulo: string,
  imageUrl: string,
  imageAlt: string,
  link: string,
}

interface ILivro {
  link: string,
  titulo: string,
  capaUrl: string,
  capaAlt: string,
  autores: string[]
}

interface IEnsinoProps {
  imageUrl: string,
  imageAlt: string,
  conteudo: string,
  link: string,
  monografia: string,
  espetaculosFormatura: string,
  dissertacoes: string,
  teses: string,
  graduacao: IGraduacao[],
  gruposPesquisa: IGrupoPesquisa[],
  revistas: IRevista[],
  livros: ILivro[],
}

function EnsinoePesquisa({ ensinoProps }: {ensinoProps: IEnsinoProps}) {
  console.log(ensinoProps)

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

export async function getStaticProps({
	previewData,
}: {
	previewData: PreviewData;
}) {
	const client = createClient({ previewData });
	const ensino = await client.getSingle('ensino')

  const graduacao = ensino.data.slices.map((item: any) => ({
    titulo: item.primary.titulo,
    duracao: item.primary.duracao,
    descricao: item.primary.descricao,
    ppp: item.primary.ppp,
    matrizCurricular: item.primary.matrizCurricular,
    ementario: item.primary.ementario,
    guiaEstudantil: item.primary.guiaEstudantil,
  }))

  const gruposPesquisa = ensino.data.slices2.map((item: any) => ({
    nome: item.primary.nome,
    descricao: item.primary.descricao,
    lider: item.primary.lider,
    email: item.primary.email,
    telefone: item.primary.telefone,
    website: item.primary.website,
  }))

  const livrosAuxiliar: any[] = []
	const revistas = ensino.data.slices3.filter((item: any) => {
		if (item.slice_type !== 'revista_ou_publicacao') {
			livrosAuxiliar.push(item)
			return false
		}
		
		return true
	})
	.map((item: any) => ({
		descricao: item.primary.descricao,
		titulo: item.primary.titulo,
    imageUrl: item.primary.image.url,
    imageAlt: item.primary.image.alt,
    link: item.primary.link,
	}))

	const livros = livrosAuxiliar.map((item: any) => ({
		link: item.primary.link,
		titulo: item.primary.titulo,
    capaUrl: item.primary.capa.url,
    capaAlt: item.primary.capa.alt,
    autores: item.items.map((item2: any) => item2.autor)
	}))

	const ensinoProps = {
    imageUrl: ensino.data.image.url,
    imageAlt: ensino.data.image.alt,
    conteudo: ensino.data.conteudo,
    link: ensino.data.link,
    monografia: ensino.data.monografias,
    espetaculosFormatura: ensino.data.espetaculosFormatura,
    dissertacoes: ensino.data.dissertacoes,
    teses: ensino.data.teses,
    graduacao: graduacao,
    gruposPesquisa: gruposPesquisa,
    revistas: revistas,
    livros: livros,
	}
  
	return {
	  props: { ensinoProps },
	};
}
