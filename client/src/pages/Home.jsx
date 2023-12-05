import React from "react";
import Navbar from "../components/header";
import Information from "../components/information";
import InternshipPostList from "../components/internshipPostList";
import { Container, Grid } from "@mui/material";

export default function Home(){
return(
    <>
    <Navbar/>
    <Container>
    <Grid container sx={{}}>
        <Grid item xs={9} sx={{height: '100%',boxShadow:'0 0 15px 0 rgb(193 193 193 /60%)'}}>
            <InternshipPostList/>
        </Grid>
        <Grid item xs={3} sx={{height: '100%',boxShadow:'0 0 15px 0 rgb(193 193 193 /60%)'}}>
            <Information/>
        </Grid>
    </Grid>
    </Container>
    </>
)
}
