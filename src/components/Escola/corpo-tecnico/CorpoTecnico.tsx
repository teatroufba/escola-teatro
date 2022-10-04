import { StyledStaffTable, StyledStaffTableContainer } from "./styles";

interface ICorpoTecnico {
	uid: string;
	email: string;
	nome: string;
	funcao: string;
}

interface ICorpoTecnicoArray {
	corpoTecnico: ICorpoTecnico[];
}

export default function CorpoTecnico({ corpoTecnico }: ICorpoTecnicoArray) {
	return (
		<StyledStaffTableContainer>
			<h1>Corpo Técnico</h1>
			<div className="table-container">
				<StyledStaffTable>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Função</th>
							<th>E-mail</th>
						</tr>
					</thead>

					<tbody>
						{corpoTecnico.map((item) => (
							<tr key={item.uid}>
								<td>{item.nome}</td>
								<td>{item.funcao}</td>
								<td>{item.email}</td>
							</tr>
						))}
					</tbody>
				</StyledStaffTable>
			</div>
		</StyledStaffTableContainer>
	);
}
