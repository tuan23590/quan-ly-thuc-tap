import React from "react";
import MainLayout from "../layouts/dashboard";
import { Outlet } from "react-router-dom";
export default function Home(){
return(
    <div style={{margin: "20px"}}>
    {/* <Navbar/> */}
        <MainLayout children ={<Outlet/>} />
    </div>
)
}