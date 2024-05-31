import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const ThreadList = () => {
  const [threadData, setThreadData] = useState<{ id: string; title: string }[]>(
    []
  );

  //APIデータの取得
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

  return (
    //スレッドの作成
    <Container maxWidth="sm">
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, mb: 2 }}>
        新着スレッド
      </Typography>
      <Box sx={{ backgroundColor: "white" }}>
        {threadData.map((thread) => (
          <Link
            to={`/threads/${thread.id}`}
            key={thread.id}
            style={{ textDecoration: "none" }}
            state={{ title: thread.title }}
          >
            <Item sx={{ height: 45, borderBottom: "1px solid #ddd" }}>
              {thread.title}
            </Item>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default ThreadList;
