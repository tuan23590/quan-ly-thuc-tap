import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';


export default function Admin(){
   const [selectedNavItem, setSelectedNavItem] = useState('dashboard');

   const handleNavItemSelect = (item) => {
     setSelectedNavItem(item);
   };
 
   const navItems = ['dashboard', 'users', 'settings'];
 
   const renderNavItems = () => {
     return (
       <List>
         {navItems.map((item) => (
           <ListItem
             button
             key={item}
             selected={selectedNavItem === item}
             onClick={() => handleNavItemSelect(item)}
           >
             <ListItemText primary={item} />
           </ListItem>
         ))}
       </List>
     );
   };
 
   const renderContent = () => {
     // Đây là nơi bạn sẽ render nội dung tương ứng với mỗi item trong Navbar
     switch (selectedNavItem) {
       case 'dashboard':
         return <div>Dashboard Content</div>;
       case 'users':
         return <div>Users Content</div>;
       case 'settings':
         return <div>Settings Content</div>;
       default:
         return null;
     }
   };
 
   return (
     <Grid container>
       {/* Navbar */}
       <Drawer variant="permanent" anchor="left">
         {renderNavItems()}
       </Drawer>
 
       {/* Nội dung */}
       <Grid item xs={12} sm={9}>
         <AppBar position="static">
           <Toolbar>
             <h2>{selectedNavItem}</h2>
           </Toolbar>
         </AppBar>
         <div style={{ padding: '20px' }}>{renderContent()}</div>
       </Grid>
     </Grid>
   );
 };
