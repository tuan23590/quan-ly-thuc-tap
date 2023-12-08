import React from "react";
import MainLayout from "../layouts/dashboard";
import { Outlet } from "react-router-dom";

export default function Admin(){
return(
    <>
    <MainLayout children= {<Outlet/>}/>
    </>
)
}
