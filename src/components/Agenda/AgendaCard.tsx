import Image from "next/image";
import Link from "next/link";
import { StyledAgendaCard } from "./styles";

interface IAgendaCardProps {
    date: string;
    imageAlt: string;
    imageUrl: string;
    local: string;
    tipo: string;
    title: string;
    uid: string;
}

enum meses {
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
}

export default function AgendaCard({ date, imageAlt, imageUrl, local, tipo, title, uid }: IAgendaCardProps) {
    const data = new Date(date)
    let dia = data.getDate().toString()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    let mesNumero = (mes + 1).toString()

    if (dia.length === 1) {
        dia = `0${dia}`
    }

    if (mesNumero.length === 1) {
        mesNumero = `0${mes}`
    }

    return (
        <StyledAgendaCard>
            <div className="container-img">
                <Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover" objectPosition='center' />
                <p>
                    {dia}<br />
                    <span>{meses[mes]}</span>
                </p>
            </div>
            <div className="container-baixo">
                <h4>{title}</h4>
                <div className="container-data">
                    <Image src='/calendar.svg' alt="" width={24} height={24} />
                    <p>{`${dia}/${mesNumero}/${ano}`}</p>
                </div>
                <div className="container-location">
                    <Image src='/location-azul.svg' alt="" width={24} height={24} />
                    <p>{local}</p>
                </div>
                <p className="conteudo-agenda">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                </p>
                <Link href={`/agenda/${uid}`} passHref>
                    <a>Acesse</a>
                </Link>
            </div>
        </StyledAgendaCard>
    )
}