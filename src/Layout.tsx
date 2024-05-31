import { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ViewSidebar as ViewSidebarIcon,
  Dashboard as DashboardIcon,
  Create as CreateIcon,
  List as ListIcon,
  Add as AddIcon,
  NotificationImportant as NotificationImportantIcon,
} from "@mui/icons-material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);

  //Drawerの開閉
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  //リンクの色の設定
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

  //サイドバー
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List component="nav">
        <CustomLink to="/">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="一覧" />
          </ListItemButton>
        </CustomLink>
        <CustomLink to="/threads/new">
          <ListItemButton>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="作成" />
          </ListItemButton>
        </CustomLink>
        <CustomLink to="/*">
          <ListItemButton>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="hoge" />
          </ListItemButton>
        </CustomLink>
        <CustomLink to="/*">
          <ListItemButton>
            <ListItemIcon>
              <NotificationImportantIcon />
            </ListItemIcon>
            <ListItemText primary="hogehoge" />
          </ListItemButton>
        </CustomLink>
      </List>
    </Box>
  );

  //色の設定
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

  //共通部分の作成
  //Outletの部分が置き換わる
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
