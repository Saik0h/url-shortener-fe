import { Head, Body } from "./components"
import './dashboard.component.css'

export default function Dashboard() {
    const items = [{
        className: "URLs", title: "URL"
    }, {
        className: "cliques", title: "Cliques"
    }, {
        className: "atualizado", title: "Atualizado"
    }, {
        className: "acao", title: "Ação"
    }
    ]

    return (
        <section className="wrap">
            <header>
                <div className="avatar" aria-hidden="true"></div>
                <div className="title">
                    <h1>Seu Dashboard</h1>
                    <div className="subtitle">Visão geral das suas URLs</div>
                </div>
            </header>

            <main className="grid" aria-live="polite">
                <section className="card" aria-label="URLs mais acessadas">
                    <header className="card-header">
                        <div className="card-title">URLs mais acessadas</div>
                        <div className="tools">
                            <span className="chip">últimos 30 dias</span>
                        </div>
                    </header>
                    <div className="card-body scroll">
                        <table
                            className="table"
                            role="table"
                            aria-describedby="top-urls-desc"
                        >
                            <caption id="top-urls-desc" className="visually-hidden">
                                Lista de URLs ordenadas por acessos
                            </caption>
                            <Head items={items} />
                            <Body />
                        </table>
                    </div>
                </section>
            </main>
        </section>

    )
}