/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Docentes from 'Components/Escola/corpo-docente/Docentes';
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

  return {
    props: { docentes },
  }
}

export default function Page({
  docentes,
}: {docentes: IDocente[]}) {
  return( <div>
    <Docentes docentes={docentes} />
  </div>)

}
