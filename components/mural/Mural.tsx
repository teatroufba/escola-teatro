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
            <Image
              src={value.imageUrl}
              width={390}
              height={210}
              alt={value.imageAlt}
            />
            <title>{value.title}</title>
          </div>
        ))}
      </div>
    </StyledMural>
  )
}
