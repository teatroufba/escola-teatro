import ImageContainer from "@/components/basics/image-container";
import styled from "styled-components"

import { PreviewData } from "next";
import { createClient } from "../../../prismic";

const EspacosStyled = styled.div`
    padding: 0 0 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 7.875rem;
    width: 100vw;
    max-width: 1920px;

    @media (max-width: 1200px) {
        gap: 1.5rem;
    }
`

function Espacos({ espacos }: any) {
    console.log(espacos)

    return (
      <EspacosStyled>
            <ImageContainer
                style={'red'}
                imageOrientation={'left'}
                imageUrl={[espacos.imagemBanner.url, espacos.imagem2.url]}
                title={espacos.tituloBanner}
                description={espacos.descricaoBanner}
                link={''}
                button={false}
                linkButton={''}
                linkHref={''}
                cards={espacos.links.map((item: any) => (
                    {
                        title: item.nomeLink,
                        link: item.link ? item.link : ''
                    }
                ))}
            />
        {espacos.slices.map((item: any, index: number) => (
            <ImageContainer
                imageOrientation={index % 2 ? 'left' : 'right'}
                imageUrl={[item.primary.imagem.url, item.primary.imagem2.url]}
                title={item.primary.titulo}
                description={item.primary.descricao}
                link={''}
                button={false}
                linkButton={''}
                linkHref={''}
                cards={item.items.map((item: any) => (
                    {
                        title: item.nomeLink,
                        link: item.link ? item.link : ''
                    }
                ))}
                key={index}
            />
        ))}
      </EspacosStyled>
    );
}

export async function getStaticProps({
    previewData,
  }: {
    previewData: PreviewData;
  }) {
    const client = createClient({ previewData });
    const item = await client.getSingle('espacos')

    const espacos = item.data
  
    return {
      props: { espacos },
    };
  }

export default Espacos;