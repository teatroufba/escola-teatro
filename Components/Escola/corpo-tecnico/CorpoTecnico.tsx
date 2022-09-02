import { StyledStaffTable, StyledStaffTableContainer } from './styles'

interface ICorpoTecnico {
    email: string, 
    name: string,
    role: string
}

interface ICorpoTecnicoArray {
    corpoTecnico: ICorpoTecnico[];
}

export default function CorpoTecnico ({ corpoTecnico } : ICorpoTecnicoArray) {
    return (
        <StyledStaffTableContainer>
            <h1>Corpo Técnico</h1>
            <StyledStaffTable>
                <tr>
                    <th>Nome</th>
                    <th>Função</th>
                    <th>E-mail</th>
                </tr>
                {corpoTecnico.map(item => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </StyledStaffTable>
        </StyledStaffTableContainer>
    )
}