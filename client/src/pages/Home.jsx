import React from "react";
import Navbar from "../components/header";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function Home(){
return(
    <>
    <Navbar/>
    <Box sx={{width: '78%', margin: 'auto',boxShadow:'0 0 15px 0 rgb(193 193 193 /60%)'}}>
        <Outlet/>
    </Box>
    </>
)
}
