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
                <p id="conteudo-post-agenda">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium hendrerit curabitur eget eu feugiat enim. Vitae id vitae consequat, orci venenatis vestibulum, egestas dolor sit. Vulputate diam sit augue adipiscing purus. Cras pretium senectus in eu. Massa pharetra luctus purus sed eget tellus nibh. At lectus malesuada cursus sed in dolor. Viverra aliquam amet, auctor quis aliquet. Donec auctor tristique lectus nisl magna quis suscipit lectus in. Massa nullam suspendisse et porttitor scelerisque nibh scelerisque viverra libero. Consectetur diam sit volutpat nulla sodales.

                Tincidunt mollis sed etiam varius. Sed commodo turpis sit diam. Ac donec lectus sed eget amet blandit at laoreet pulvinar. Magnis vitae purus viverra proin. Amet, molestie magna morbi amet. Sapien dignissim venenatis adipiscing id vestibulum, molestie. Imperdiet duis fusce duis nec, aliquam, ipsum diam turpis.

                Sed sollicitudin metus, lobortis turpis sed aliquam lacinia quis libero. Leo, enim et ultricies dui massa. Vitae justo, amet posuere netus amet nullam enim consequat adipiscing. Lectus nullam morbi augue sed purus, aliquam quis. Netus tortor luctus odio quis id. Elit tellus est non dui potenti vitae nibh in. Commodo facilisis tristique dignissim ultrices.
                Neque sed accumsan lacus vulputate volutpat in. Amet, tellus massa, cursus tincidunt pulvinar pulvinar. Volutpat justo nisl fermentum venenatis. Massa ultrices in elit eget congue. Eu blandit egestas eu facilisi. Faucibus pellentesque iaculis a vitae est. Purus in odio id commodo suspendisse gravida nulla habitant. Lorem quam ornare ut sed platea ut lobortis pellentesque nullam.

                Posuere vestibulum semper donec sed quam nunc volutpat egestas urna. Bibendum nullam malesuada volutpat tincidunt. Sed pellentesque pulvinar at faucibus tortor, at vulputate. Lobortis dictum ac pellentesque viverra id. Adipiscing eget enim neque.</p>
            </div>
        </StyledPostAgendaMain>
    )
}