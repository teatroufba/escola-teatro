import Apresentacao from "@/components/Escola/apresentacao/Apresentacao";
import ComoChegar from "@/components/Escola/como-chegar/ComoChegar";
import Docentes from "@/components/Escola/corpo-docente/Docentes";
import CorpoTecnico from "@/components/Escola/corpo-tecnico/CorpoTecnico";
import FormasDeIngresso from "@/components/Escola/formas-de-ingresso/Ingresso";
import SetoresInstancias from "@/components/Escola/setores-e-instancias/Setores";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";
import {
  conteudosApresentacao,
  conteudo,
  formasIngresso,
  setores,
  listaDocentes,
  corpoTecnico,
  info,
} from "../../components/Escola/mocks";
interface IDocente {
  imagemAlt: string;
  email: string;
  imagemUrl: string;
  interesses: string;
  link: string;
  nome: string;
  uid: string;
}

interface IInformacoes {
  endereco: string;
  email: string;
  telefone: string;
  uid: string;
}

interface ICorpoTecnico {
  uid: string;
  email: string;
  nome: string;
  funcao: string;
}

interface IMembro {
  email: string;
  nome: string;
  telefone: string;
  funcao: string;
}
interface ISetor {
  membros: IMembro[];
  nome: string;
}
interface IFormaIngresso {
  uid: string;
  link: string;
  titulo: string;
}

interface IFormasIngresso {
  formas: IFormaIngresso[];
}

interface IConteudo {
  uid: string;
  conteudo: string;
  titulo: string;
}

interface IConteudos {
  conteudos: IConteudo[];
}

interface IApresentacaoItem {
  uid: string;
  conteudo: string;
  imageAlt: string;
  imageUrl: string;
  titulo: string;
}

interface IApresentacao {
  conteudos: IApresentacaoItem[];
}

export default function Page({agenda}: any) {
	console.log(agenda)

  return (
    <>
      <div>
        <Apresentacao conteudos={conteudosApresentacao} />
        <FormasDeIngresso
          conteudos={conteudo.conteudos}
          formas={formasIngresso.formas}
        />
        <SetoresInstancias setores={setores} />
        <Docentes docentes={listaDocentes} />
        <CorpoTecnico corpoTecnico={corpoTecnico} />
        <ComoChegar
          email={info.email}
          endereco={info.endereco}
          telefone={info.telefone}
        />
      </div>
    </>
  );
}

export async function getStaticProps({
	previewData,
  }: {
	previewData: PreviewData;
  }) {
	const client = createClient({ previewData });
	const item = await client.getSingle('escola')
  
	const agenda = item
  
	return {
	  props: { agenda },
	};
  }
