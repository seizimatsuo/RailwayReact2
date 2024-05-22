import { useState, useEffect } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";

export const App = () => {
  const [threadData, setThreadData] = useState<{ id: string; title: string }[]>(
    []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://railway.bulletinboard.techtrain.dev/threads?offset=0"
        );
        const data = await response.json();
        setThreadData(data);
      } catch (error) {
        console.error("取得できません", error);
      }
    };
    getData();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const Thread = () => (
    <Container maxWidth="sm">
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        新着スレッド
      </Typography>
      {threadData.map((threadData) => (
        <Box sx={{ height: 40, backgroundColor: "white" }}>
          <Typography key={threadData.id}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Item>{threadData.title}</Item>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      ))}
    </Container>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Thread />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
