import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import logo from "./logo.png";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RecommendIcon from "@mui/icons-material/Recommend";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import Switch from '@mui/material/Switch';
// import { useSession, signOut } from 'next-auth/react';
// import { redirect } from 'next/navigation';
// import { setCookie, deleteCookie } from "cookies-next";
const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [backgroundColor, setBackgroundColor] = useState('#242B4D');
  const [color, setColor] = useState('#FFFFFF');
  const [checked, setChecked] = useState(true);

  const handleThemeChange = () => {
    setChecked((checked) => !checked);
    if (!checked) {
      setBackgroundColor('#242B4D');
      setColor('#FFFFFF');
    } else {
      setBackgroundColor('#FFFFFF');
      setColor('#242B4D');
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/')
  //     // redirect('/api/auth/signin?callbackUrl=/client')
  //   }
  // })

  // if (session) {
  //   let user = session["user"];
  //   console.log('Session User ', user);
  // }

  const drawer = (
    <div>
      <Toolbar>
        <Image
          src={logo}
          alt="Logo"
          height={45}
          width={45}
          className="-ml-2 mr-4"
        />
        <Typography variant="h6" noWrap component="div">
          SriPandit
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          "Dashboard",
          "Analytics",
          "Users",
          "Projects",
          "Cards",
          "DataGrid",
          "Profile",
          // "Logout",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            className={
              pathname.startsWith("/" + text.toLowerCase())
                ? "text-sky-600 bg-slate-100"
                : { color }
            }
            onClick={() => {
              router.push("/" + text.toLowerCase());
            }}
          >
            <ListItemButton>
              <ListItemIcon
                className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                }
              >
                {index === 0 && <SpaceDashboardIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {index === 1 && <QueryStatsIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {index === 2 && <PeopleAltIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {index === 3 && <WorkIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {index === 4 && <MailIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {index === 5 && <SettingsIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {index === 6 && <AccountCircleIcon className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : (checked ? "text-slate-50" : "text-slate-600")
                } />}
                {/* {index === 7 && <LogoutIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem
          disablePadding
          onClick={handleCollapse}
          className={
            pathname.startsWith("/help")
              ? "text-sky-600 bg-slate-100"
              : { color }
          }
        >
          <ListItemButton>
            <ListItemIcon
              className={
                pathname.startsWith("/help")
                  ? "text-sky-600 bg-slate-100"
                  : (checked ? "text-slate-50" : "text-slate-600")
              }
            >
              <HelpIcon className={checked ? "text-slate-50" : "text-slate-600"} />
            </ListItemIcon>
            <ListItemText primary="Help" />
            {isCollapse ? <ExpandLessIcon className={checked ? "text-slate-50" : "text-slate-600"} /> : <ExpandMoreIcon className={checked ? "text-slate-50" : "text-slate-600"} />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        <List className="ml-4">
          {["Library", "Support", "FAQ"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              className={
                pathname.startsWith("/help")
                  ? "text-sky-600 bg-slate-100"
                  : { color }
              }
            >
              <ListItemButton>
                <ListItemIcon
                  className={
                    pathname.startsWith("/help")
                      ? "text-sky-600 bg-slate-100"
                      : (checked ? "text-slate-50" : "text-slate-600")
                  }
                >
                  {index === 0 && <LibraryBooksIcon className={checked ? "text-slate-50" : "text-slate-600"} />}
                  {index === 1 && <RecommendIcon className={checked ? "text-slate-50" : "text-slate-600"} />}
                  {index === 2 && <LiveHelpIcon className={checked ? "text-slate-50" : "text-slate-600"} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
  const userLogout = () => {
    console.log('User Logout...');
    // deleteCookie("logged");
    router.push("/");
    // signOut();
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: { backgroundColor },
          color: { color },
          // bgcolor: "#FFFFFF",
          // color: "#2f2f2f",
        }}
      >
        <div className="flex justify-between">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
          <div className="mt-3 mr-3 cursor-pointer">
            <Typography variant="h6" noWrap component="div" onClick={() => userLogout()}>
              <LogoutIcon /> Logout
            </Typography>
            <div style={{ position: 'fixed', top: 11, right: 120 }}>
              <Switch
                checked={checked}
                onChange={handleThemeChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
          </div>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: { backgroundColor },
              color: { color },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: { backgroundColor },
              color: { color },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  children: PropTypes.array,
};

export default Layout;
