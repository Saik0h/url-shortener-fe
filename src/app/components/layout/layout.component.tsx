import { Outlet } from "react-router-dom";
import { Header, Footer } from "..";

export function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
