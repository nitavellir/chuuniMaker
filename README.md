# chuuniMaker

## How To Use

* `/chuuni （厨二度指定） テキスト`
  * 厨二度（0: 弱, 1: 強）
  * 厨二度を指定しない場合、デフォルトの厨二度は0

## 動作環境

* Slack → AWS API Gateway → AWS Lambda

## Slack設定

* スラッシュコマンドのappを作成

## API Gateway設定

* POSTメソッド
* 統合リクエストのマッピングテンプレート
  * パススルー `テンプレートが定義されていない場合 (推奨)` に設定
  * Content-Typeを `application/x-www-form-urlencoded` に設定
  * テンプレートを `{"body":$input.json('$')}` に設定
* 統合レスポンスのマッピングテンプレート
  * Content-Typeを `application/json` に設定
  * テンプレートを `$input.path('$')` に設定
* メソッドレスポンス
  * 200のレスポンス本文のContent-Typeを `application/json` に設定
