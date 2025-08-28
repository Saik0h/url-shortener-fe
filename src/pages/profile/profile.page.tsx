import { useEffect, } from "react";
import { Dashboard } from "./components";

import "./profile.page.css";
import { useAuth } from "../../context/useAuth";

export function Profile() {
  const { getCurrent } = useAuth()
  useEffect(() => {
    getCurrent().then((res) => {
      console.log(res)
    })

  }, [])

  return (
    <section className="wrap">
      <header>
        <div className="avatar" aria-hidden="true"></div>
        <div className="title">
          <h1>Seu Dashboard</h1>
          <div className="subtitle">Visão geral das suas URLs</div>
        </div>
      </header>
      <Dashboard />
    </section>
  );
}
