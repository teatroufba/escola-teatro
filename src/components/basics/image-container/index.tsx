import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Button from './../button'

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 5rem;
    align-items: center;

    &.left {
        justify-content: left;
    }

    &.right {
        justify-content: right;
        flex-direction: row-reverse;
    }

    .carousel {
        width: 868px;
        height: 860px;

        .img {
            width: 868px;
            height: 860px;
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
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            h4 {
                font-family: 'Arial';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                max-width: 660px;
            }

            p {
                font-family: 'Merriweather';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                text-decoration-line: underline;
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
                        width={868}
                        height={860}
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
                <p>{link}</p>
                <div><Button className="button">Saiba mais</Button></div>
            </div>
          </div>
      </Container>
    )
  }
  
  export default ImageContainer