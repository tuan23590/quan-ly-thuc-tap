import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UserMenu from "../components/UserMenu";
import FolderList from "../components/FolderList";
import { Outlet,useLoaderData } from "react-router-dom";

export default function Home(){
    const {students} = useLoaderData();
    return(
        <>
        <Typography variant="h4" sx={{mb:'20px'}}>Quản lý thực tập</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
            <UserMenu />
        </Box>
        <Grid container sx={{height: '50vh',boxShadow:'0 0 15px 0 rgb(193 193 193 /60%)'}}>
            <Grid item xs ={3} sx={{height: '100%'}}>
                <FolderList folders={students}/>
            </Grid>
            <Grid item xs ={9} sx={{height: '100%'}}>
                <Outlet />
            </Grid>
        </Grid>
        </>
    )
}