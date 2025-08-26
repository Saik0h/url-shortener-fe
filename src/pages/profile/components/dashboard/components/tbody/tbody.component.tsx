import './tbody.component.css'

export default function Body() {
  return (
    <tbody>
      <tr>
        <td>
          <a
            className="url"
            href="#"
            title="https://exemplo.com/artigo-longo"
          >
            <span className="dot" aria-hidden="true"></span>
            <span className="text">
              https://exemplo.com/artigo-longo
            </span>
          </a>
          <div className="muted">li_ab12cd34</div>
        </td>
        <td className="stat">12.340</td>
        <td className="muted">há 2 dias</td>
        <td>
          <button className="action" aria-label="Copiar link">
            Copiar
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <a className="url" href="#">
            <span className="dot" aria-hidden="true"></span>
            <span className="text">
              https://meusite.dev/portfolio
            </span>
          </a>
          <div className="muted">li_ef56gh78</div>
        </td>
        <td className="stat">8.902</td>
        <td className="muted">há 5 dias</td>
        <td>
          <button className="action" aria-label="Copiar link">
            Copiar
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <a className="url" href="#">
            <span className="dot" aria-hidden="true"></span>
            <span className="text">
              https://loja.exemplo.com/produto/123
            </span>
          </a>
          <div className="muted">li_ij90kl12</div>
        </td>
        <td className="stat">6.201</td>
        <td className="muted">há 1 semana</td>
        <td>
          <button className="action" aria-label="Copiar link">
            Copiar
          </button>
        </td>
      </tr>
    </tbody>

  )
}