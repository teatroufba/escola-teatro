import Image from "next/image";
import { StyledPostAgendaMain } from "./styles";

export default function PostAgendaMain() {
    return (
        <StyledPostAgendaMain>
            <div id="container-img-agenda">
                <Image src='/brasao.png' alt='' layout="fill" objectFit="cover" objectPosition='center' />
            </div>
            <div id="container-baixo-agenda">
                <h1>Lorem Ipsum</h1>
                <div id="container-info-agenda">
                    <div id="container-data-agenda">
                        <Image src='/calendar-branco.svg' alt="" width={24} height={24} />
                        <p>Sexta, 01 de julho de 2022</p>
                    </div>
                    <div id="container-local-agenda">
                        <Image src='/location-branco.svg' alt="" width={24} height={24} />
                        <p>Online</p>
                    </div>
                    <div id="container-horario-agenda">
                        <Image src='/timer.svg' alt="" width={24} height={24} />
                        <p>18:00</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium hendrerit curabitur eget eu feugiat enim. Vitae id vitae consequat, orci venenatis vestibulum, egestas dolor sit. Vulputate diam sit augue adipiscing purus. Cras pretium senectus in eu. Massa pharetra luctus purus sed eget tellus nibh. At lectus malesuada cursus sed in dolor. Viverra aliquam amet, auctor quis aliquet. Donec auctor tristique lectus nisl magna quis suscipit lectus in. Massa nullam suspendisse et porttitor scelerisque nibh scelerisque viverra libero. Consectetur diam sit volutpat nulla sodales.</p>
            </div>
        </StyledPostAgendaMain>
    )
}