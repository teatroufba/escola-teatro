function BarraGoverno() {
  return (
    <div
      id="barra-brasil"
      style={{
        background: '#7F7F7F',
        display: 'block',
        height: '20px',
        padding: '0 0 0 10px',
      }}
    >
      <ul id="menu-barra-temp" style={{ listStyle: 'none' }}>
        <li
          style={{
            borderRight: '1px solid #EDEDED',
            float: 'left',
            marginRight: '10px',
            paddingRight: '10px',
          }}
        >
          <a
            href="http://brasil.gov.br"
            style={{
              color: 'white',
              fontFamily: 'sans,sans-serif',
              textDecoration: 'none',
            }}
          >
            Portal do Governo Brasileiro
          </a>
        </li>
        <li>
          <a
            href="http://epwg.governoeletronico.gov.br/barra/atualize.html"
            style={{
              color: 'white',
              fontFamily: 'sans,sans-serif',
              textDecoration: 'none',
            }}
          >
            Atualize sua Barra de Governo
          </a>
        </li>
      </ul>
    </div>
  )
}

export default BarraGoverno
