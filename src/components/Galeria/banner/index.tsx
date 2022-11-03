import Image from "next/image";
import { BannerStyled } from "./styles";

interface IBannerGaleria {
	imageURL: string;
	alt: string;
}

export default function BannerGaleria({ imageURL, alt }: IBannerGaleria) {
	return (
		<BannerStyled>
			<img alt={alt} src={imageURL} />
			{/* <div className="layer" /> */}
		</BannerStyled>
	);
}
