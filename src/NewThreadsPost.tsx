import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
  HouseSiding as HouseSidingIcon,
} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewThreadsPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //テキストフィールドの管理
  const [error, setError] = useState(""); //テキストフィールドに入力されなかったときに使う

  //ページのリロードを防ぐ
  //フォームのタイトルが空かどうか
  //テキストフィールドに(titleを)入力している場合"threadPost"を呼び出す
  //投稿リクエストを送信
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (title.trim() === "") {
      setError("タイトルを入力してください");
    } else {
      setError("");
      threadPost(title);
    }
  };

  //POSTするために使う
  //データの更新を行いホーム画面に戻った際、入力した内容が表示されるようにする
  const threadPost = async (title: string) => {
    await axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: title,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, mt: 5 }}>
        スレッド新規作成
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
          mt: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="スレッドタイトル"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            backgroundColor: "white",
          }}
          error={Boolean(error)}
          helperText={error}
        />
        <Box>
          <Stack direction="row">
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Grid item xs={4}>
                <Button
                  variant="text"
                  color="inherit"
                  startIcon={<HouseSidingIcon />}
                  sx={{
                    height: "45px",
                    width: "180px",
                    fontSize: "1.25rem",
                  }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Topに戻る
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  size="large"
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    height: "45px",
                    width: "180px",
                    fontSize: "1.25rem",
                  }}
                >
                  作成
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default NewThreadsPost;
