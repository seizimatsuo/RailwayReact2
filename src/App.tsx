import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreadList from "./ThreadList.tsx";
import Layout from "./Layout.tsx";
import NewThreadsPost from "./NewThreadsPost.tsx";
import MessageList from "./MessageList.tsx";
import NotFound from "./NotFound.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ThreadList />} />
          <Route path="/threads/new" element={<NewThreadsPost />} />
          <Route path="/threads/:thread_id" element={<MessageList />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
