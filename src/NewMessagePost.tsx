import axios from "axios";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  EditNote as EditNoteIcon,
  HouseSiding as HouseSidingIcon,
} from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

const NewMessagePost = ({ getpost }) => {
  const navigate = useNavigate();
  const { thread_id } = useParams<{ thread_id: string }>();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (message.trim() === "") {
      setError("メッセージを入力してください");
    } else {
      setError("");
      MessagePost(message);
    }
  };

  const MessagePost = async (message: string) => {
    await axios
      .post(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        {
          post: message,
        }
      )
      .then((response) => {
        console.log(response);
        getpost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        id="filled-multiline-static"
        multiline
        label="投稿しよう！"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          bgcolor: "white",
          width: 350,
          mr: 15,
          mt: 5,
        }}
        error={Boolean(error)}
        helperText={error}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          height: "45px",
          mt: 8,
          width: "350px",
          fontSize: "1.25rem",
        }}
      >
        <EditNoteIcon sx={{ margin: 1 }} />
        作成
      </Button>
      <Button
        variant="text"
        color="inherit"
        startIcon={<HouseSidingIcon />}
        sx={{
          height: "45px",
          mt: 8,
          width: "350px",
          fontSize: "1.25rem",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Topに戻る
      </Button>
    </Box>
  );
};
export default NewMessagePost;
