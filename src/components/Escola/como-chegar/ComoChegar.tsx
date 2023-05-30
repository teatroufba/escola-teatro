import { CallIcon, EmailIcon, LocationIcon } from "./icons";
import {
  LocationInfo,
  StyledLocationContainer,
  StyledLocationContent,
} from "./styles";

interface IInformacoes {
  endereco: string;
  email: string;
  telefone: string;
}

export default function ComoChegar({
  email,
  endereco,
  telefone,
}: IInformacoes) {
  return (
    <StyledLocationContainer>
      <StyledLocationContent>
        <h1 id="como-chegar">Como chegar</h1>
        <div className="localization-content">
          <iframe
            height="336"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(
              endereco
            )}&key=AIzaSyCau3SVqNmsAyNC17YWZwOwoPg37KWtxfs`}
            title="Escola de Teatro da UFBA"
            width="605"
          />

          <LocationInfo>
            <div className="info-tile">
              <div className="info-tile-title">
                <LocationIcon hover size={32} />
                <h2>Localização</h2>
              </div>
              <p>{endereco ? endereco : "sem informação"}</p>
            </div>
            <div className="info-tile">
              <div className="info-tile-title">
                <EmailIcon hover size={32} />
                <h2>E-mail</h2>
              </div>
              <p>{email ? email : "sem informação"}</p>
            </div>
            <div className="info-tile">
              <div className="info-tile-title">
                <CallIcon hover size={32} />
                <h2>Telefone</h2>
              </div>
              <p>{telefone ? telefone : "sem informação"}</p>
            </div>
          </LocationInfo>
        </div>
      </StyledLocationContent>
    </StyledLocationContainer>
  );
}
