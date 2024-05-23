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

interface ThreadsProps {
  fetchThreads: () => void; // fetchThreads 関数の型を明示的に指定
}

const NewThreadsPost = ({ fetchThreads }: ThreadsProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (title.trim() === "") {
      setError("タイトルを入力してください");
    } else {
      setError("");
      threadPost(title);
    }
  };

  const threadPost = async (title: string) => {
    await axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: title,
      })
      .then((res) => {
        console.log(res);
        fetchThreads();
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
