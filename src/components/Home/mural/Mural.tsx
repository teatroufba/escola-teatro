/* eslint-disable typescript-sort-keys/interface */
import Image from 'next/image'

import { StyledMural } from './styles'

interface IMural {
  uid: string
  title: string
  imageUrl: string
  imageAlt: string
}

export default function Mural({ mural }: { mural: IMural[] }) {
  
  function textFormater (str: string, numberMax: number) {
		if (str.length > numberMax) {
			return str.slice(0, numberMax) + '...'
		}
		return str
	}

  return (
    <StyledMural>
      <h1>Mural Acadêmico</h1>
      <div className="mural-posts">
        {mural.slice(0, 6).map(value => (
          <div className="mural-card" key={value.uid}>
            <a href={`/publicacoes/${value.uid}`}>
              <figure className="textover">
                {value.imageUrl ? (
                  <div className="img-container">
                     <Image
                      src={value.imageUrl} 
                      alt={value.imageAlt}  
                      width={395}
                      height={210}
                     />
                  </div>
                  
                ) : (
                  ''
                )}
                <figcaption className='text-area'>{textFormater(value.title, 60)}</figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </StyledMural>
  )
}
