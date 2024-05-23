import { Outlet } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreateIcon from "@mui/icons-material/Create";
import ListIcon from "@mui/icons-material/List";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const CustomLink = styled(Link)({
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "inherit",
      textDecoration: "none",
    },
    "&:focus": {
      color: "inherit",
      textDecoration: "none",
    },
    "&:active": {
      color: "inherit",
      textDecoration: "none",
    },
  });

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List component="nav">
        <CustomLink to="/">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </CustomLink>
        <CustomLink to="/threads/new">
          <ListItemButton>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="スレッド作成" />
          </ListItemButton>
        </CustomLink>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="hogehoge" />
        </ListItemButton>
        <CustomLink to="/*">
          <ListItemButton>
            <ListItemIcon>
              <NotificationImportantIcon />
            </ListItemIcon>
            <ListItemText primary="おまけ" />
          </ListItemButton>
        </CustomLink>
      </List>
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#26a69a",
      },
      secondary: {
        main: grey[300],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              onClick={toggleDrawer(true)}
              color="inherit"
              startIcon={<ViewSidebarIcon />}
            ></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              掲示板
            </Typography>
            <CustomLink to="/threads/new">
              <Button variant="text" color="inherit" startIcon={<AddIcon />}>
                スレッドを立てる
              </Button>
            </CustomLink>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ bgcolor: "secondary.main", p: 10, minHeight: "100vh" }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
