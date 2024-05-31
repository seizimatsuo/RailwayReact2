import axios from "axios";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewMessagePost = ({ getpost }) => {
  const navigate = useNavigate();
  const { thread_id } = useParams<{ thread_id: string }>();
  const [message, setMessage] = useState("");

  const MessagePost = async () => {
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
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
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
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          bgcolor: "white",
          width: 350,
          mr: 15,
          mt: 5,
        }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{
          height: "45px",
          mt: 8,
          width: "350px",
          fontSize: "1.25rem",
        }}
        onClick={MessagePost}
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
