import React, { useState } from 'react';
import { Container, AppBar, Toolbar, IconButton, Badge, Popover, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserMenu from './UserMenu';
import {Link, useNavigate} from 'react-router-dom'

export default function Navbar(){
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
  
    return (
      <AppBar position="static" sx={{ background: 'white'}}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
               <img src="src/images/logo.png" style={{ height: '40px'}} />
            </Link>
            </Typography>
            <IconButton onClick={handlePopoverOpen} sx={{marginRight: '20px'}}>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <UserMenu/>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 2 }}>Thông báo và người dùng</Typography>
            </Popover>
          </Toolbar>
        </Container>
      </AppBar>
    );
}