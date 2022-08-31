import { CallIcon, EmailIcon, LocationIcon } from './icons';
import { LocalizationInfo, StyledComoChegarContainer, StyledComoChegarContent } from './styles';

interface IInformacoes {
    email: string,
    endereco: string,
    numero: string,
}

export default function ComoChegar({email, endereco, numero}: IInformacoes) {
    return (
        <StyledComoChegarContainer>
            <StyledComoChegarContent>
                <h1>Como chegar</h1>
                <div className="localization-content">
                    <iframe
                    height="336"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.720594717637!2d-38.52164!3d-12.992298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14a62291b236efbf!2sEscola%20de%20Teatro%20da%20UFBA!5e0!3m2!1spt-BR!2sbr!4v1657715808611!5m2!1spt-BR!2sbr"
                    title="Escola de Teatro da UFBA"
                    width="605"
                    />

                    <LocalizationInfo>
                        <div className="info-tile">
                            <div className="info-tile-title">
                                <LocationIcon hover size={32}/>
                                <h2>Localização</h2>
                            </div>
                            <p>{endereco}</p>
                        </div>
                        <div className="info-tile">
                            <div className="info-tile-title">
                                <EmailIcon hover size={32}/>
                                <h2>E-mail</h2>
                            </div>
                            <p>{email}</p>
                        </div>
                        <div className="info-tile">
                            <div className="info-tile-title">
                                <CallIcon hover size={32}/>
                                <h2>Telefone</h2>
                            </div>
                            <p>{numero}</p>
                        </div>
                    </LocalizationInfo>
                </div>
            </StyledComoChegarContent>
        </StyledComoChegarContainer>
    )
}