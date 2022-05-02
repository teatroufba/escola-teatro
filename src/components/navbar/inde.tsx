function NavBar() {
  return (
    <div
      id="barra-brasil"
      style={{
        background: '#7F7F7F',
        height: '20px',
        padding: '0 0 0 10px',
        display: 'block',
      }}
    >
      <ul id="menu-barra-temp" style={{ listStyle: 'none' }}>
        <li
          style={{
            float: 'left',
            paddingRight: '10px',
            marginRight: '10px',
            borderRight: '1px solid #EDEDED',
          }}
        >
          <a
            href="http://brasil.gov.br"
            style={{
              fontFamily: 'sans,sans-serif',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Portal do Governo Brasileiro
          </a>
        </li>
        <li>
          <a
            href="http://epwg.governoeletronico.gov.br/barra/atualize.html"
            style={{
              fontFamily: 'sans,sans-serif',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            Atualize sua Barra de Governo
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
