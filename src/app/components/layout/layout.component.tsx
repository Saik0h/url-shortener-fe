import { Outlet } from "react-router-dom";
import { Header, Footer } from "..";

export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}