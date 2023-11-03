import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";

export default function UserMenu(){
    const {user: {displayName,photoURL,auth}} = useContext(AuthContext);
    const [anchorEL,setAnchorEL] = useState(null);
    const open = Boolean(anchorEL);
    const handleLogout = ()=>{
        auth.signOut();
    }
    const handleClose = ()=>{
        setAnchorEL(null);
    }
    const handleClick = (e)=>{
        setAnchorEL(e.currentTarget);
    }
    return(
        <>
            <Box sx={{display:'flex'}} onClick={handleClick}>
                <Typography>{displayName}</Typography>
                <Avatar alt="avatar" src={photoURL}
                sx={{width:24, height: 24 , marginLeft: '5px'}} />
            </Box>
            <Menu 
            id="basic-menu" 
            anchorEl={anchorEL}
            open = {open}
            onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
        </>
    )
}