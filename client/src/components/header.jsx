// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import UserMenu from "../components/userMenu";
// import Badge from "@mui/material/Badge";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import Popover from "@mui/material/Popover";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { Link } from "react-router-dom";

// const pages = [
//   { name: "THỰC TẬP", link: "thuctap" },
//   { name: "ĐỀ NGHỊ DN", link: "denghithuctap" },
//   { name: "QUÁ TRÌNH THỰC TẬP", link: "quatrinhthuctap" },
//   { name: "DOANH NGHIỆP", link: "doanhnghiep" },
//   { name: "admin", link: "admin" }
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// export default function header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [notificationCount, setNotificationCount] = React.useState(3);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const handleNotificationClick = (e) => {
//     setAnchorEl(e.currentTarget);
//     setNotificationCount(0);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#2196F3" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page, index) => (
//                 <Link
//                   key={index}
//                   style={{ textDecoration: "none"}}
//                   to={page.link}
//                 >
//                   <Button
//                     key={index}
//                     onClick={handleCloseNavMenu}
//                     sx={{ my: 2, color: "white", display: "block", width: "100%"}}
//                   >
//                     {page.name}
//                   </Button>
//                 </Link>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page, index) => (
//               <Link
//                 key={index}
//                 style={{ textDecoration: "none" }}
//                 to={page.link}
//               >
//                 <Button
//                   key={index}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page.name}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//           <IconButton color="inherit" onClick={handleNotificationClick}>
//             <Badge badgeContent={notificationCount} color="error">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>

//           {/* Pop-up thông báo */}
//           <Popover
//             open={Boolean(anchorEl)}
//             anchorEl={anchorEl}
//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "right",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//           >
//             <List>
//               <ListItem button>
//                 <ListItemText primary="Thông báo 1" />
//               </ListItem>
//               <ListItem button>
//                 <ListItemText primary="Thông báo 2" />
//               </ListItem>
//             </List>
//           </Popover>
//           <UserMenu />
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
