import "./App.css";
import { useState, useEffect } from "react";

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

  return (
    <div>
      <h2>新着スレッド</h2>
      {threadData.map((threadData) => (
        <div key={threadData.id}>
          <p>
            id: {threadData.id} title: {threadData.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
