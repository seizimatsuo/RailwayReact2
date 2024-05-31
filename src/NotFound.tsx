import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3">ページが見つかりません</Typography>
    </Container>
  );
};
export default NotFound;

//あとやりたいこと
//　画面の拡大、縮小をしたときに画面サイズに合わせてレイアウトの変更
//　入力したのちすぐにテキストフィールドの文章を消去

//理解が怪しいこと
//　非同期処理
//　画面レイアウト(MUIの指定方法含め)
//　型指定

//実行しているときたまにエラーが出る
// Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true,
// but the message channel closed before a response was received
