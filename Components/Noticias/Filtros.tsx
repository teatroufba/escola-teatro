import { StyledFiltros } from './styles'

export default function Filtros() {
  return (
    <StyledFiltros>
      <div className="filter-button">
        <button> Mais antigas </button>
        <button> Mais recentes </button>
        <button> De A -Z </button>
      </div>
      <form className="filter-input">
        <span>
          <p>Filtrar por data</p>
          <input placeholder="data de inicio" />
        </span>
        <input placeholder="data final" />
        <button> Filtrar </button>
      </form>
    </StyledFiltros>
  )
}
