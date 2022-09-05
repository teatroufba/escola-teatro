/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Apresentacao from 'Components/Escola/apresentacao/Apresentacao';
import ComoChegar from 'Components/Escola/como-chegar/ComoChegar';
import Docentes from 'Components/Escola/corpo-docente/Docentes';
import CorpoTecnico from 'Components/Escola/corpo-tecnico/CorpoTecnico';
import FormasDeIngresso from 'Components/Escola/formas-de-ingresso/Ingresso';
import SetoresInstancias from 'Components/Escola/setores-e-instancias/Setores';

const conteudoLongo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.'.repeat(2);
const conteudoCurto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a.';


interface IDocente {
  altImage: string,
  email: string,
  imageUrl: string,
  interests: string,
  link: string,
  name: string,
  uid: string
}

interface IInformacoes {
  address: string,
  email: string,
  phoneNumber: string,
  uid: string
}

interface ICorpoTecnico {
  email: string, 
  name: string,
  role: string
}

interface IMembro {
  email: string,
  name: string,
  phone: string,
  role: string
}

interface ISetor {
  membros: IMembro[]; 
}

interface ISetor {
  membros: IMembro[];
  nome: string 
}
interface IFormaIngresso {
  link: string,
  titulo: string
}

interface IFormasIngresso {
  formas: IFormaIngresso[];
}

interface IConteudo {
  conteudo: string,
  titulo: string
}

interface IConteudos {
  conteudos: IConteudo[], 
}

interface IApresentacaoItem {
  conteudo: string,
  imageAlt: string,
  imageUrl: string,
  titulo: string
}

interface IApresentacao {
  conteudos: IApresentacaoItem[]
}

const apresentacaoItem1 = {
  conteudo: conteudoLongo,
  imageAlt: 'mulher sorrindo',
  imageUrl: 'https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  titulo: 'Pagina 01',
}
const apresentacaoItem2 = {
  conteudo: conteudoLongo,
  imageAlt: 'mulher sorrindo',
  imageUrl: 'https://images.pexels.com/photos/13187759/pexels-photo-13187759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  titulo: 'Pagina 02',
}
const apresentacaoItem3 = {
  conteudo: conteudoCurto,
  imageAlt: 'mulher sorrindo',
  imageUrl: 'https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  titulo: 'Pagina 03',
}

const conteudosApresentacao = [apresentacaoItem1, apresentacaoItem2, apresentacaoItem3];

const formaIngresso1: IFormaIngresso = {
  link: 'https://ingresso.ufba.br/',
  titulo: 'Ingresso UFBA'
}
const formaIngresso2: IFormaIngresso = {
  link: 'https://ingresso.ufba.br/vagas-residuais',
  titulo: 'Vagas Residuais UFBA'
}
const formaIngresso3: IFormaIngresso = {
  link: 'http://www.ppgac.tea.ufba.br/pt/home/',
  titulo: 'PPGAC-UFBA'
}
const formaIngresso4: IFormaIngresso = {
  link: 'https://ingresso.ufba.br/egressos-bi',
  titulo: 'Engressos do B.I.'
}

const conteudo1: IConteudo = {
  conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.'.repeat(2),
  titulo: 'Pagina 01'
}
const conteudo2: IConteudo = {
  conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.',
  titulo: 'Pagina 02'
}
const conteudo3: IConteudo = {
  conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet, eget facilisis enim, felis pellentesque. Mus risus, varius in tincidunt varius pretium non egestas. Odio placerat diam fringilla ultricies. Dolor eget hendrerit donec ipsum convallis pretium, neque nisi.Porta placerat id sit quis diam augue. Nibh purus morbi nec tortor. Pharetra phasellus consequat, turpis enim amet, etiam. Aliquam orci mauris quis amet fermentum. At in orci a molestie. Sit vitae, egestas pellentesque a. Mauris scelerisque adipiscing tellus velit mauris placerat pellentesque a. Nibh sodales amet faucibus quam nulla mauris.',
  titulo: 'Pagina 03'
}

const formasIngresso: IFormasIngresso = { formas: [formaIngresso1, formaIngresso2, formaIngresso3, formaIngresso4]};
const conteudo: IConteudos = { conteudos: [conteudo1, conteudo2, conteudo3]};

const membro1: IMembro = {
  name: 'Membro do setor',
  email: 'email@ufba.br',
  role: 'administrativo-financeiro',
  phone: '(71) 99999-9999'
}

const membro2: IMembro = {
  name: 'Membro de outro setor',
  email: 'email@ufba.br',
  role: 'operacional',
  phone: '(71) 99999-9999'
}

const setor1: ISetor = { nome:'Administrativo-Financeiro', membros: [membro1, membro1, membro1, membro1]};
const setor2: ISetor = { nome:'Operacional', membros: [membro2, membro2, membro2, membro2]};

const setores= [setor1, setor2, setor1, setor2];


const info = {
  address: 'Av. Araújo Pinho, 292 - Canela, Salvador - BA, 40110-150', 
  email: 'email@ufba.br',
  phoneNumber: '71 1234-1234'
}

const funcionario : ICorpoTecnico = {
  name: 'Funcionario',
  role: 'Administrativo',
  email: 'ufba@ufba.com.br'
}
const corpoTecnico: ICorpoTecnico[] = [funcionario, funcionario, funcionario, funcionario, funcionario, funcionario, funcionario];


const docente = {
  altImage: 'foto do docente',
  email: 'ufba@ufba.com.br',
  imageUrl: 'https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  interests: 'lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum ',
  link: 'https://www.google.com.br',
  name: 'Docente de nome gigantesco',
  uid: '123'
}

const listaDocentes = [ docente, docente, docente, docente, docente, docente, docente, docente, docente,]


export default function Page({
  docentes,
  informacoes
}: {docentes: IDocente[], informacoes: IInformacoes}) {
  return( <div>
    <Apresentacao conteudos={conteudosApresentacao} />
    <FormasDeIngresso conteudos={conteudo.conteudos} formas={formasIngresso.formas}/>
    <SetoresInstancias setores={setores}/>
    <Docentes docentes={listaDocentes} />
    <CorpoTecnico corpoTecnico={corpoTecnico} />
    <ComoChegar email={info.email} endereco={info.address} numero={info.phoneNumber}/>
  </div>)

}
