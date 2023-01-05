import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/noticias/${uid}`}>
      <StyledPosts>
        <div className="noticias-post-img">
          {imageUrl ? (
            <Image alt={imageAlt} src={imageUrl} layout='fill' objectFit="cover" objectPosition='center' />
          ) : null}
        </div>
        <div className="noticias-post-text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <a>
          Saiba mais{"  "}
          <Image alt={imageAlt} height={10} src="/arrow.png" width={10} />
        </a>
      </StyledPosts>
    </Link>
  );
}
