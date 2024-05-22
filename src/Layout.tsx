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
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List component="nav">
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="hoge" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="hogehoge" />
        </ListItemButton>
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="おまけ" />
        </ListItemButton>
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="おまけ" />
        </ListItemButton>
      </List>
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#26a69a",
      },
      secondary: {
        main: grey[400],
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
            <Button
              onClick={() => {
                alert("clicked");
              }}
              variant="text"
              color="inherit"
              startIcon={<AddIcon />}
            >
              スレッドを立てる
            </Button>
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