import ImageContainer from "@/components/basics/image-container";
import styled from "styled-components"

import { PreviewData } from "next";
import { createClient } from "../../../prismic";

const ExtensaoStyled = styled.div`
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 7.875rem;
    overflow: hidden;

    @media (max-width: 1200px) {
        gap: 1.5rem;
    }
`

function Extensao({ extensao }: any ) {

    return (
      <ExtensaoStyled>
        {extensao.map((item: any, index: any) => {
            if (item.variation === 'postExtensaoComCatalogo') {
                return <ImageContainer
                    imageOrientation={index % 2 ? 'right' : 'left'}
                    imageUrl={item.items.map((item: any) => (
                        item.imagem.url
                    ))}
                    title={item.primary.titulo? item.primary.titulo : "vazio" }
                    description={item.primary.descricao? item.primary.descricao : "vazio" }
                    link={'Confira o catálogo completo da Cia de Teatro'}
                    button={true}
                    linkButton={item.primary.link? item.primary.link : "/"}
                    linkHref={item.primary.linkCatalogo? item.primary.linkCatalogo : "/" }
                    key={index}
                />
            }

            return <ImageContainer
                imageOrientation={index % 2 ? 'right': 'left'}
                imageUrl={item.items.map((item: any) => (
                    item.imagem.url
                ))}
                title={item.primary.titulo? item.primary.titulo : "vazio"}
                description={item.primary.descricao? item.primary.descricao : "vazio"}
                link={''}
                button={true}
                linkButton={item.primary.Link? item.primary.Link : "/"}
                linkHref={''}
                key={index}
            />
        })}
      </ExtensaoStyled>
    );
}

export async function getStaticProps({
    previewData,
  }: {
    previewData: PreviewData;
  }) {
    const client = createClient({ previewData });
    const item = await client.getSingle('extensao')

    const extensao = item.data.slices
  
    return {
      props: { extensao },
    };
  }

export default Extensao;