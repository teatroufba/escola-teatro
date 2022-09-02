/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import ComoChegar from 'Components/Escola/como-chegar/ComoChegar';
import Docentes from 'Components/Escola/corpo-docente/Docentes';
import CorpoTecnico from 'Components/Escola/corpo-tecnico/CorpoTecnico';
import SetoresInstancias from 'Components/Escola/setores-e-instancias/Setores';

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
  link: 'www.google.com.br',
  name: 'Docente',
  uid: '123'
}

const listaDocentes = [ docente, docente, docente, docente, docente, docente, docente, docente, docente,]


export default function Page({
  docentes,
  informacoes
}: {docentes: IDocente[], informacoes: IInformacoes}) {
  return( <div>
    <SetoresInstancias setores={setores}/>
    <CorpoTecnico corpoTecnico={corpoTecnico} />
    <Docentes docentes={listaDocentes} />
    <ComoChegar email={info.email} endereco={info.address} numero={info.phoneNumber}/>
  </div>)

}
