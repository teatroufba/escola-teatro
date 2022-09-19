import Image from "next/image";
import Link from "next/link";
import { StyledAgendaCard } from "./styles";

export default function AgendaCard() {
    return (
        <StyledAgendaCard>
            <div className="container-img">
                <Image src='/brasao.png' alt="" layout="fill" objectFit="cover" objectPosition='center' />
                <p>
                    08<br />
                    <span>JUN</span>
                </p>
            </div>
            <div className="container-baixo">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</h4>
                <div className="container-data">
                    <Image src='/calendar.svg' alt="" width={24} height={24} />
                    <p>00/00/0000</p>
                </div>
                <div className="container-location">
                    <Image src='/location-azul.svg' alt="" width={24} height={24} />
                    <p>PAF 01, Sala 0000</p>
                </div>
                <p className="conteudo-agenda">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                </p>
                <Link href='/' passHref>
                    <a>Acesse</a>
                </Link>
            </div>
        </StyledAgendaCard>
    )
}