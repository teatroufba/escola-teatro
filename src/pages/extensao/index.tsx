import ImageContainer from "@/components/basics/image-container";
import styled from "styled-components"

import { PreviewData } from "next";
import { createClient } from "../../../prismic";

const ExtensaoStyled = styled.div`
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 7.875rem;
    width: 100vw;
    max-width: 1920px;

    @media (max-width: 1200px) {
        gap: 1.5rem;
    }
`

function Extensao({ extensao }: any ) {
    console.log(extensao)

    return (
      <ExtensaoStyled>
        {extensao.map((item: any, index: any) => {
            if (item.variation === 'postExtensaoComCatalogo') {
                return <ImageContainer
                    imageOrientation={index % 2 ? 'right' : 'left'}
                    imageUrl={item.items.map((item: any) => (
                        item.imagem.url
                    ))}
                    title={item.primary.titulo}
                    description={item.primary.descricao}
                    link={'Confira o catálogo completo da Cia de Teatro'}
                    button={true}
                    linkButton={item.primary.link}
                    linkHref={item.primary.linkCatalogo}
                    key={index}
                />
            }

            return <ImageContainer
                imageOrientation={index % 2 ? 'right': 'left'}
                imageUrl={item.items.map((item: any) => (
                    item.imagem.url
                ))}
                title={item.primary.titulo}
                description={item.primary.descricao}
                link={''}
                button={true}
                linkButton={item.primary.Link}
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