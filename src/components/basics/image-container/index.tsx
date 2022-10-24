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
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            h4 {
                font-family: 'Arial';
                font-style: normal;
                font-weight: 400;
                font-size: 1.125rem;
                max-width: 660px;

                @media (max-width: 768px) {
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
        }
    }
`

type ImageContainerProps = {
    imageOrientation: string;
    imageUrl: string[];
    title: string;
    description: string;
    link: string;
    linkHref: string;
    linkButton: string;
}  

function ImageContainer(props: ImageContainerProps) {
    const { imageOrientation, imageUrl, title, description, link, linkHref, linkButton } = props;
    const [urlIndex, setUrlIndex] = useState(0)
  
    return (
      <Container className={imageOrientation}>
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
                <Link href={linkHref}><a><p>{link}</p></a></Link>
                <div><Button className="button">Saiba mais</Button></div>
            </div>
        </div>
      </Container>
    )
  }
  
  export default ImageContainer