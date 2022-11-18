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
  return (
    <StyledMural>
      <h1>Mural Estudantil</h1>
      <div className="mural-posts">
        {mural.slice(0, 6).map(value => (
          <div className="mural-card" key={value.uid}>
            <a href={`/mural/${value.uid}`}>
              <figure className="textover">
                {value.imageUrl ? (
                  <div className="img-container">
                     <Image
                      src={value.imageUrl} 
                      alt={value.imageAlt}  
                      width={306}
                      height={210}
                     />
                  </div>
                  
                ) : (
                  ''
                )}
                <figcaption className='text-area'>{value.title}</figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </StyledMural>
  )
}
