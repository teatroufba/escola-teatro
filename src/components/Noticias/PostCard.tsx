import Image from "next/image";
import Link from "next/link";

import { StyledPosts } from "./styles";

interface IPostCard {
  date: string;
  imageAlt: string;
  imageUrl: string;
  subtitle: string;
  title: string;
  uid: string;
}

export default function PostCard({
  uid,
  imageAlt,
  imageUrl,
  title,
  subtitle,
  date,
}: IPostCard) {
  const data = new Date(date);
  let dia = data.getDate().toString();
  let mes = data.getMonth();
  if (data.getMonth() == 0) {
    mes = 1;
  }
  const ano = data.getFullYear();
  let mesNumero = (mes + 1).toString();

  if (dia.length === 1) {
    dia = `0${dia}`;
  }

  if (mesNumero.length === 1) {
    mesNumero = `0${mes}`;
  }
  return (
    <Link href={`/noticias/${uid}`} passHref>
      <a>
        <StyledPosts>
          <div className="noticias-post-img">
            {imageUrl ? (
              <Image
                alt={imageAlt}
                src={imageUrl}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            ) : null}
          </div>
          <div className="noticias-post-text">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div className="container-data">
              <Image src="/calendar.svg" alt="" width={24} height={24} />
              <p>{`${dia}/${mesNumero}/${ano}`}</p>
            </div>
            <a>
              Saiba mais{"  "}
              <Image alt={imageAlt} height={10} src="/arrow.png" width={10} />
            </a>
          </div>
        </StyledPosts>
      </a>
    </Link>
  );
}
