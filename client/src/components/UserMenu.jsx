import React, { useContext, useState } from "react";
import {Avatar, Box, Menu, MenuItem, Typography} from '@mui/material';
import {AuthContext} from '../context/AuthProvider';


export default function UserMenu(){
    const {user:{displayName,photoURL,auth}} = useContext(AuthContext);
    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleLogout = ()=> {
        auth.signOut();
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
    };
return(  
    <>
    <Box sx={{display: 'flex',alignItems:'center', marginLeft: '7px'}} onClick={handleClick}>
        <h5><Typography sx={{ marginRight: '10px'}}>{displayName}</Typography></h5>
        <Avatar alt="avatar" src={photoURL} sx={{width: 30, height: 30,marginLeft: '5px'}}/>
    </Box>
    <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    >   
        <MenuItem >Thông tin cá nhân</MenuItem>    
        <MenuItem>Đổi mật khẩu</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
    </Menu>   
    </>
)
}