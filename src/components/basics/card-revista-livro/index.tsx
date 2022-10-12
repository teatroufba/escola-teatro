/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 395px;
    min-width: 395px;
    height: 400px;
    border: 1px solid rgba(45, 43, 120, 0.3);
    font-family: 'Merriweather';

    @media screen and (max-width: 600px) {
        min-width: 315px;
    }

    .img {
        position: relative;
        height: 42.5%;
        background-color: #F7F6F5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        height: 57.5%;
        padding: 1.5rem 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .info {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            p {
                height: 100%;
                font-size: 1.25rem;
                white-space: nowrap;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #9A1A4B;
            }
            small {
                height: 100%;
                font-family: 'Arial';
                font-size: 0.875rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #000000;
            }
        }

        a {
            width: 55px;
            text-decoration: underline;
            color: #2D2B78;
            cursor: pointer;
            font-weight: 700;
            font-size: 1rem;
        }
    }
`

type CardProps = {
  desc: string,
  img: string,
  link: string,
  title: string,
}

function Card(props: CardProps) {
  const { desc, img, link, title } = props;

  return (
    <Container>
        <div className='img'>
            {/* <Image src={img} alt='' layout='fill' objectFit='cover' objectPosition='center' draggable={false} /> */}
        </div>
        <div className='content'>
            <div className='info'>
                <p>{title}</p>
                <small>{desc}</small>
            </div>
            <Link href={link}>Acesse</Link>
        </div>
    </Container>
  )
}

export default Card
