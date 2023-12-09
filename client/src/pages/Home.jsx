import React from "react";
import MainLayout from "../layouts/dashboard";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function Home(){
return(
    <>
    {/* <Navbar/> */}

        <MainLayout children ={<Outlet/>} />
    </>
)
}