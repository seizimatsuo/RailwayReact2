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
//　追加したときに何らかの通知

//理解が怪しいところ
//　非同期処理
//　画面レイアウト(MUIでの指定方法)
//　型指定
//　開発者ツールの使い方（今後調べる）

//エラー

//実行しているときたまに開発者モードでエラーが出る（動作は正常）、でるときとでないときの差が分からない
// Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true,
// but the message channel closed before a response was received
// 多分非同期処理の話？await async 辺りが関係してそう

// ↑応答が返ってくる前にページのリロード等をしてるのが問題
//　応答が返ってくる前にリロードしてるのでその応答が止まってる？
