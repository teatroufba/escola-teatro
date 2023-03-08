import Apresentacao from "@/components/Escola/apresentacao/Apresentacao";
import BannerApresentacao from "@/components/Escola/banner-apresentacao";
import image from "@/public/novoBrasaoHandler.png";
import ComoChegar from "@/components/Escola/como-chegar/ComoChegar";
import Docentes from "@/components/Escola/corpo-docente/Docentes";
import CorpoTecnico from "@/components/Escola/corpo-tecnico/CorpoTecnico";
import SetoresInstancias from "@/components/Escola/setores-e-instancias/Setores";
import { maxChar } from "@/utils/maxChar";
import undefinedCheck from "@/utils/undefinedCheck";
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

interface IApresentacaoItem {
	conteudo: [];
	imageAlt: string;
	imageUrl: string;
	titulo: string;
}

interface IEscolaProps {
	endereco: string;
	email: string;
	telefone: string;
	apresentacao: IApresentacaoItem[];
	setores: ISetor[];
	docente: IDocente[];
	corpoTecnico: ICorpoTecnico[];
}

export default function Page({ escolaProps }: { escolaProps: IEscolaProps }) {
	return (
		<>
			<div>
				<BannerApresentacao conteudos={escolaProps.apresentacao} />
				{/* <Apresentacao conteudos={escolaProps.apresentacao} /> */}
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
	const escola = await client.getSingle("escola");

	const apresentacao = escola.data.slices.map((item: any) => ({
		conteudo: item.primary.conteudo ? item.primary.conteudo : '' ,
		imageAlt: item.primary.image.alt ? item.primary.image.alt : image,
		imageUrl: item.primary.image.url ? item.primary.image.url : image ,
		titulo: item.primary.titulo ? item.primary.titulo : '',
	}));

	const apresentacaoChecked = undefinedCheck(apresentacao);

	const setores = escola.data.slices2.map((item: any) => ({
		membros: item.items.map((item2: any) => ({
			email: item2.email,
			nome: item2.nome,
			telefone: item2.telefone,
			funcao: item2.funcao,
		})),
		nome: item.primary.nome,
	}));

	const setoresChecked = undefinedCheck(setores);

	const docente = escola.data.slices3.map((item: any) => ({
		imagemAlt: item.primary.image.alt ? item.primary.image.alt : image,
		email: item.primary.email,
		imagemUrl: item.primary.image.url ? item.primary.image.url : image,
		interesses: item.primary.interesses
			? maxChar(item.primary.interesses, 150)
			: "",
		link: item.primary.link.url,
		nome: item.primary.nome,
	}));

	const docenteChecked = undefinedCheck(docente);

	const corpoTecnico = escola.data.slices4.map((item: any) => ({
		email: item.primary.email,
		nome: item.primary.nome,
		funcao: item.primary.funcao,
	}));

	const corpoTecnicoChecked = undefinedCheck(corpoTecnico);

	//console.log(apresentacao)

	const escolaProps = {
		endereco: escola.data.endereco
			? escola.data.endereco
			: "Endereço não informado",
		email: escola.data.email ? escola.data.email : "Email não informado",
		telefone: escola.data.telefone
			? escola.data.telefone
			: "Telefone não informado",
		apresentacao: apresentacaoChecked,
		setores: setoresChecked,
		docente: docenteChecked,
		corpoTecnico: corpoTecnicoChecked,
	};

	return {
		props: { escolaProps },
	};
}
