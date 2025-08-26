import "./profile.page.css";

export function Profile() {
  return (
    <div className="wrap">
      <header>
        <div className="avatar" aria-hidden="true"></div>
        <div className="title">
          <h1>Seu Dashboard</h1>
          <div className="subtitle">Visão geral das suas URLs</div>
        </div>

        <main className="grid" aria-live="polite">
          <section className="card" aria-label="URLs mais acessadas">
            <div className="card-header">
              <div className="card-title">URLs mais acessadas</div>
              <div className="tools">
                <span className="chip">últimos 30 dias</span>
              </div>
            </div>
            <div className="card-body scroll">
              <table
                className="table"
                role="table"
                aria-describedby="top-urls-desc"
              >
                <caption id="top-urls-desc" className="visually-hidden">
                  Lista de URLs ordenadas por acessos
                </caption>
                <thead>
                  <tr>
                    <th className="URLs">URL</th>
                    <th className="cliques">Cliques</th>
                    <th className="atualizado">Atualizado</th>
                    <th className="acao">Ação</th>
                  </tr>
                </thead>
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
              </table>
            </div>
          </section>

          <section className="card" aria-label="Todas as URLs">
            <div className="card-header">
              <div className="card-title">Todas URLs</div>
              <div className="tools">
                <span className="chip">total: 256</span>
              </div>
            </div>
            <div className="card-body scroll">
              <table
                className="table"
                role="table"
                aria-describedby="all-urls-desc"
              >
                <caption id="all-urls-desc" className="visually-hidden">
                  Lista completa de URLs
                </caption>
                <thead>
                  <tr>
                    <th className="URLs">URL</th>
                    <th className="cliques">Cliques</th>
                    <th className="criado">Criado</th>
                    <th className="acao">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        className="url"
                        href="#"
                        title="https://exemplo.com/post/primeiro"
                      >
                        <span className="dot" aria-hidden="true"></span>
                        <span className="text">
                          https://exemplo.com/post/primeiro
                        </span>
                      </a>
                      <div className="muted">li_mn34op56</div>
                    </td>
                    <td className="stat">214</td>
                    <td className="muted">10/07/2025</td>
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
                          https://docs.exemplo.com/guia
                        </span>
                      </a>
                      <div className="muted">li_qr78st90</div>
                    </td>
                    <td className="stat">89</td>
                    <td className="muted">22/06/2025</td>
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
                        <span className="text">https://blog.exemplo.com/</span>
                      </a>
                      <div className="muted">li_uv12wx34</div>
                    </td>
                    <td className="stat">1.023</td>
                    <td className="muted">03/05/2025</td>
                    <td>
                      <button className="action" aria-label="Copiar link">
                        Copiar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}
