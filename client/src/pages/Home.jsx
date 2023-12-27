import React from "react";
import MainLayout from "../layouts/dashboard";
import { Outlet } from "react-router-dom";
export default function Home(){
return(
    <div>
    {/* <Navbar/> */}
        <MainLayout children ={<Outlet/>} />
    </div>
)
}