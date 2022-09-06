import { useRef, useState } from 'react';

import { ArrowDownIcon, ArrowUpIcon } from './icons';
import { StyledAccordionContainer } from './styles';

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

export default function SetorAccordion ({ nome, membros }: ISetor) {

    const accordion = useRef<HTMLInputElement>(null)
    const [toggle, setToggle] = useState(false);

    function isShowing() : boolean {
       return (accordion.current)
        ? !accordion.current?.classList.contains('hidden')
        : false;
    }

    function toggleAccordion () : void {
        if(accordion.current) {
            if(!isShowing()) {
                accordion.current.classList.remove('hidden') 
                setToggle(true);
                return;
            }
    
            accordion.current.classList.add('hidden');
            setToggle(false);
        }
    }

    return (
       <StyledAccordionContainer>
        <div className="accordion-content">
            <div className="accordion-header">
                <button onClick={() => toggleAccordion()}> 
                    <h2>{nome}</h2> 
                    {toggle ? <ArrowUpIcon hover size={32}/> : <ArrowDownIcon hover size={32}/>} 
                </button>
            </div>
            <div ref={accordion} className="accordion-members-container hidden">
                {membros.map(membro =>
                    <div className="accordion-member">
                        <h3>{membro.nome}</h3>
                        <p>Função: {membro.funcao}</p>
                        <p>E-mail: {membro.email}</p>
                        <p>Telefone: {membro.telefone}</p>
                    </div>
                )}
            </div>
        </div>
       </StyledAccordionContainer>
    )
}