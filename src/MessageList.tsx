import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NewMessagePost from "./NewMessagePost";

interface Message {
  id: string;
  post: string;
}

const MessageList = () => {
  const { thread_id } = useParams<{ thread_id: string }>();
  const [messageList, setMessageList] = useState<Message[]>([]);
  const location = useLocation();
  const { title } = location.state;

  useEffect(() => {
    getPost();
  }, [thread_id]);

  const getPost = async () => {
    await axios
      .get(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=0`
      )
      .then((response) => {
        console.log(response);
        setMessageList(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            ml: 30,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ mt: 10, ml: 35 }}>
          {messageList.length > 0 ? (
            messageList.map((data) => (
              <Typography key={data.id} sx={{ mb: 2 }}>
                {data.post}
              </Typography>
            ))
          ) : (
            <Typography variant="h6" style={{ color: "#ff0000" }}>
              ※投稿されてません
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid xs={4}>
        <NewMessagePost getpost={getPost} />
      </Grid>
    </Grid>
  );
};

export default MessageList;
