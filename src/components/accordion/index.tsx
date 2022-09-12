/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import styled from 'styled-components'

import { ArrowIcon } from './icons'

const Container = styled.div`
    width: 64%;
    display: flex;
    flex-direction: column;
    background: #F7F6F5;
    border: 2px solid #E6E6EF;

    @media (max-width: 768px) {
        width: 90%;
    }


    .header {
        padding: 1.5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        align-items: center;

        h3 {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 1.75rem;
            line-height: 120%;
            color: #2D2B78;
            text-align: left;
        }
    }

    .content {
        padding: 1.5rem;
        padding-top: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .contact p {
            font-size: 1rem;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
            text-align: left;

            p {
                font-family: 'Arial';
                font-style: normal;
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 120%;
                color: #2B2B2B;
            }

            h3 {
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 700;
                font-size: 1.5rem;
                line-height: 120%;
                color: #9A1A4B;
            }
        }
    }

    .disable {
        display: none;
    }
    
`

type AccordionProps = {
    name: string;
    desc: string;
    leader: string;
    email: string;
    telephone: string;
    website: string;
}

function GrupoPesquisa(props: AccordionProps) {
  const { name, desc, leader, email, telephone, website } = props;
  const [Open, setOpen] = useState(false);

  return (
    <Container>
        <div className='header' onClick={() => Open ? setOpen(false) : setOpen(true)}>
            <h3>{name}</h3>
            <ArrowIcon open={Open} />
        </div>
        <div className={Open ? 'content' : 'disable'}>
            <div className='desc'>
                <h3>Descrição</h3>
                <p>{desc}</p>
            </div>
            <div className='contact'>
                <h3>Contatos</h3>
                <p>Líder: {leader}</p>
                <p>E-mail: {email}</p>
                <p>Telefone: {telephone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    </Container>
  )
}

export default GrupoPesquisa