/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import ComoChegar from 'Components/Escola/como-chegar/ComoChegar';
import Docentes from 'Components/Escola/corpo-docente/Docentes';
import CorpoTecnico from 'Components/Escola/corpo-tecnico/CorpoTecnico';
import { PreviewData } from 'next'

import { createClient } from '../../../prismic'

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

export async function getStaticProps({
  previewData,
}: {
  previewData: PreviewData
}) {
  const client = createClient({ previewData });
  const items = await client.getAllByType('card-docente');

  const docentes: IDocente[] = items.map(item => ({
      name: item.data.name, 
      email: item.data.email,
      link: item.data.link,
      interests: item.data.interests,
      imageUrl: item.data.image.url,
      altImage: item.data.image.alt,
      uid: item.uid || ''
    }))

  const info = await client.getAllByType('como-chegar');

  let informacoes: IInformacoes[] = info.map(item => ({
      address: item.data.address,
      email: item.data.email,
      phoneNumber: item.data.phone,
      uid: item.uid || ''
    }));

  informacoes = informacoes.slice(0, 1);

  return {
    props: { docentes, informacoes },
  }
}

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

export default function Page({
  docentes,
  informacoes
}: {docentes: IDocente[], informacoes: IInformacoes}) {
  return( <div>
    <CorpoTecnico corpoTecnico={corpoTecnico} />
    <Docentes docentes={docentes} />
    <ComoChegar email={info.email} endereco={info.address} numero={info.phoneNumber}/>
  </div>)

}
