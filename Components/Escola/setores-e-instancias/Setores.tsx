import SetorAccordion from './Accordion';
import { StyledDepartmentsContainer } from './styles';

interface IMembro {
	email: string;
	nome: string;
	telefone: string;
	funcao: string;
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
        <StyledDepartmentsContainer>
            <h1>Setores e Instâncias</h1>
            {setores.map(setor => 
                <SetorAccordion membros={setor.membros} nome={setor.nome}/>
            )}

        </StyledDepartmentsContainer>
    )
}