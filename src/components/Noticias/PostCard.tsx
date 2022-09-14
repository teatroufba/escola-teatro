import Image from "next/image";

import { StyledPosts } from "./styles";

interface IPostCard {
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
}: IPostCard) {
  return (
    <StyledPosts>
      {imageUrl ? (
        <Image alt={imageAlt} height={250} src={imageUrl} width={390} />
      ) : null}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a href={`/noticias/${uid}`}>
        Saiba mais{"  "}
        <Image alt={imageAlt} height={10} src="/arrow.png" width={10} />
      </a>
    </StyledPosts>
  );
}
