import Apresentacao from 'Components/Escola/apresentacao/Apresentacao';
import ComoChegar from 'Components/Escola/como-chegar/ComoChegar';
import Docentes from 'Components/Escola/corpo-docente/Docentes';
import CorpoTecnico from 'Components/Escola/corpo-tecnico/CorpoTecnico';
import FormasDeIngresso from 'Components/Escola/formas-de-ingresso/Ingresso';
import SetoresInstancias from 'Components/Escola/setores-e-instancias/Setores';
import { conteudosApresentacao, conteudo, formasIngresso, setores, listaDocentes, corpoTecnico, info } from './mocks';
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

interface IFormasIngresso {
	formas: IFormaIngresso[];
}

interface IConteudo {
	conteudo: string;
	titulo: string;
}

interface IConteudos {
	conteudos: IConteudo[];
}

interface IApresentacaoItem {
	conteudo: string;
	imageAlt: string;
	imageUrl: string;
	titulo: string;
}

interface IApresentacao {
	conteudos: IApresentacaoItem[];
}

export default function Page() {
  return( <div>
    <Apresentacao conteudos={conteudosApresentacao} />
    <FormasDeIngresso conteudos={conteudo.conteudos} formas={formasIngresso.formas}/>
    <SetoresInstancias setores={setores}/>
    <Docentes docentes={listaDocentes} />
    <CorpoTecnico corpoTecnico={corpoTecnico} />
    <ComoChegar email={info.email} endereco={info.endereco} telefone={info.telefone}/>
  </div>)

}
