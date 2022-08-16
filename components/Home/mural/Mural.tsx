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
          <div className="mural-card">
            <a href={`/mural/${value.uid}`}>
              <figure className="textover">
                {value.imageUrl ? (
                  <Image
                    src={value.imageUrl}
                    width={380}
                    height={270}
                    alt={value.imageAlt}
                  />
                ) : (
                  ''
                )}
                <figcaption>{value.title}</figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </StyledMural>
  )
}
