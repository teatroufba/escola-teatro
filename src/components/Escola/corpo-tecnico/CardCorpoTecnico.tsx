import { StyledCardCorpoTecnico } from "./styles";

interface ICorpoTecnico {
	email: string;
	nome: string;
	funcao: string;
}

interface ICorpoTecnicoArray {
	corpoTecnico: ICorpoTecnico[];
}

export default function CardCorpoTecnico({ corpoTecnico }: ICorpoTecnicoArray) {
	return (
		<StyledCardCorpoTecnico>
			{corpoTecnico.map((item, index) => (
				<div className="staff-wrapper-container" key={"corpoTecnico" + index}>
					<div className="first-line">
						<div className="staff-name">
							<span className="staff-subheader">Nome</span>
							<span className="staff-info">Devon Lane</span>
						</div>
						<div className="staff-role">
							<span className="staff-subheader">Função</span>
							<span className="staff-info">Accounting</span>
						</div>
					</div>
					<div className="second-line">
						<span className="staff-subheader">Contato</span>
						<span className="staff-contact">devon.lane@example.com</span>
					</div>
				</div>
			))}
		</StyledCardCorpoTecnico>
	);
}
