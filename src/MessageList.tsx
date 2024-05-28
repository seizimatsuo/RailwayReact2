import axios from "axios";
import { useState, useEffect } from "react";

const MessageList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    axios
      .get(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/"
      )
      .then((response) => {
        setMessageList(response.data);
      })
      .catch((error) => {
        console.error("取得できません", error);
      });
  };

  return <p>a</p>;
};

export default MessageList;
