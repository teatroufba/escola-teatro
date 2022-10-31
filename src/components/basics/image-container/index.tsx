import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Button from './../button'

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    gap: 5rem;

    &.left {
        justify-content: left;
    }

    &.right {
        justify-content: right;
        flex-direction: row-reverse;
    }

    &.red {
        background-color: #9A1A4B;
        color: white;

        .content {
            h1 {
                color: white;
                border-bottom: 5px solid white;
            }

            .text .cards .card {
                border: 2px solid white;
                background: rgba(255, 255, 255, 0.08);

                p {
                    color: white;
                }

                small {
                    color: white;
                    text-decoration: underline;
                    text-decoration-color: white;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 1.5rem;

        &.right {
            flex-direction: column;
        }
    }

    .carousel {
        width: calc(40vw - 40px);
        height: calc(40vw - 40px);

        @media (max-width: 1200px) {
            width: 660px;
            height: 660px;
        }

        @media (max-width: 768px) {
            width: 100vw;
            height: 100vw;
        }

        .img {
            width: 100%;
            display: block;
        }

        .imgDesactive {
            display: none;
        }

        .controls {
            position: relative;
            top: -50%;
            width: 100%;
            display: flex;
            padding: 0 30px;
            justify-content: space-between;

            button {
                width: 40px;
                height: 40px;
                background-color: #9a1a4b;
                border: none;
                border-radius: 5px;
                cursor: pointer;

                &.desactive {
                    background-color: #958fa0;
                }
            }
        }
    }

    .content {
        max-width: 82vw;
        padding: 1.5rem 0;

        @media (max-width: 768px) {
            width: 100vw;
            max-width: 100vw;
            padding: 1.5rem 1.25rem;
        }

        h1 {
            font-family: 'Merriweather';
            font-style: normal;
            display: inline-block;
            font-weight: 400;
            font-size: 3rem;
            color: #2D2B78;
            border-bottom: 5px solid #2D2B78;
            margin-bottom: 3rem;

            @media (max-width: 768px) {
                font-size: 2.25rem;
                max-width: 325px;
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            @media (max-width: 768px) {
                gap: 1.5rem;
            }

            h4 {
                font-family: 'Arial';
                font-style: normal;
                font-weight: 400;
                font-size: 1.125rem;
                max-width: 660px;

                @media (max-width: 768px) {
                    max-width: 100%;
                    font-size: 0.875rem;
                }
            }

            p {
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 700;
                font-size: 1.25rem;
                text-decoration-line: underline;
                color: #2B2B2B;

                @media (max-width: 768px) {
                    font-size: 1.125rem;
                }
            }

            .cards {
                display: flex;
                flex-direction: row;
                gap: 1.5rem;

                @media (max-width: 768px) {
                    flex-direction: column;
                    width: 100%;
                    gap: 0.75rem;
                }

                .card {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    justify-content: space-between;
                    border: 2px solid rgba(154, 26, 75, 0.6);
                    padding: 1rem;


                    p {
                        width: 103px;
                        font-size: 1rem;
                        font-family: 'Arial';
                        text-decoration: none;
                        color: #2D2B78;

                        @media (max-width: 768px) {
                            width: 100%;
                        }
                    }

                    small {
                        font-size: 1rem;
                        font-family: 'Merriweather';
                        color: #2D2B78;
                    }
                }
            }
        }
    }
`

type card = {
    title: string;
    link: string;
} 

type ImageContainerProps = {
    style?: string;
    imageOrientation: string;
    imageUrl: string[];
    title: string;
    description: string;
    link: string;
    linkHref: string;
    button: boolean;
    linkButton?: string;
    cards?: card[];
}  

function ImageContainer(props: ImageContainerProps) {
    const { style, imageOrientation, imageUrl, title, description, link, linkHref, linkButton, button, cards } = props;
    const [urlIndex, setUrlIndex] = useState(0)
  
    return (
      <Container className={imageOrientation + " " + style}>
        <div className="carousel">
            {imageUrl.map((item, index) => (
                <div className={index != urlIndex ? 'imgDesactive' : 'img'} key={index}>
                    <Image
                        src={item}
                        alt=""
                        width={800}
                        height={800}
                        layout="responsive"
                    />
                </div>
            ))}
            <div className="controls">
                <button
                    disabled={urlIndex <= 0}
                    onClick={() => {
                            setUrlIndex((prevState: number) => prevState - 1)
                        }
                    }
                    className={urlIndex <= 0 ? 'desactive' : ''}
                    >
                    <Image
                        src="/arrow-left.svg"
                        alt="ícone de seta para esquerda"
                        width={7}
                        height={14}
                    />
                </button>
                <button
                    disabled={urlIndex+1 >= imageUrl.length}
                    onClick={() => {
                            setUrlIndex((prevState: number) => prevState + 1)
                        }
                    }
                    className={urlIndex+1 >= imageUrl.length ? 'desactive' : ''}
                    >
                    <Image
                        src="/arrow-right.svg"
                        alt="ícone de seta para esquerda"
                        width={7}
                        height={14}
                    />
                </button>
            </div>
        </div>
        <div className="content">
            <h1>{title}</h1>
            <div className="text">
                <h4>{description}</h4>
                {link ? <Link href={linkHref}><a><p>{link}</p></a></Link> : ''}
                {button ? <div><Button className="button">Saiba mais</Button></div> : ''}
                {cards ? <div className="cards">{cards.map((item,index) =>
                    <div className="card" key={index}>
                        <p>{item.title}</p>
                        <Link href={item.link}><a><small>Ver mais</small></a></Link>
                    </div>
                )}</div> : ''}
            </div>
        </div>
      </Container>
    )
  }
  
  export default ImageContainer