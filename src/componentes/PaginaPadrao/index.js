import Banner from "componentes/Banner";
import React from "react";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return(
        <main>
            <Banner></Banner>

            <Outlet></Outlet>
        </main>
    )
}

export default PaginaPadrao