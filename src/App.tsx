import { useState, useEffect } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";
import NewThreadsPost from "./NewThreadsPost.tsx";
import NotFound from "./NotFound.tsx";
import axios from "axios";

export const App = () => {
  const [threadData, setThreadData] = useState<{ id: string; title: string }[]>(
    []
  );

  useEffect(() => {
    axios
      .get("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
      .then((response) => {
        setThreadData(response.data);
      })
      .catch((error) => {
        console.error("取得できません", error);
      });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#fff",
  }));

  const Thread = () => (
    <Container maxWidth="sm">
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, mb: 2 }}>
        新着スレッド
      </Typography>
      <Box
        sx={{ backgroundColor: "white", borderRadius: 1, overflow: "hidden" }}
      >
        {threadData.map((thread) => (
          <Item
            key={thread.id}
            sx={{ height: 45, borderBottom: "1px solid #ddd" }}
          >
            {thread.title}
          </Item>
        ))}
      </Box>
    </Container>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Thread />} />
          <Route path="/threads/new" element={<NewThreadsPost />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
