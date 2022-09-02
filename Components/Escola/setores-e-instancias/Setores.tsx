import SetorAccordion from './Accordion';
import { StyledSetoresContainer } from './styles';

interface IMembro {
    email: string,
    name: string,
    phone: string,
    role: string
}
  
interface ISetor {
    membros: IMembro[];
    nome: string 
}
  
interface ISetores {
    setores: ISetor[]; 
}
  

export default function SetoresInstancias ({ setores }: ISetores) {
    return (
        <StyledSetoresContainer>
            <h1>Setores e Instâncias</h1>
            {setores.map(setor => 
                <SetorAccordion membros={setor.membros} nome={setor.nome}/>
            )}

        </StyledSetoresContainer>
    )
}