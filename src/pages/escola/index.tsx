import Apresentacao from "@/components/Escola/apresentacao/Apresentacao";
import ComoChegar from "@/components/Escola/como-chegar/ComoChegar";
import Docentes from "@/components/Escola/corpo-docente/Docentes";
import CorpoTecnico from "@/components/Escola/corpo-tecnico/CorpoTecnico";
import FormasDeIngresso from "@/components/Escola/formas-de-ingresso/Ingresso";
import SetoresInstancias from "@/components/Escola/setores-e-instancias/Setores";
import { PreviewData } from "next";
import { createClient } from "../../../prismic";

interface IDocente {
  imagemAlt: string;
  email: string;
  imagemUrl: string;
  interesses: string;
  link: string;
  nome: string;
}

interface ICorpoTecnico {
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
  link: string;
  titulo: string;
}

interface IConteudo {
  conteudo: string;
  titulo: string;
}

interface IApresentacaoItem {
  conteudo: string;
  imageAlt: string;
  imageUrl: string;
  titulo: string;
}

interface IEscolaProps {
	endereco: string
	email: string
	telefone: string
	apresentacao: IApresentacaoItem[],
	ingressoConteudo: IConteudo[],
	ingressoLinks: IFormaIngresso[],
	setores: ISetor[],
	docente: IDocente[],
	corpoTecnico: ICorpoTecnico[],
}

export default function Page({ escolaProps } : {escolaProps: IEscolaProps}) {
  return (
    <>
      <div>
        <Apresentacao conteudos={escolaProps.apresentacao} />
        <FormasDeIngresso
          conteudos={escolaProps.ingressoConteudo}
          formas={escolaProps.ingressoLinks}
        />
        <SetoresInstancias setores={escolaProps.setores} />
        <Docentes docentes={escolaProps.docente} />
        <CorpoTecnico corpoTecnico={escolaProps.corpoTecnico} />
        <ComoChegar
          email={escolaProps.email}
          endereco={escolaProps.endereco}
          telefone={escolaProps.telefone}
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
	const escola = await client.getSingle('escola')
	
	const apresentacao = escola.data.slices.map((item: any) => ({
		conteudo: item.primary.conteudo,
		imageAlt: item.primary.image.alt,
		imageUrl: item.primary.image.url,
		titulo: item.primary.titulo,
	}))

	const ingressoLinksAuxiliar: any[] = []
	const ingressoConteudo = escola.data.slices1.filter((item: any) => {
		if (item.slice_type !== 'conteudo_forma_ingresso') {
			ingressoLinksAuxiliar.push(item)
			return false
		}
		
		return true
	})
	.map((item: any) => ({
		conteudo: item.primary.conteudo,
		titulo: item.primary.titulo,
	}))

	const ingressoLinks = ingressoLinksAuxiliar.map((item: any) => ({
		link: item.primary.link.url,
		titulo: item.primary.titulo,
	}))

	const setores = escola.data.slices2.map((item: any) => ({
		membros: item.items.map((item2: any) => ({
			email: item2.email,
			nome: item2.nome,
			telefone: item2.telefone,
			funcao: item2.funcao,
		})),
		nome: item.primary.nome,
	}))

	const docente = escola.data.slices3.map((item: any) => ({
		imagemAlt: item.primary.image.alt,
		email: item.primary.email,
		imagemUrl: item.primary.image.url,
		interesses: item.primary.interesses,
		link: item.primary.link.url,
		nome: item.primary.nome,
	}))

	const corpoTecnico = escola.data.slices4.map((item: any) => ({
		email: item.primary.email,
		nome: item.primary.nome,
		funcao: item.primary.funcao,
	}))

	console.log(apresentacao)

	const escolaProps = {
		endereco: escola.data.endereco,
		email: escola.data.email,
		telefone: escola.data.telefone,
		apresentacao: apresentacao,
		ingressoConteudo: ingressoConteudo,
		ingressoLinks: ingressoLinks,
		setores: setores,
		docente: docente,
		corpoTecnico: corpoTecnico,
	}
  
	return {
	  props: { escolaProps },
	};
}
