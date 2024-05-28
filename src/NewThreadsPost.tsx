import { SetStateAction, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewThreadsPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //テキストフィールドの管理
  const [error, setError] = useState(""); //テキストフィールドに入力されなかったときに使う

  //フォームの入力が変更されたときに呼び出される
  //"event"は"target"プロパティをもつ（今回はフォームの入力要素）
  //"value" プロパティは現在の値
  //この関数は値が変わるたび、値を取得して状態の更新をする
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

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
      .then((res) => {
        console.log(res);
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
          onChange={handleInputChange}
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
